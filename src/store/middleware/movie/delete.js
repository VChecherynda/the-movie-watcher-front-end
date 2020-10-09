import {
  FETCH_MOVIE_DELETE,
  FETCH_MOVIE_DELETE_SUCCESS,
  FETCH_MOVIE_DELETE_ERROR,
} from "@store/modules/movies/types";

import {
  apiRequest,
  showSpinner,
  hideSpinner,
  redirectTo,
} from "@store/modules/ui/actions";

import {
  fetchMovies,
  movieDeleteResponse,
  movieDeleteError,
} from "@store/modules/movies/actions";

export const deleteMovie = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_MOVIE_DELETE) {
    dispatch(
      apiRequest({
        method: "DELETE",
        data: null,
        url: "movies/delete",
        query: action.payload,
        onSuccess: FETCH_MOVIE_DELETE_SUCCESS,
        onError: FETCH_MOVIE_DELETE_ERROR,
      })
    );

    dispatch(showSpinner());
  }
};

export const processMovieDelete = ({ dispatch, getState }) => (next) => (
  action
) => {
  next(action);

  if (action.type === FETCH_MOVIE_DELETE_SUCCESS) {
    const { entities = [], pagination = {} } = getState().movies;
    const { prevPage = 1, currentPage = 1 } = pagination;

    const filteredEntities = entities.filter(
      (entity) => entity.id !== action.payload.id
    );

    const isEmptyEntities = filteredEntities.length === 0;
    const page = isEmptyEntities ? prevPage : currentPage;
    const pagePath = `movies/${page}`;

    dispatch(movieDeleteResponse(filteredEntities));
    dispatch(showSpinner());
    dispatch(redirectTo(pagePath));
    // dispatch(fetchMovies(page));
  }

  if (action.type === FETCH_MOVIE_DELETE_ERROR) {
    dispatch(movieDeleteError(action.payload));
    dispatch(hideSpinner());
  }
};

export default [deleteMovie, processMovieDelete];
