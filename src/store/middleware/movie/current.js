import {
    FETCH_MOVIE_CURRENT,
    FETCH_MOVIE_CURRENT_SUCCESS,
    FETCH_MOVIE_CURRENT_ERROR
} from "@store/modules/movies/types";

import {
  apiRequest,
  showSpinner,
  hideSpinner,
} from "@store/modules/ui/actions";

import {
  movieCurrentResponse,
  movieCurrentError,
} from "@store/modules/movies/actions";

export const getMovieCurrent = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIE_CURRENT) {
    dispatch(
      apiRequest({
        method: "GET",
        data: null,
        url: "movies/find-one",
        query: action.payload,
        onSuccess: FETCH_MOVIE_CURRENT_SUCCESS,
        onError: FETCH_MOVIE_CURRENT_ERROR,
      })
    );

    dispatch(showSpinner());
  }
};

export const processMovieCurrent = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIE_CURRENT_SUCCESS) {
    dispatch(movieCurrentResponse(action.payload));
    dispatch(hideSpinner());
  }

  if (action.type === FETCH_MOVIE_CURRENT_ERROR) {
    dispatch(movieCurrentError(action.payload));
    dispatch(hideSpinner());
  }
};

export default [getMovieCurrent, processMovieCurrent];
