import { createSelector } from "reselect";

import { filterWords } from "@helpers/filter";

export const selectRedirectTo = state => state.movies.redirectTo;

export const selectMovies = state => state.movies.entities;

export const selectMovieCurrent = state => state.movies.current;

export const selectError = state => state.movies.error;

export const selectSearchWord = state => state.movies.searchWord;

export const selectFilteredMovies = createSelector(
  [selectMovies, selectSearchWord],
  (movies, searchWord) => {
    return filterWords(movies, searchWord, ["title", "stars"]);
  }
);
