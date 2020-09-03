import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";
import { selectMovies } from "@store/modules/movies/selectors";
import { fetchMovies } from "@store/modules/movies/middleware";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchMovies());

      return () => {
        dispatch(clearStatus());
        dispatch(clearRedirectTo());
      };
    }, [dispatch]);

    return <WrappedComponent movies={movies} {...props} />;
  };

  return Wrapped;
};

export default withHooks;
