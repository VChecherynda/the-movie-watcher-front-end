import { makeFetchingTypes } from '@helpers/types';

// FETCHING
export const FETCH_MOVIES = "[movies] fetch";

export const FETCH_MOVIES_SUCCESS = "[movies] fetch success";

export const FETCH_MOVIES_ERROR = "[movies] fetch error";

export const MOVIES_RESPONSE = "[movies] response";

export const MOVIES_ERROR = "[movies] error";


export const UPDATE_MOVIES = makeFetchingTypes("[movies] update");

export const FETCH_MOVIE_CURRENT = makeFetchingTypes("fetchMovieCurrent");

export const CREATE_MOVIE = makeFetchingTypes("createMovie");

export const DELETE_MOVIE = makeFetchingTypes("deleteMovie");

export const UPLOAD_MOVIES = makeFetchingTypes("uploadMovies");

// COMMON
export const SAVE_SEARCH_WORD = "saveSearchWord";

export const SET_REDIRECT_TO = "setRedirectTo";

export const CLEAR_ERROR = "clearError";

export const CLEAR_STATUS = "clearStatus";

export const CLEAR_REDIRECT_TO = "clearRedirectTo";
