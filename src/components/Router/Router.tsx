import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React from 'react';
import ActionDetails from "../ActionDetails/ActionDetails";
import Receipt from "../ActionBuying/Receipt";
import StockExchange from "../ActionBuying/StockExchange";
import Search from "../Search/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/buy"} component={forActionBuy}/>
        <Route path={"/search"} exact component={Search}/>
        <Route path={"/"} exact component={ActionDetails}/>
      </Switch>
    </BrowserRouter>
  )
}

const forActionBuy = () => {

    const mockAction = {
        date: new Date(),
        symbol: "HOL",
        exchange: "NOW",
        open: 10,
        high: 11,
        low: 9,
        close: 2,
        last: 14,
        volume: 13000
    }

    return (
        <StockExchange action={mockAction}/>
    )
}

export default Router;
