import {cleanup, render} from "@testing-library/react";
import ReactDOM from "react-dom";
import StockExchange from "../StockExchange";
import renderer from 'react-test-renderer';
import React from "react";

// https://jestjs.io/docs/asynchronous#:~:text=Promises,the%20test%20will%20automatically%20fail.
// /\ para testear promises /\

afterEach(cleanup);

const stockExchange = <StockExchange onClose={()=>{}} open stock={{
  symbol:'QQQ',
  name: 'NAME',
  type: 'type',
  region: 'LA',
  timezone: 'UTC-3',
  currency: 'USD',}}/>

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(stockExchange, div);
})

it('should contain stock name', () => {
  const { getByTestId } = render(stockExchange);
  expect(getByTestId("stock-name-id")).toHaveTextContent('NAME')
});

it('should contain stock symbol', () => {
  const { getByTestId } = render(stockExchange);
  expect(getByTestId("stock-symbol-id")).toHaveTextContent('QQQ')
});
