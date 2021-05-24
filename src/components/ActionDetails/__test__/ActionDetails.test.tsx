import {cleanup} from "@testing-library/react";
import ReactDOM from "react-dom";
import React from "react";
import ActionDetails from "../ActionDetails";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ActionDetails/>, div);
});

it('should match snapshot', function () {
  const tree = renderer.create(<ActionDetails/>).toJSON();
  expect(tree).toMatchSnapshot();
});
