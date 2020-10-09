import * as ACTION_TYPES from "./types";

import { createFetchActions, createAction } from "@helpers/actions";

//FETCH
export const fetchMovies = (page) => ({
  type: ACTION_TYPES.FETCH_MOVIES,
  payload: page,
});

export const moviesResponse = (action) => ({
  type: ACTION_TYPES.MOVIES_RESPONSE,
  payload: action.payload,
});

export const moviesError = (action) => ({
  type: ACTION_TYPES.MOVIES_RESPONSE,
  payload: action.payload,
});

export const fetchMovieCurrent = createFetchActions(
  ACTION_TYPES.FETCH_MOVIE_CURRENT
);
export const uploadMovies = createFetchActions(ACTION_TYPES.UPLOAD_MOVIES);
export const createMovie = createFetchActions(ACTION_TYPES.CREATE_MOVIE);
export const deleteMovie = createFetchActions(ACTION_TYPES.DELETE_MOVIE);
//COMMON
export const saveSearchWord = createAction(ACTION_TYPES.SAVE_SEARCH_WORD);
export const setRedirectTo = createAction(ACTION_TYPES.SET_REDIRECT_TO);
export const clearError = createAction(ACTION_TYPES.CLEAR_ERROR);
export const clearStatus = createAction(ACTION_TYPES.CLEAR_STATUS);
export const clearRedirectTo = createAction(ACTION_TYPES.CLEAR_REDIRECT_TO);
