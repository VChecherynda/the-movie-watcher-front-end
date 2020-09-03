import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { deleteMovie } from "@store/modules/movies/middleware";

const withHooks = WrappedComponent => {
  const Wrapped = ({ movie, ...rest }) => {
    const dispatch = useDispatch();

    const memoMovie = useMemo(() => movie, [movie]);

    const handleDeleteMovie = useCallback(() => {
      const { id = "" } = memoMovie;
      dispatch(deleteMovie(id));
    }, [dispatch, memoMovie]);

    return (
      <WrappedComponent
        movie={memoMovie}
        handleDeleteMovie={handleDeleteMovie}
        {...rest}
      />
    );
  };

  return Wrapped;
};

export default withHooks;
