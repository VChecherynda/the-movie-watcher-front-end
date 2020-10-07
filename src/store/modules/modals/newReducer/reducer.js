import actions from "../actions";
import initialState from "../reducer/intialState";

function pending(state) {
  return {
    ...state,
    status: "loading",
    error: ""
  };
}

function rejected(state, action) {
  return {
    ...state,
    status: "failed",
    error: action.payload
  };
}

function fulfilled(state) {
  return {
    ...state,
    status: "succeeded",
    error: ""
  };
}

function saveMovies(state, action) {
  const stateFulfilled = fulfilled(state);
  const { items, ...rest } = action.payload;

  return {
    ...stateFulfilled,
    entities: items,
    pagination: rest
  };
}

function saveCurrentMovie(state, action) {
  const stateFulfilled = fulfilled(state);

  return {
    ...stateFulfilled,
    current: action.payload
  };
}

function saveMovieAfterCreate(state, action) {
  const stateFulfilled = fulfilled(state);
  const newEntities = state.entities.concat(action.payload);

  return {
    ...stateFulfilled,
    entities: newEntities,
    redirectTo: "movies/1"
  };
}

function saveMoviesAfterDelete(state, action) {
  const stateFulfilled = fulfilled(state);
  const filteredEntities = state.entities.filter(
    entity => entity.id !== action.payload.id
  );
  const redirectTo =
    filteredEntities.length === 0
      ? `movies/${state.pagination?.prevPage}`
      : `movies/${state.pagination?.currentPage}`;

  return {
    ...stateFulfilled,
    entities: filteredEntities,
    redirectTo
  };
}

function saveMoviesAfterUpload(state) {
  const stateFulfilled = fulfilled(state);

  return {
    ...stateFulfilled,
    pagination: {
      ...state.pagination,
      total: state.pagination.total + 1
    },
    redirectTo: "movies/1"
  };
}

function movieReducer(state = initialState, action) {
  switch (action.type) {
    // Fetch Movies
    case [actions.saveSearchWord]:
      return {
        ...state,
        searchWord: action.payload
      };

    case [actions.setRedirectTo]:
      return {
        ...state,
        redirectTo: action.payload
      };

    case [actions.clearError]:
      return {
        ...state,
        error: ""
      };

    case [actions.clearStatus]:
      return {
        ...state,
        status: ""
      };

    case [actions.clearRedirectTo]:
      return {
        ...state,
        redirectTo: ""
      };

    // Fetch Movies
    case [actions.fetchMovies.pending]:
      return pending(state);

    case [actions.fetchMovies.fulfilled]:
      return saveMovies(state, action);

    case [actions.fetchMovies.rejected]:
      return rejected(state);

    // Fetch Current Movie
    case [actions.fetchMovieCurrent.pending]:
      return pending(state);

    case [actions.fetchMovieCurrent.fulfilled]:
      return saveCurrentMovie(state, action);

    case [actions.fetchMovieCurrent.rejected]:
      return rejected(state);

    // Create Movie
    case [actions.createMovie.pending]:
      return pending(state);

    case [actions.createMovie.fulfilled]:
      return saveMovieAfterCreate(state, action);

    case [actions.createMovie.rejected]:
      return rejected(state);

    // Delete new Movie
    case [actions.deleteMovie.pending]:
      return pending(state);

    // case [actions.createMovie.fulfilled]:
    //   return saveMoviesAfterDelete(state, action);

    // case [actions.createMovie.rejected]:
    //   return rejected(state);

    // Upload Movies
    case [actions.uploadMovies.pending]:
      return pending(state);

    case [actions.uploadMovies.fulfilled]:
      return saveMoviesAfterUpload(state, action);

    case [actions.uploadMovies.rejected]:
      return rejected(state);

    default:
      return initialState;
  }
}

export default movieReducer;
