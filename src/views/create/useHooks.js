import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { createMovie } from "@store/modules/movies/middleware";
import { clearStatus, clearRedirectTo } from "@store/modules/movies/reducer";

import useRedirect from "@hooks/useRedirect";

const useHooks = () => {
  const dispatch = useDispatch();

  useRedirect();

  useEffect(() => {
    return () => {
      dispatch(clearStatus());
      dispatch(clearRedirectTo());
    };
  }, [dispatch]);

  const handleCreate = useCallback(
    payload => {
      dispatch(createMovie(payload));
    },
    [dispatch]
  );

  return {
    createProps: {
      handleCreate
    }
  };
};

export default useHooks;
