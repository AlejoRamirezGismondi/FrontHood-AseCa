import React from 'react';
import {Stock} from "../Models/Stock";

type Props = {
    stock: Stock
}

const StockExchange = (props: Props) => {
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
                <input type='text' />
            </form>
        </div>
    )
}

export default StockExchange;

