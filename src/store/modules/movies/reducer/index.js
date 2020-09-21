import { createSlice } from "@reduxjs/toolkit";

import initialState from "./intialState";
import reducers from "./reducers";
import extraReducers from "./extraReducers";

// Under hood reducers uses immer.js library for writing
// brand new immutable state based on changes

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers,
  extraReducers
});

export const {
  saveSearchWord,
  setRedirectTo,
  clearError,
  clearStatus,
  clearRedirectTo
} = moviesSlice.actions;

export default moviesSlice.reducer;
