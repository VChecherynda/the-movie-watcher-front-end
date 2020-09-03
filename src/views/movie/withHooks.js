import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectMovieCurrent } from "@store/modules/movies/selectors";
import { fetchMovieCurrent } from "@store/modules/movies/middleware";

const withHooks = WrappedComponent => {
  const Wrapped = ({ match, ...rest }) => {
    const {
      params: { id = "" }
    } = match;

    const movieCurrent = useSelector(selectMovieCurrent);
    const dispatch = useDispatch();

    useEffect(() => {
      if (id) {
        dispatch(fetchMovieCurrent(id));
      }
    }, [dispatch, id]);

    return <WrappedComponent movieCurrent={movieCurrent} {...rest} />;
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
