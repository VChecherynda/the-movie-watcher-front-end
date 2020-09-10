import React from "react";
import { useSelector } from "react-redux";

import { selectModalType } from "@store/modules/modals/selectors";

import DeleteModal from "./delete"

const MODAL_COMPONENTS = {
  DELETE_MODAL: DeleteModal
}

const Create = () => {
  const modalType = useSelector(selectModalType)

  if (!modalType) {
    return null
  }

  const SprecificModal = MODAL_COMPONENTS[modalType]

  return <SprecificModal/>
};

export default Create;
