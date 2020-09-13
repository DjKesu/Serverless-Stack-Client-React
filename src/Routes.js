import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.js"
import NotFound from "./containers/NotFound.js";
export default function Routes(){
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      /*Handling all error 404s*/
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
