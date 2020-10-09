import * as ACTION_TYPES from "./types";

import { createFetchActions, createAction } from "@helpers/actions";

// COLLECTION
export const fetchMovies = (page) => ({
  type: ACTION_TYPES.FETCH_MOVIES,
  payload: page,
});

export const moviesResponse = (items) => ({
  type: ACTION_TYPES.MOVIES_RESPONSE,
  payload: items,
});

export const moviesError = (error) => ({
  type: ACTION_TYPES.MOVIES_RESPONSE,
  payload: error,
});

// CURRENT
export const fetchMovieCurrent = (id) => ({
  type: ACTION_TYPES.FETCH_MOVIE_CURRENT,
  payload: id,
});

export const movieCurrentResponse = (movie) => ({
  type: ACTION_TYPES.MOVIE_CURRENT_RESPONSE,
  payload: movie,
});

export const movieCurrentError = (error) => ({
  type: ACTION_TYPES.MOVIE_CURRENT_ERROR,
  payload: error,
});

// CREATE
export const movieCreate = (id) => ({
  type: ACTION_TYPES.FETCH_MOVIE_CREATE,
  payload: id,
});

export const movieCreateResponse = (movie) => ({
  type: ACTION_TYPES.MOVIE_CREATE_RESPONSE,
  payload: movie,
});

export const movieCreateError = (error) => ({
  type: ACTION_TYPES.MOVIE_CREATE_ERROR,
  payload: error,
});

// DELETE
export const movieDelete = (id) => ({
  type: ACTION_TYPES.FETCH_MOVIE_DELETE,
  payload: id,
});

export const movieDeleteResponse = (movie) => ({
  type: ACTION_TYPES.MOVIE_DELETE_RESPONSE,
  payload: movie,
});

export const movieDeleteError = (error) => ({
  type: ACTION_TYPES.MOVIE_DELETE_ERROR,
  payload: error,
});

// export const uploadMovies = createFetchActions(ACTION_TYPES.UPLOAD_MOVIES);

//COMMON
export const saveSearchWord = createAction(ACTION_TYPES.SAVE_SEARCH_WORD);
export const clearError = createAction(ACTION_TYPES.CLEAR_ERROR);
export const clearStatus = createAction(ACTION_TYPES.CLEAR_STATUS);
