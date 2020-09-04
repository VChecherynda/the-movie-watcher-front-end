import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";
import { fetchMovies } from "@store/modules/movies/middleware";
import { selectFilteredMovies } from "@store/modules/movies/selectors";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const movies = useSelector(selectFilteredMovies);
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
