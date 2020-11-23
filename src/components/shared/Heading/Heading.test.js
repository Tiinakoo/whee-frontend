import { mount } from "enzyme";
import React from "react";

import Heading from "./Heading";

describe("Heading", () => {
  it("renders", () => {
    const component = mount(<Heading>Some button</Heading>);

    expect(component).toMatchSnapshot();
  });
});
