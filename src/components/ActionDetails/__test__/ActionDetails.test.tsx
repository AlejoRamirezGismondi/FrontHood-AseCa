import React from 'react';
import ReactDOM from 'react-dom';
import ActionDetails from "../ActionDetails";
import {cleanup, render} from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ActionDetails/>, div);
})

it('should render correctly', function () {
  const { getByTestId } = render(<ActionDetails/>);
  expect(getByTestId("detail-id")).toHaveTextContent("Hello World")
});

it('should match snapshot', function () {
  const tree = renderer.create(<ActionDetails/>).toJSON();
  expect(tree).toMatchSnapshot();
});
