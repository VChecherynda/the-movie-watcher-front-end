import * as ACTION_TYPES from "./types";

import { createFetchActions, createAction } from '@helpers/actions'

export default {
  //FETCH
  fetchMovies: createFetchActions(ACTION_TYPES.FETCH_MOVIES),
  fetchMovieCurrent: createFetchActions(ACTION_TYPES.FETCH_MOVIE_CURRENT),
  uploadMovies: createFetchActions(ACTION_TYPES.UPLOAD_MOVIE),
  createMovie: createFetchActions(ACTION_TYPES.CREATE_MOVIE),
  deleteMovie: createFetchActions(ACTION_TYPES.DELETE_MOVIE),
  //COMMON
  saveSearchWord: createAction(ACTION_TYPES.SAVE_SEARCH_WORD),
  setRedirectTo: createAction(ACTION_TYPES.SET_REDIRECT_TO),
  clearError: createAction(ACTION_TYPES.CLEAR_ERROR),
  clearStatus: createAction(ACTION_TYPES.CLEAR_STATUS),
  clearRedirectTo: createAction(ACTION_TYPES.CLEAR_REDIRECT_TO)
};
