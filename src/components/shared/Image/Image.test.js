import React from "react";

import { mount } from "enzyme";
import Image from "./Image";

describe("Image", () => {
  it("renders", () => {
    const component = mount(<Image />);

    expect(component).toMatchSnapshot();
  });
});
