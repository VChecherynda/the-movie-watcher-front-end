import {
  SAVE_SEARCH_WORD,
  MOVIE_CREATE_RESPONSE,
  MOVIE_CREATE_ERROR,
  MOVIE_DELETE_RESPONSE,
  MOVIE_DELETE_ERROR,
  MOVIES_RESPONSE,
  MOVIES_ERROR,
  MOVIE_CURRENT_RESPONSE,
  MOVIE_CURRENT_ERROR,
  UPLOAD_MOVIES,
  CLEAR_ERROR,
} from "./types";

import initialState from "./intialState";

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
  return {
    ...state,
    current: action.payload,
    error: "",
  };
}

function saveMovieAfterCreate(state, action) {
  const newEntities = state.entities.concat(action.payload);

  return {
    ...state,
    entities: newEntities,
    error: "",
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

    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };

    // Movies
    case MOVIES_RESPONSE:
      return saveMovies(state, action);

    case MOVIES_ERROR:
      return { ...state, error: action?.payload };

    // Fetch Current Movie
    case MOVIE_CURRENT_RESPONSE:
      return saveCurrentMovie(state, action);

    case MOVIE_CURRENT_ERROR:
      return { ...state, error: action?.payload };

    // Create Movie
    case MOVIE_CREATE_RESPONSE:
      return { ...state };

    case MOVIE_CREATE_ERROR:
      return { ...state, error: action?.payload };

    // Delete Movie
    case MOVIE_DELETE_RESPONSE:
      return {
        ...state,
        entities: action.payload,
        error: "",
      };

    case MOVIE_DELETE_ERROR:
      return { ...state, error: action?.payload };

    // Upload Movies
    // case UPLOAD_MOVIES.SUCCESS:
    //   return saveMoviesAfterUpload(state, action);

    // case UPLOAD_MOVIES.ERROR:
    //   return rejected(state, action);

    default:
      return state;
  }
}

export default movieReducer;
