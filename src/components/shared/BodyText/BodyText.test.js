import { mount } from "enzyme";
import React from "react";

import BodyText from "./BodyText";

describe("BodyText", () => {
  it("renders", () => {
    const component = mount(<BodyText>Some button</BodyText>);

    expect(component).toMatchSnapshot();
  });
});
