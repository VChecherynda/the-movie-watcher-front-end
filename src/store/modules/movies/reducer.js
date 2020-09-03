import { createSlice } from "@reduxjs/toolkit";

import {
  fetchMovies,
  fetchMovieCurrent,
  createMovie,
  deleteMovie
} from "./middleware";

const initialState = {
  status: "idle",
  entities: [],
  current: {},
  error: ""
};

// Under hood reducers uses immer.js library for writing
// brand new immutable state based on changes

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: state => {
      state.status = "loading";
      state.error = "";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = "";
      state.entities = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
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
      state.error = action.error.message;
    },
    [createMovie.pending]: state => {
      state.status = "loading";
      state.error = "";
    },
    [createMovie.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = "";
      state.entities = state.entities.concat(action.payload);
    },
    [createMovie.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [deleteMovie.pending]: state => {
      state.status = "loading";
      state.error = "";
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = "";
      state.current = action.payload;
    },
    [deleteMovie.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const { fetch, fetchResponse, fetchError } = moviesSlice.actions;

export default moviesSlice.reducer;
