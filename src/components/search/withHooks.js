import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { saveSearchWord } from "@store/modules/movies/reducer";

const withHooks = WrappedComponent => {
  const Wrapped = props => {
    const dispatch = useDispatch();

    const changed = useCallback(
      e => {
        dispatch(saveSearchWord(e.target.value));
      },
      [dispatch]
    );

    return <WrappedComponent changed={changed} {...props} />;
  };

  return Wrapped;
};

export default withHooks;
