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
  redirectTo: "",
  error: ""
};

// Under hood reducers uses immer.js library for writing
// brand new immutable state based on changes

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
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
      state.status = "succeeded";
      state.error = "";
      state.entities = action.payload;
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
      state.status = "succeeded";
      state.redirectTo = "/";
      state.error = "";
      state.entities = state.entities.concat(action.payload);
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
      state.status = "succeeded";
      state.error = "";
      state.entities = state.entities.filter(
        entity => entity.id !== action.payload.id
      );
    },
    [deleteMovie.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    }
  }
});

export const { clearError, clearStatus, clearRedirectTo } = moviesSlice.actions;

export default moviesSlice.reducer;
