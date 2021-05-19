import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React from 'react';
import ActionDetails from "../ActionDetails/ActionDetails";

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={ActionDetails}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
