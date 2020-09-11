import { createSlice } from "@reduxjs/toolkit";

import {
  fetchMovies,
  fetchMovieCurrent,
  createMovie,
  deleteMovie,
  uploadMovieList
} from "./middleware";

const initialState = {
  status: "idle",
  searchWord: "",
  entities: [],
  pagination: {},
  current: {},
  redirectTo: "",
  error: ""
};

// Under hood reducers uses immer.js library for writing
// brand new immutable state based on changes

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    saveSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
    setRedirectTo: (state, action) => {
      state.redirectTo = action.payload;
    },
    clearError: state => {
      state.error = "";
    },
    clearStatus: state => {
      state.status = "";
    },
    clearRedirectTo: state => {
      state.redirectTo = "";
    }
  },
  extraReducers: {
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
    },
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
    },
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
    },
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

      state.error = "";
      state.entities = filteredEntities;
    },
    [deleteMovie.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [uploadMovieList.pending]: state => {
      state.status = "loading";
      state.error = "";
    },
    [uploadMovieList.fulfilled]: state => {
      state.status = "succeeded";
      state.error = "";
      state.redirectTo = "movies/1";
    },
    [uploadMovieList.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    }
  }
});

export const {
  saveSearchWord,
  setRedirectTo,
  clearError,
  clearStatus,
  clearRedirectTo
} = moviesSlice.actions;

export default moviesSlice.reducer;
