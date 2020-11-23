import getShapes, { dependencies } from "./getShapes";

describe("getShapes", () => {
  it("has correct dependencies", () => {
    expect(dependencies).toEqual({ callApiForShapes: expect.any(Function) });
  });

  describe("given stubbed dependencies", () => {
    let callApiForShapesMock;

    beforeEach(() => {
      callApiForShapesMock = jest.fn(() => [
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
          price: 100,
          currency: "€",
        },
      ]);

      dependencies.callApiForShapes = callApiForShapesMock;
    });

    describe("when called", () => {
      let actual;

      beforeEach(() => {
        actual = getShapes();
      });

      it("calls for shapes", () => {
        expect(callApiForShapesMock).toHaveBeenCalled();
      });

      it("returns shapes", () => {
        expect(actual).toEqual({
          callWasSuccessful: true,
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
              price: 100,
              currency: "€",
            },
          ],
        });
      });
    });
  });
});
