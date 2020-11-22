import React from "react";

import { shallow } from "enzyme";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders", () => {
    const component = shallow(<Navigation />);

    expect(component).toMatchSnapshot();
  });
});
