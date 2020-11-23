import App from "./App";
import { mount } from "enzyme";
import React from "react";
import "./setupTests";

describe("App", () => {
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

    component = mount(<App shapesModel={shapesModelStub} />);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });
});
