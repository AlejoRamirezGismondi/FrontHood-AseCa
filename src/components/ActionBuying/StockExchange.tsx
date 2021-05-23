import React from 'react';
import {Stock} from "../Models/Stock";

type Props = {
    action: Stock
}

const StockExchange = (props: Props) => {
    return (
        <div>
            <div>
                <h1>{props.action.symbol}</h1>
                <h2>{props.action.exchange}</h2>
            </div>
            <div>
                <h1>{props.action.open}</h1>
            </div>

            <form>
                <input type='text' />
            </form>


        </div>
    )
}

export default StockExchange;

