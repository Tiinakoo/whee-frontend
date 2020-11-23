import { mount } from "enzyme";
import React from "react";

import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton", () => {
  it("renders", () => {
    const component = mount(<PrimaryButton>Some button</PrimaryButton>);

    expect(component).toMatchSnapshot();
  });
});
