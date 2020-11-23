import React from "react";

import { mount } from "enzyme";
import Element from "./Element";

describe("Element", () => {
  it("renders", () => {
    const component = mount(<Element />);

    expect(component).toMatchSnapshot();
  });
});
