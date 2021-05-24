import {cleanup, render} from "@testing-library/react";
import ReactDOM from "react-dom";
import React from "react";
import ActionDetails from "../ActionDetails";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ActionDetails/>, div);
});

it('should match snapshot', () => {
  const tree = renderer.create(<ActionDetails/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should contain its name', () => {
  const { getByTestId } = render(<ActionDetails/>);
  expect(getByTestId("action-name-id")).toHaveTextContent("Nombre de la accion")
});

it('should contain its actual price', () => {
  const { getByTestId } = render(<ActionDetails/>);
  expect(getByTestId("action-name-id")).toHaveTextContent("Precio Actual:")
});

