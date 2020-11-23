import Shapes from "./Shapes";
import React from "react";
import { mount } from "enzyme";

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
          addToCart: expect.any(Function),
        },
      ],
    };

    component = mount(<Shapes shapesModel={shapesModelStub} />);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });
});
