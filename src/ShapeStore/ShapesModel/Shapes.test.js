import Shapes from "./Shapes";
import React from "react";
import { mount } from "enzyme";
import matches from "lodash/fp/matches";

describe("Shapes", () => {
  let component;
  let shapesModelStub;

  beforeEach(() => {
    shapesModelStub = {
      shapes: [
        {
          id: "some-shape-id",
          name: "some-shape-name",
          description: "some-shape-description",
          price: 100,
          currency: "€",
          addToCart: () => {},
        },
      ],
    };

    component = mount(<Shapes shapesModel={shapesModelStub} />);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  it("knows how to submit", () => {
    const shapeStub = shapesModelStub.shapes.find(
      matches({ id: "some-shape-id" })
    );

    const button = component.find(
      "PrimaryButton[data-add-to-cart-test='some-shape-id']"
    );

    expect(button).toHaveProp("onClick", shapeStub.addToCart);
  });
});
