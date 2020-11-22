import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

React.useLayoutEffect = React.useEffect;
