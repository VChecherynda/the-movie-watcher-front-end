import { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  showModal,
  setModalType,
  setModalData
} from "@store/modules/modals/reducer";

const useHooks = ({ movie, ...rest }) => {
  const dispatch = useDispatch();

  const memoMovie = useMemo(() => movie, [movie]);

  const handleDeleteMovie = useCallback(() => {
    const { id = "" } = memoMovie;
    dispatch(showModal(true));
    dispatch(setModalType("DELETE_MODAL"));
    dispatch(setModalData({ id }));
  }, [dispatch, memoMovie]);

  return {
    movieProps: {
      id: memoMovie?.id || "",
      title: memoMovie?.title || "",
      stars: memoMovie?.stars || "",
      handleDeleteMovie
    },
    ...rest
  };
};

export default useHooks;
