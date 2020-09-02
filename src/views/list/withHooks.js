import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectMovies } from "@store/modules/movies/selectors";
import { fetchMovies } from "@store/modules/movies/middleware";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);

    return <WrappedComponent movies={movies} {...props} />;
  };

  // Wrapped.defaultProps = {
  //   isLoading: false
  // };

  // Wrapped.propTypes = {
  //   isLoading: bool
  // };

  return Wrapped;
};

export default withHooks;
