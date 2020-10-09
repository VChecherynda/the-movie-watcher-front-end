import {
  FETCH_MOVIE_CREATE,
  FETCH_MOVIE_CREATE_SUCCESS,
  FETCH_MOVIE_CREATE_ERROR,
} from "@store/modules/movies/types";

import {
  apiRequest,
  showSpinner,
  hideSpinner,
  redirectTo
} from "@store/modules/ui/actions";

import {
  movieCreateResponse,
  movieCreateError,
} from "@store/modules/movies/actions";

export const createMovie = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIE_CREATE) {
    dispatch(
      apiRequest({
        method: "POST",
        data: action.payload,
        url: "movies/create",
        query: null,
        onSuccess: FETCH_MOVIE_CREATE_SUCCESS,
        onError: FETCH_MOVIE_CREATE_ERROR,
      })
    );

    dispatch(showSpinner());
  }
};

export const processMovieCreate = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIE_CREATE_SUCCESS) {
    dispatch(movieCreateResponse(action.payload));
    dispatch(showSpinner());
    dispatch(redirectTo('movies/1'));
  }

  if (action.type === FETCH_MOVIE_CREATE_ERROR) {
    dispatch(movieCreateError(action.payload));
    dispatch(hideSpinner());
  }
};

export default [createMovie, processMovieCreate];
