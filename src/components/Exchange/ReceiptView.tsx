import React from "react";
import {Receipt} from "../Models/Receipt";
import Drawer from 'react-drag-drawer';
import './StockExchange.css';
import {Button} from "@material-ui/core";

type Props = {
    receipt: Receipt,
    open: boolean,
    onClose: () => void,
}

const ReceiptView = (props: Props) => {

    const print = () => {
        window.print();
    }

    return (
    <Drawer open={props.open} onRequestClose={props.onClose} >
        <div className={'receipt-drawer'}>
            <div>
                <h1>Compra exitosa</h1>
                <h2>Accion comprada: {props.receipt.stockSymbol}</h2>
            </div>
            <div>
                <h3> Precio de compra: {props.receipt.price}</h3>
                <h3> Cantidad: {props.receipt.stockBought}</h3>
                <h3> Extraccion total: {props.receipt.stockBought * props.receipt.price}</h3>
            </div>
            <Button variant="contained" color="primary" onClick={print}>Print</Button>
        </div>
    </Drawer>
    )
}

export default ReceiptView;
