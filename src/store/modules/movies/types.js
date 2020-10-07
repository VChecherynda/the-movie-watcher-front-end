const makeFetchingTypes = (prefix) => {
  const states = ["pending", "success", "error"];

  return states.reduce((acc, item) => {
    const key = item.toUpperCase();
    const value = `${prefix}/${item}`;

    acc[key] = value;
    return acc;
  }, {});
};

// FETCHING
export const FETCH_MOVIES = makeFetchingTypes("fetchMovies");

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
