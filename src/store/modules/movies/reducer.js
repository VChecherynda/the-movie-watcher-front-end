import {
  SAVE_SEARCH_WORD,
  SET_REDIRECT_TO,
  CREATE_MOVIE,
  DELETE_MOVIE,
  MOVIES_RESPONSE,
  MOVIES_ERROR,
  FETCH_MOVIE_CURRENT,
  UPLOAD_MOVIES,
  CLEAR_ERROR,
  CLEAR_STATUS,
  CLEAR_REDIRECT_TO,
} from "./types";

import initialState from "./intialState";

function pending(state) {
  return {
    ...state,
    status: "loading",
    error: "",
  };
}

function rejected(state, action) {
  return {
    ...state,
    status: "failed",
    error: action.payload,
  };
}

function fulfilled(state) {
  return {
    ...state,
    status: "succeeded",
    error: "",
  };
}

function saveMovies(state, action) {
  const stateFulfilled = fulfilled(state);
  const { items, ...rest } = action.payload;

  return {
    ...stateFulfilled,
    entities: items,
    pagination: rest,
  };
}

function saveCurrentMovie(state, action) {
  const stateFulfilled = fulfilled(state);

  return {
    ...stateFulfilled,
    current: action.payload,
  };
}

function saveMovieAfterCreate(state, action) {
  const stateFulfilled = fulfilled(state);
  const newEntities = state.entities.concat(action.payload);

  return {
    ...stateFulfilled,
    entities: newEntities,
    redirectTo: "movies/1",
  };
}

function saveMoviesAfterDelete(state, action) {
  const stateFulfilled = fulfilled(state);
  const filteredEntities = state.entities.filter(
    (entity) => entity.id !== action.payload.id
  );

  const redirectTo =
    filteredEntities.length === 0
      ? `movies/${state.pagination?.prevPage}`
      : `movies/${state.pagination?.currentPage}`;

  return {
    ...stateFulfilled,
    entities: filteredEntities,
    redirectTo,
  };
}

function saveMoviesAfterUpload(state) {
  const stateFulfilled = fulfilled(state);

  return {
    ...stateFulfilled,
    pagination: {
      ...state.pagination,
      total: state.pagination.total + 1,
    },
    redirectTo: "movies/1",
  };
}

function movieReducer(state = initialState, action) {
  switch (action.type) {
    // Fetch Movies
    case SAVE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };

    case SET_REDIRECT_TO:
      return {
        ...state,
        redirectTo: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };

    case CLEAR_STATUS:
      return {
        ...state,
        status: "",
      };

    case CLEAR_REDIRECT_TO:
      return {
        ...state,
        redirectTo: "",
      };

    // Movies
    case MOVIES_RESPONSE:
      return saveMovies(state, action);

    case MOVIES_ERROR:
      return rejected(state, action);

    // Fetch Current Movie
    case FETCH_MOVIE_CURRENT.PENDING:
      return pending(state);

    case FETCH_MOVIE_CURRENT.SUCCESS:
      return saveCurrentMovie(state, action);

    case FETCH_MOVIE_CURRENT.ERROR:
      return rejected(state, action);

    // Create Movie
    case CREATE_MOVIE.PENDING:
      return pending(state);

    case CREATE_MOVIE.SUCCESS:
      return saveMovieAfterCreate(state, action);

    case CREATE_MOVIE.ERROR:
      return rejected(state, action);

    // Delete Movie
    case DELETE_MOVIE.PENDING:
      return pending(state);

    case DELETE_MOVIE.SUCCESS:
      return saveMoviesAfterDelete(state, action);

    case DELETE_MOVIE.ERROR:
      return rejected(state, action);

    // Upload Movies
    case UPLOAD_MOVIES.PENDING:
      return pending(state);

    case UPLOAD_MOVIES.SUCCESS:
      return saveMoviesAfterUpload(state, action);

    case UPLOAD_MOVIES.ERROR:
      return rejected(state, action);

    default:
      return state;
  }
}

export default movieReducer;
