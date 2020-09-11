import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";
import { fetchMovies } from "@store/modules/movies/middleware";
import {
  selectSearchWord,
  selectFilteredMovies,
  selectPagination
} from "@store/modules/movies/selectors";

const useHooks = () => {
  const dispatch = useDispatch();

  const searchedWord = useSelector(selectSearchWord);
  const filteredMovies = useSelector(selectFilteredMovies);
  const pagination = useSelector(selectPagination);
  const isNotFound = searchedWord && filteredMovies.length === 0;

  useEffect(() => {
    dispatch(fetchMovies(1));

    return () => {
      dispatch(clearStatus());
      dispatch(clearRedirectTo());
    };
  }, [dispatch]);

  return { listProps: { isNotFound, movies: filteredMovies, pagination } };
};

export default useHooks;
