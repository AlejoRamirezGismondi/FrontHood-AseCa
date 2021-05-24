import React, {useState} from 'react';
import {Stock} from "../Models/Stock";

type Props = {
    stock: Stock
}

const StockExchange = (props: Props) => {
    const [value, setValue] = useState<number>();

    function handleChange(event) {
        setValue(event.target.value);
    }

    function submitBuy() {

    }

    return (
        <div>
            <div>
                <h1>{props.stock.symbol}</h1>
                <h2>{props.stock.exchange}</h2>
            </div>
            <div>
                <h1>{props.stock.open}</h1>
            </div>

            <form>
                <input type='text' placeholder={'amount'} value={value} onChange={handleChange}/>
                <button onClick={submitBuy}>Buy!</button>
            </form>
        </div>
    )
}

export default StockExchange;

