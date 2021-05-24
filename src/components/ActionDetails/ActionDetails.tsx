import React, {useState} from 'react';
import StockExchange from "../Exchange/StockExchange";
import {Stock} from "../Models/Stock";

const ActionDetails = () => {
  const [input, setInput] = useState<string>();
  const [stock, setStock] = useState<Stock>({name: 'the Company X', open:123, close: 345, high:500, low:98, last:234, symbol:'TC', volume:34567, exchange:'QWE', date:new Date(Date.now())});

  const removeDollarSign = (value) => (value[0] === '$' ? value.slice(1) : value)
  const getReturnValue = (value) => (value === '' ? '' : `$${value}`)

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }

  const handleBuy = () => {
    //request
    setOpenDrawer(false)
  }

  const handleChange = (ev) => {
    ev.preventDefault()
    const inputtedValue = ev.currentTarget.value
    const noDollarSign = removeDollarSign(inputtedValue)
    if (isNaN(noDollarSign)) return
    setInput(getReturnValue(noDollarSign))
  }

  return (
    <div>
      <h1 data-testid={"detail-id"}>Hello World</h1>
      <button data-testid={"detail-click-me-button-id"} onClick={() => {
        console.log("Clicked")
      }}>Click me!
      </button>
      <form>
        <input value={input} onChange={handleChange} data-testid={"input-id"} aria-label={"input"}/>
        <button type={"submit"} data-testid={"detail-submit-button-id"}>submit</button>
      </form>
        <button onClick={handleOpenDrawer}> buy</button>
      <StockExchange stock={stock} open={openDrawer} onClose={handleBuy} />
    </div>
  );
}

export default ActionDetails;
