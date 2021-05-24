import React, {useState} from 'react';
import {Stock} from "../Models/Stock";
import Drawer from 'react-drag-drawer';
import './StockExchange.css';

type Props = {
    stock: Stock,
    open: boolean,
    onClose: () => void,
}

const StockExchange = (props: Props) => {
    const [value, setValue] = useState<number>();

    function handleChange(event) {
        setValue(event.target.value);
    }

    function submitBuy() {
        props.onClose();
    }

    return (
        <Drawer open={props.open} onRequestClose={props.onClose} className={'buy-drawer'}>
          {/*stock info*/}
            <div>
                <h1>{props.stock.symbol}</h1>
                <h2>{props.stock.exchange}</h2>
            </div>
            <div>
                <h1>{props.stock.open}</h1>
            </div>

          {/*user info*/}

            <form>
                <input type='text' placeholder={'amount'} value={value} onChange={handleChange}/>
                <button onClick={submitBuy}>Buy!</button>
            </form>
        </Drawer>
    )
}

export default StockExchange;

