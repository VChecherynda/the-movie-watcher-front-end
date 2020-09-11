import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setRedirectTo } from "@store/modules/movies/reducer";
import { fetchMovies } from "@store/modules/movies/middleware";

const useHooks = ({ isNoMovies, pagination }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleMovies = page => {
    dispatch(fetchMovies(page));
    dispatch(setRedirectTo(`movies/${page}`));
  };

  return {
    paginationProps: {
      isNoMovies,
      currentPage: Number(pagination?.currentPage) || 1,
      nextPage: Number(pagination?.nextPage) || 1,
      prevPage: Number(pagination?.prevPage) || 0,
      lastPage: Number(pagination?.lastPage) || 0,
      hasNextPage: pagination?.hasNextPage,
      hasPrevPage: pagination?.hasPreviousPage
    },
    handleMovies: page => handleMovies(page)
  };
};

export default useHooks;
