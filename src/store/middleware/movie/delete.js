import {
  FETCH_MOVIE_DELETE,
  FETCH_MOVIE_DELETE_SUCCESS,
  FETCH_MOVIE_DELETE_ERROR,
} from "@store/modules/movies/types";

import {
  apiRequest,
  showSpinner,
  hideSpinner,
} from "@store/modules/ui/actions";

import {
  movieDeleteResponse,
  movieDeleteError,
} from "@store/modules/movies/actions";

export const deleteMovie = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIE_DELETE) {
    dispatch(
      apiRequest({
        method: "DELETE",
        body: null,
        url: "movies/delete",
        query: action.payload,
        onSuccess: FETCH_MOVIE_DELETE_SUCCESS,
        onError: FETCH_MOVIE_DELETE_ERROR,
      })
    );

    dispatch(showSpinner());
  }
};

export const processMovieDelete = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIE_DELETE_SUCCESS) {
    dispatch(movieDeleteResponse(action.payload));
    dispatch(hideSpinner());
  }

  if (action.type === FETCH_MOVIE_DELETE_ERROR) {
    dispatch(movieDeleteError(action.payload));
    dispatch(hideSpinner());
  }
};

export default [deleteMovie, processMovieDelete];
