import App from "./App";
import { shallow } from "enzyme";
import React from "react";
import "./setupTests";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });
});
