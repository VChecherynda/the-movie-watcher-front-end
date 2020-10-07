import { applyMiddleware, createStore, compose } from "redux";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import modals from "./modules/modals/reducer";
import movies from "./modules/movies/reducer";

const rootReducer = combineReducers({
  modals,
  movies,
});

export const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};
