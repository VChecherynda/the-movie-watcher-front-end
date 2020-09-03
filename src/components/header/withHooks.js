import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearError } from "@store/modules/movies/reducer";
import { selectError } from "@store/modules/movies/selectors";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);

    useEffect(() => {
      if (error) {
        const timer = setTimeout(() => {
          dispatch(clearError());
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [dispatch, error]);

    return <WrappedComponent error={error} {...props} />;
  };

  return Wrapped;
};

export default withHooks;
