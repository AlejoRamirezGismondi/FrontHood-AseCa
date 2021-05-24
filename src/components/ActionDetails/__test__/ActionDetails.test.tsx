import {cleanup, fireEvent, render} from "@testing-library/react";
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
  const container = getByTestId("action-name-id")
  expect(container).toHaveTextContent("Nombre de la accion")
});

it('should contain its actual price', () => {
  const { getByTestId } = render(<ActionDetails/>);
  expect(getByTestId("action-name-id")).toHaveTextContent("Precio Actual:")
});

it('should redirect to home when return button is clicked', () => {
  const { getByTestId } = render(<ActionDetails/>);
  const button = getByTestId("return-button-id");
  fireEvent.click(button);
  expect(window.location.href).toBe('http://localhost/');
});
