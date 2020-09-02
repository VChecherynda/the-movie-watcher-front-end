import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import List from "@views/list";
import Create from "@views/create";
import Movie from "@views/movie";

import "@/styles/styles.scss";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={List} exact />
      <Route path="/create" component={Create} />
      <Route path="/movie" component={Movie} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
