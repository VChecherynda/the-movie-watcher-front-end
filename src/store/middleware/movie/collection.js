import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from "@store/modules/movies/types";

import {
  apiRequest,
  showSpinner,
  hideSpinner,
} from "@store/modules/ui/actions";

import { moviesResponse, moviesError } from "@store/modules/movies/actions";

export const getMoviesCollection = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIES) {
    dispatch(
      apiRequest({
        method: "GET",
        body: null,
        url: "movies/find",
        query: action.payload,
        onSuccess: FETCH_MOVIES_SUCCESS,
        onError: FETCH_MOVIES_ERROR,
      })
    );

    dispatch(showSpinner());
  }
};

export const processMoviesCollection = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIES_SUCCESS) {
    dispatch(moviesResponse(action.payload));
    dispatch(hideSpinner());
  }

  if (action.type === FETCH_MOVIES_ERROR) {
    dispatch(moviesError(action.payload));
    dispatch(hideSpinner());
  }
};

export default [getMoviesCollection, processMoviesCollection];
