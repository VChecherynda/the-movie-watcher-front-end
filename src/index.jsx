import React from "react";
import { render } from "react-dom";

import Router from './router';

import store from './store'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <Router />
  </Provider>, document.getElementById("root"));