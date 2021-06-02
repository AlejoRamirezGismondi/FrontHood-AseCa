import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Search from "../Search/Search";
import ActionDetails from "../ActionDetails/ActionDetails";
import Deposit from "../Exchange/Deposit";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/deposit"} component={Deposit}/>
        <Route path={"/action_detail/:id"} component={ActionDetails}/>
        <Route path={"/"} exact component={Search}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
