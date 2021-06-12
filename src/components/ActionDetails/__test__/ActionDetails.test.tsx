import ActionDetails from "../ActionDetails";
import React from 'react';
import ReactDOM from "react-dom";
import {getByTestId} from "@testing-library/react";

let root;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    symbol: 'A',
    name: 'AgilentInc',
  }),
  useRouteMatch: () => ({ url: '/action-details/AgilentInc/A' }),
}));

beforeAll(() => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ActionDetails/>
    , div);
  root = div;
});

it('should contain name', function () {
  expect(getByTestId(root, "action-name-id")).toHaveTextContent("Nombre de la accion");
});

it('should contain its actual price', () => {
  expect(getByTestId(root, "actual-price-id")).toHaveTextContent("Precio Actual:");
});
