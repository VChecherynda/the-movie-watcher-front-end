import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import actions from "@store/modules/movies/actions";
import { fetchMovies } from "@store/modules/movies/middleware";
import {
  selectSearchWord,
  selectFilteredMovies,
  selectPagination,
} from "@store/modules/movies/selectors";

import useRedirect from "@hooks/useRedirect";

import View from "./view";

const useHooks = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const currentPage = params?.page || 1;

  useRedirect();

  const searchedWord = useSelector(selectSearchWord);
  const filteredMovies = useSelector(selectFilteredMovies);
  const pagination = useSelector(selectPagination);
  const paginationTotal = pagination?.total;
  const isPaginationExsist = paginationTotal > 0;
  const isNotFound = Boolean(searchedWord) && filteredMovies.length === 0;

  useEffect(() => {
    const { clearStatus, clearRedirectTo } = actions;


    dispatch(fetchMovies(currentPage));

    return () => {
      dispatch(clearStatus());
      dispatch(clearRedirectTo());
    };
  }, [dispatch, currentPage]);

  return (
    <View
      isPaginationExsist={isPaginationExsist}
      isNotFound={isNotFound}
      movies={filteredMovies}
      pagination={pagination}
    />
  );
};

export default useHooks;
