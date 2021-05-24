import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Search from "../Search/Search";
import ActionDetails from "../ActionDetails/ActionDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Search}/>
        <Route path={"/action_detail/:id"}  component={ActionDetails}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
