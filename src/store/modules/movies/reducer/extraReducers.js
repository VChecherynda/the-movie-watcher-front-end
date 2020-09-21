import {
  fetchMovies,
  fetchMovieCurrent,
  createMovie,
  deleteMovie,
  uploadMovieList
} from "../middleware";

const fetchMoviesReducer = {
  [fetchMovies.pending]: state => {
    state.status = "loading";
    state.error = "";
  },
  [fetchMovies.fulfilled]: (state, action) => {
    const { items, ...rest } = action.payload;

    state.status = "succeeded";
    state.error = "";
    state.entities = items;
    state.pagination = rest;
  },
  [fetchMovies.rejected]: (state, action) => {
    state.status = "failed";
    state.error = action.payload;
  }
};

const fetchMovieCurrentReducer = {
  [fetchMovieCurrent.pending]: state => {
    state.status = "loading";
    state.error = "";
  },
  [fetchMovieCurrent.fulfilled]: (state, action) => {
    state.status = "succeeded";
    state.error = "";
    state.current = action.payload;
  },
  [fetchMovieCurrent.rejected]: (state, action) => {
    state.status = "failed";
    state.error = action.payload;
  }
};

const createMovieReducer = {
  [createMovie.pending]: state => {
    state.status = "loading";
    state.error = "";
  },
  [createMovie.fulfilled]: (state, action) => {
    const newEntities = state.entities.concat(action.payload);

    state.status = "succeeded";
    state.redirectTo = "movies/1";
    state.error = "";
    state.entities = newEntities;
  },
  [createMovie.rejected]: (state, action) => {
    state.status = "failed";
    state.error = action.payload;
  }
};

const deleteMovieReducer = {
  [deleteMovie.pending]: state => {
    state.status = "loading";
    state.error = "";
  },
  [deleteMovie.fulfilled]: (state, action) => {
    const filteredEntities = state.entities.filter(
      entity => entity.id !== action.payload.id
    );

    const redirectTo =
      filteredEntities.length === 0
        ? `movies/${state.pagination?.prevPage}`
        : `movies/${state.pagination?.currentPage}`;

    state.status = "succeeded";
    state.redirectTo = redirectTo;
    state.pagination.total = state.pagination.total - 1;

    state.error = "";
    state.entities = filteredEntities;
  },
  [deleteMovie.rejected]: (state, action) => {
    state.status = "failed";
    state.error = action.payload;
  }
};

const uploadMovieReducer = {
  [uploadMovieList.pending]: state => {
    state.status = "loading";
    state.error = "";
  },
  [uploadMovieList.fulfilled]: state => {
    state.status = "succeeded";
    state.error = "";
    state.pagination.total = state.pagination.total + 1;
    state.redirectTo = "movies/1";
  },
  [uploadMovieList.rejected]: (state, action) => {
    state.status = "failed";
    state.error = action.payload;
  }
};

export default {
  ...fetchMoviesReducer,
  ...fetchMovieCurrentReducer,
  ...createMovieReducer,
  ...deleteMovieReducer,
  ...uploadMovieReducer
};
