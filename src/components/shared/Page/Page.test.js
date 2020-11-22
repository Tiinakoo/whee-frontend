import React from "react";

import { shallow } from "enzyme";
import Page from "./Page";

describe("Page", () => {
  it("renders", () => {
    const component = shallow(<Page />);

    expect(component).toMatchSnapshot();
  });
});
