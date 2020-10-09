import { applyMiddleware, createStore, compose } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import apiMiddleware from "@store/middleware/api";
import movieMiddleware from "@store/middleware/movie";

import uiReducer from "./modules/ui/reducer";
import modalsReducer from "./modules/modals/reducer";
import moviesReducer from "./modules/movies/reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  modals: modalsReducer,
  movies: moviesReducer,
});

export const configureStore = (preloadedState) => {
  const middlewares = [...movieMiddleware, apiMiddleware];

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};
