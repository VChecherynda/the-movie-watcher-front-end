import { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { deleteMovie } from "@store/modules/movies/middleware";

const useHooks = ({ movie, ...rest }) => {
  const dispatch = useDispatch();

  const memoMovie = useMemo(() => movie, [movie]);

  const handleDeleteMovie = useCallback(() => {
    const { id = "" } = memoMovie;
    dispatch(deleteMovie(id));
  }, [dispatch, memoMovie]);

  return {
    movieProps: {
      id: memoMovie?.id || "",
      title: memoMovie?.title || "",
      stars: memoMovie?.stars || "",
      handleDeleteMovie
    },
    ...rest
  };
};

export default useHooks;
