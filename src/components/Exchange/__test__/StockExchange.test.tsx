import {cleanup, fireEvent, render} from "@testing-library/react";
import StockExchange from "../StockExchange";
import {get, put} from "../../http";

// https://jestjs.io/docs/asynchronous#:~:text=Promises,the%20test%20will%20automatically%20fail.
// /\ para testear promises /\

const stockExchange = <StockExchange onClose={()=>{}} open stock={{
  symbol:'AMC',
  name: 'NAME',
  type: 'type',
  region: 'LA',
  timezone: 'UTC-3',
  currency: 'USD',}}/>

describe('test stockExchange', () => {
  afterEach(() => jest.resetAllMocks());
  afterEach(cleanup);

  it('should contain stock name', () => {
    const { getByTestId } = render(stockExchange);
    expect(getByTestId("stock-name-id")).toHaveTextContent('NAME')
  });

  it('should contain stock symbol', () => {
    const { getByTestId } = render(stockExchange);
    expect(getByTestId("stock-symbol-id")).toHaveTextContent('AMC')
  });

  it('test handle change works', () => {
    const { getByTestId } = render(stockExchange);
    // @ts-ignore
    const input: HTMLInputElement = getByTestId("stock-input-id");
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })

  // integration tests
  it('should make a get request', async () => {
    await get('AG8.FRK')
      .then(res => {
        expect(res).toBeDefined();
        expect(res["Global Quote"]).toBeDefined();
      })
  });

  it('should make a put request', async () => {
    await put('1/AG8.FRK/10', {}).then(res => {
      expect(res).toBeDefined();
    })
  });







});






