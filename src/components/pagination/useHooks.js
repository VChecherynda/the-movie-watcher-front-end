import { useDispatch } from "react-redux";

import { fetchMovies } from "@store/modules/movies/middleware";

const useHooks = ({ pagination }) => {
  const dispatch = useDispatch();
  return {
    paginationProps: {
      currentPage: Number(pagination?.currentPage) || 1,
      nextPage: Number(pagination?.nextPage) || 1,
      prevPage: Number(pagination?.prevPage) || 0,
      lastPage: Number(pagination?.lastPage) || 0,
      hasNextPage: pagination?.hasNextPage,
      hasPrevPage: pagination?.hasPrevPage
    },
    fetchMovies: page => dispatch(fetchMovies(page))
  };
};

export default useHooks;
