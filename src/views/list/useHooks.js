import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";
import { fetchMovies } from "@store/modules/movies/middleware";
import {
  selectSearchWord,
  selectMovies,
  selectFilteredMovies,
  selectPagination
} from "@store/modules/movies/selectors";

import useRedirect from "@hooks/useRedirect";

const useHooks = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const currentPage = params?.page || 1;

  useRedirect();

  const searchedWord = useSelector(selectSearchWord);
  const movies = useSelector(selectMovies);
  const filteredMovies = useSelector(selectFilteredMovies);
  const pagination = useSelector(selectPagination);
  const isNoMovies = pagination?.total === 0;
  const isNotFound = searchedWord && filteredMovies.length === 0;

  useEffect(() => {
    dispatch(fetchMovies(currentPage));

    return () => {
      dispatch(clearStatus());
      dispatch(clearRedirectTo());
    };
  }, [dispatch, movies, currentPage]);

  return {
    listProps: { isNoMovies, isNotFound, movies: filteredMovies, pagination }
  };
};

export default useHooks;
