import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { createMovie } from "@store/modules/movies/middleware";
import { clearStatus, clearRedirectTo } from "@store/modules/movies/actions";

import useRedirect from "@hooks/useRedirect";

import View from "./view";

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

  return <View handleCreate={handleCreate} />;
};

export default useHooks;
