import React from "react";

import { mount } from "enzyme";
import Icon from "./Icon";

describe("Icon", () => {
  it("renders", () => {
    const component = mount(<Icon />);

    expect(component).toMatchSnapshot();
  });
});
