import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showModal, clearModal } from "@store/modules/modals/reducer";
import { selectModalShow } from "@store/modules/modals/selectors";

const useModals = () => {
  const dispatch = useDispatch();

  const isVisible = useSelector(selectModalShow);
  const isNotVisible = !isVisible;

  useEffect(() => {
    if (isNotVisible) {
      dispatch(clearModal());
    }
  }, [dispatch, isNotVisible]);

  return {
    isVisible,
    showModal: isShow => dispatch(showModal(isShow))
  };
};

export default useModals;
