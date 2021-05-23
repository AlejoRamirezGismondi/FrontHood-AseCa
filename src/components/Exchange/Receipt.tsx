import React from "react";
import PrintProvider, {Print} from "react-easy-print";
import {Stock} from "../Models/Stock";
import {User} from "../Models/User";

type Props = {
    user?: User,
    action?: Stock,
    amount?: number
}

const Receipt = (props: Props) => {

}

export default Receipt;