import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteMovie } from "@store/modules/movies/middleware";
import { selectModalData } from "@store/modules/modals/selectors";

import useModals from "@hooks/useModal";

import ModalDelete from "@components/modals/delete";

const Delete = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  const { isVisible, showModal } = useModals();

  const save = () => {
    dispatch(deleteMovie(modalData.id));
    showModal(false);
  };

  const cancel = () => {
    showModal(false);
    console.log("Create cancel");
  };

  return (
    <ModalDelete
      isVisible={isVisible}
      title="Are you sure ?"
      save={save}
      cancel={cancel}
    />
  );
};

export default Delete;
