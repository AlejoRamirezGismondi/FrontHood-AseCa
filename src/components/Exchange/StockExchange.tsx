import React, {useEffect, useState} from 'react';
import {Stock} from "../Models/Stock";
import Drawer from 'react-drag-drawer';
import './StockExchange.css';
import {get} from "../http";
import {Button} from "@material-ui/core";

type Props = {
    stock: Stock,
    open: boolean,
    onClose: (price: number, amount: number) => void,
}

const StockExchange = (props: Props) => {
  const [price, setPrice] = useState<number>();
  const [amount, setAmount] = useState<number>();

  function handleChange(event) {
    setAmount(event.target.value);
  }

  useEffect(() => {
    get(props.stock.symbol)
      .then(res => setPrice(res))
  }, [])

  function submitBuy() {
    props.onClose(price, amount);
  }

  return (
    <div>
      <Drawer open={props.open} onRequestClose={props.onClose} >
        <div className={'buy-drawer'}>
        <div>
          <h1 data-testid={"stock-name-id"}>{props.stock.name}</h1>
          <h2 data-testid={"stock-symbol-id"}>{props.stock.symbol}</h2>
        </div>
        <div>
          <h1>Precio actual: {price} {props.stock.currency}</h1>
        </div>
        <form>
          <p>Ingrese la cantidad que desee comprar: </p>
          <input type='text' placeholder={'amount'} value={amount} onChange={handleChange}/>
          <p>SubTotal: {amount * price}</p>
          <Button variant="contained" color="primary" onClick={submitBuy}> Comprar </Button>
        </form>
        </div>
      </Drawer>
    </div>
  )
}

export default StockExchange;

