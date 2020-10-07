import {
  CREATE_MOVIE,
  DELETE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE_CURRENT,
  UPLOAD_MOVIES
} from "./types";

import actions from "./actions";

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

// function saveMoviesAfterDelete(state, action) {
//   const stateFulfilled = fulfilled(state);
//   const filteredEntities = state.entities.filter(
//     (entity) => entity.id !== action.payload.id
//   );
//   const redirectTo =
//     filteredEntities.length === 0
//       ? `movies/${state.pagination?.prevPage}`
//       : `movies/${state.pagination?.currentPage}`;

//   return {
//     ...stateFulfilled,
//     entities: filteredEntities,
//     redirectTo,
//   };
// }

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
    // case [actions.saveSearchWord]:
    //   return {
    //     ...state,
    //     searchWord: action.payload,
    //   };

    // case [actions.setRedirectTo]:
    //   return {
    //     ...state,
    //     redirectTo: action.payload,
    //   };

    // case [actions.clearError]:
    //   return {
    //     ...state,
    //     error: "",
    //   };

    // case [actions.clearStatus]:
    //   return {
    //     ...state,
    //     status: "",
    //   };

    // case [actions.clearRedirectTo]:
    //   return {
    //     ...state,
    //     redirectTo: "",
    //   };

    // Fetch Movies
    case FETCH_MOVIES.PENDING:
      return pending(state);

    case FETCH_MOVIES.SUCCESS:
      return saveMovies(state, action);

    case FETCH_MOVIES.ERROR:
      return rejected(state);

    // Fetch Current Movie
    case FETCH_MOVIE_CURRENT.PENDING:
      return pending(state);

    case FETCH_MOVIE_CURRENT.SUCCESS:
      return saveCurrentMovie(state, action);

    case FETCH_MOVIE_CURRENT.ERROR:
      return rejected(state);

    // Create Movie
    case CREATE_MOVIE.PENDING:
      return pending(state);

    case CREATE_MOVIE.SUCCESS:
      return saveMovieAfterCreate(state, action);

    case CREATE_MOVIE.ERROR:
      return rejected(state);

    // Delete Movie
    case DELETE_MOVIE.PENDING:
      return pending(state);

    case DELETE_MOVIE.SUCCESS:
      return saveMoviesAfterDelete(state, action);

    case DELETE_MOVIE.ERROR:
      return rejected(state);

    // Upload Movies
    case UPLOAD_MOVIES.PENDING:
      return pending(state);

    case UPLOAD_MOVIES.SUCCESS:
      return saveMoviesAfterUpload(state, action);

    case UPLOAD_MOVIES.ERROR:
      return rejected(state);

    default:
      return initialState;
  }
}

export default movieReducer;
