import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";
import { fetchMovies } from "@store/modules/movies/middleware";
import {
  selectSearchWord,
  selectFilteredMovies
} from "@store/modules/movies/selectors";

const useHooks = () => {
  const dispatch = useDispatch();

  const searchedWord = useSelector(selectSearchWord);
  const filteredMovies = useSelector(selectFilteredMovies);
  const isNotFound = searchedWord && filteredMovies.length === 0;

  useEffect(() => {
    dispatch(fetchMovies());

    return () => {
      dispatch(clearStatus());
      dispatch(clearRedirectTo());
    };
  }, [dispatch]);

  return { listProps: { isNotFound, movies: filteredMovies } };
};

export default useHooks;
