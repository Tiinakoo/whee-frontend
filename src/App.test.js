import App from "./App";
import { shallow } from "enzyme";
import React from "react";
import "../setupUnitTests";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });
});
