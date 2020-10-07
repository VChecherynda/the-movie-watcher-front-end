import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import Router from './router';
import Modals from '@views/modals';

import { configureStore } from './store';

const store = configureStore();

render(
  <Provider store={store}>
    <Modals />
    <Router />
  </Provider>, document.getElementById("root"));