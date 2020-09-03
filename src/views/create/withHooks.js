import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";
import { createMovie } from "@store/modules/movies/middleware";
import { selectRedirectTo } from "@store/modules/movies/selectors";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const redirectTo = useSelector(selectRedirectTo);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleCreate = useCallback(
      payload => {
        dispatch(createMovie(payload));
      },
      [dispatch]
    );

    useEffect(() => {
      if (redirectTo) {
        history.push(redirectTo);
      }

      return () => {
        dispatch(clearStatus());
        dispatch(clearRedirectTo());
      };
    }, [redirectTo]);

    return <WrappedComponent handleCreate={handleCreate} {...props} />;
  };

  return Wrapped;
};

export default withHooks;
