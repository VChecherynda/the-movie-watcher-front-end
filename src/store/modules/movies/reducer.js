import { createSlice } from "@reduxjs/toolkit";

import { fetchMovies } from "./middleware";

const initialState = {
  status: "idle",
  entities: [],
  error: ""
};

// Under hood reducers uses immer.js library for writing
// brand new immutable state based on changes

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      console.log("[fulfilled]");

      state.status = "succeeded";
      state.entities = state.entities.concat(action.payload);
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const { fetch, fetchResponse, fetchError } = moviesSlice.actions;

export default moviesSlice.reducer;
