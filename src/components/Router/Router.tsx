import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React from 'react';
import ActionDetails from "../ActionDetails/ActionDetails";
import Search from "../Search/Search"

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={ActionDetails}/>
        <Route path={"/search"} exact component={Search}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
