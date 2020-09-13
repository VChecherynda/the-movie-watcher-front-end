import React from "react";
import { useSelector } from "react-redux";

import { selectModalType } from "@store/modules/modals/selectors";

import Delete from "./delete";

const MODAL_COMPONENTS = {
  DELETE_MODAL: Delete
};

const Modals = () => {
  const modalType = useSelector(selectModalType);

  if (!modalType) {
    return null;
  }

  const SprecificModal = MODAL_COMPONENTS[modalType];

  return <SprecificModal />;
};

export default Modals;
