import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import List from "@views/list";
import Create from "@views/create";
import Movie from "@views/movie";

import "@assets/styles/styles.scss";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/movies/:page" component={List} exact />
      <Route path="/movie/create" component={Create} exact />
      <Route path="/movie/:id" component={Movie} exact />
      <Redirect from="*" to="/movies/1" />
    </Switch>
  </BrowserRouter>
);

export default Router;
