import { applyMiddleware, createStore, compose } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { apiMiddleware } from "@store/middleware/api";
import { moviesMiddleware } from "@store/middleware/movies";

import ui from "./modules/ui/reducer";
import modals from "./modules/modals/reducer";
import movies from "./modules/movies/reducer";

const rootReducer = combineReducers({
  ui,
  modals,
  movies,
});

export const configureStore = (preloadedState) => {
  const middlewares = [...apiMiddleware, ...moviesMiddleware];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};
