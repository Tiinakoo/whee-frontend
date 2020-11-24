import ShapesModel from "./ShapesModel";
import getShapes from "../getShapes/getShapes";
import { isObservable } from "mobx";
import asyncFnForJest from "@async-fn/jest";
import matches from "lodash/fp/matches";

describe("ShapesModel", () => {
  it("has correct dependencies", () => {
    const targetModel = new ShapesModel();

    const actualDependencies = targetModel.dependencies;

    expect(actualDependencies).toEqual({ getShapes });
  });

  describe("given stubbed dependencies", () => {
    let model;
    let getShapesMock;

    beforeEach(() => {
      getShapesMock = asyncFnForJest();

      model = new ShapesModel(getShapesMock);
    });

    it("is observed", () => {
      expect(isObservable(model)).toBe(true);
    });

    it("initially, has no shapes", () => {
      expect(model.rawShapes).toEqual([]);
    });

    it("initially, shopping cart is empty", () => {
      expect(model.shoppingCart).toEqual([]);
    });

    it("initially, shopping cart status indicates that it is empty", () => {
      expect(model.shoppingCartStatus).toBe("No items in cart");
    });

    describe("when getting shapes", () => {
      beforeEach(() => {
        model.getShapes();
      });

      it("gets data for shapes", () => {
        expect(getShapesMock).toHaveBeenCalled();
      });

      describe("when shapes become available", () => {
        beforeEach(async () => {
          await getShapesMock.resolve({
            response: [
              {
                id: "some-shape-id",
                name: "some-shape-name",
                description: "some-shape-description",
                price: 100,
                currency: "€",
              },
              {
                id: "some-other-shape-id",
                name: "some-other-shape-name",
                description: "some-other-shape-description",
                price: 200,
                currency: "€",
              },
            ],
          });
        });

        it("knows shapes", async () => {
          expect(model.shapes).toEqual([
            {
              id: "some-shape-id",
              name: "some-shape-name",
              description: "some-shape-description",
              price: 100,
              currency: "€",
              addToCart: expect.any(Function),
            },
            {
              id: "some-other-shape-id",
              name: "some-other-shape-name",
              description: "some-other-shape-description",
              price: 200,
              currency: "€",
              addToCart: expect.any(Function),
            },
          ]);
        });

        describe("when adding a shape to a shopping cart", () => {
          beforeEach(() => {
            const shape = model.shapes.find(matches({ id: "some-shape-id" }));

            shape.addToCart();
          });

          it("shopping cart knows item and amount", () => {
            expect(model.shoppingCart).toEqual([
              {
                id: "some-shape-id",
                amount: 1,
              },
            ]);
          });

          it("total items in shopping cart is known", () => {
            expect(model.totalItemsInShoppingCart).toBe(1);
          });

          it("shopping cart status indicates correct amount of items in cart", () => {
            expect(model.shoppingCartStatus).toEqual("1 item in cart");
          });
        });

        describe("when adding a shape to a shopping cart that already has a similar item", () => {
          beforeEach(() => {
            const shape = model.shapes.find(matches({ id: "some-shape-id" }));

            shape.addToCart({
              id: "some-shape-id",
              amount: 1,
            });
            shape.addToCart({
              id: "some-shape-id",
              amount: 1,
            });
          });

          it("shopping cart knows item with correct amount", () => {
            expect(model.shoppingCart).toEqual([
              {
                id: "some-shape-id",
                amount: 2,
              },
            ]);
          });

          it("total items in shopping cart is known", () => {
            expect(model.totalItemsInShoppingCart).toBe(2);
          });

          it("shopping cart status indicates correct amount of items in cart", () => {
            expect(model.shoppingCartStatus).toEqual("2 items in cart");
          });
        });

        describe("when adding another shape to a shopping cart that already has a different item", () => {
          beforeEach(() => {
            const shape = model.shapes.find(matches({ id: "some-shape-id" }));
            const otherShape = model.shapes.find(
              matches({ id: "some-other-shape-id" })
            );

            shape.addToCart({
              id: "some-shape-id",
              amount: 1,
            });
            otherShape.addToCart({
              id: "some-other-shape-id",
              amount: 1,
            });
          });

          it("shopping cart knows both items", () => {
            expect(model.shoppingCart).toEqual([
              {
                id: "some-shape-id",
                amount: 1,
              },
              {
                id: "some-other-shape-id",
                amount: 1,
              },
            ]);
          });

          it("total items in shopping cart is known", () => {
            expect(model.totalItemsInShoppingCart).toBe(2);
          });
        });
      });
    });
  });
});
