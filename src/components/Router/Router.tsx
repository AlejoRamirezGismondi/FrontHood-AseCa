import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React from 'react';
import ActionDetails from "../ActionDetails/ActionDetails";
import Search from "../Search/Search"

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
