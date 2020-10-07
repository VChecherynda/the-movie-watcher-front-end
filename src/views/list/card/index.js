import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  showModal,
  setModalType,
  setModalData,
} from "@store/modules/modals/actions";

import CardComponent from "@components/card";

const Card = ({ movie }) => {
  const dispatch = useDispatch();

  const memoMovie = useMemo(() => movie, [movie]);

  const handleDeleteMovie = useCallback(() => {
    const { id = "" } = memoMovie;
    dispatch(showModal(true));
    dispatch(setModalType("DELETE_MODAL"));
    dispatch(setModalData({ id }));
  }, [dispatch, memoMovie]);

  return (
    <CardComponent
      memoMovie={memoMovie}
      handleDeleteMovie={handleDeleteMovie}
    />
  );
};

export default Card;
