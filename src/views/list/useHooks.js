import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";
import { fetchMovies } from "@store/modules/movies/middleware";
import { selectFilteredMovies } from "@store/modules/movies/selectors";

const useHooks = () => {
  const movies = useSelector(selectFilteredMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());

    return () => {
      dispatch(clearStatus());
      dispatch(clearRedirectTo());
    };
  }, [dispatch]);

  return { movies };
};

export default useHooks;
