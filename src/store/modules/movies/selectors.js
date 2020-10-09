import { createSelector } from "reselect";

import { filterEntetiesByWords } from "@helpers/filter";

export const selectMovies = state => state.movies.entities;

export const selectPagination = state => state.movies.pagination;

export const selectMovieCurrent = state => state.movies.current;

export const selectError = state => state.movies.error;

export const selectSearchWord = state => state.movies.searchWord;

export const selectFilteredMovies = createSelector(
  [selectMovies, selectSearchWord],
  (movies, searchWord) => {
    return filterEntetiesByWords(movies, searchWord, ["title", "stars"]) || [];
  }
);
