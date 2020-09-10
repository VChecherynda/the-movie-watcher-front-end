import React from "react";
import { render } from "react-dom";

import Router from './router';

import store from './store';
import { Provider } from 'react-redux';

import Modals from '@components/modals';

render(
  <Provider store={store}>
    <Modals />
    <Router />
  </Provider>, document.getElementById("root"));