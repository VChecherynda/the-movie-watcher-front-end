import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "@store/modules/modals/actions";
import { selectModalShow } from "@store/modules/modals/selectors";

const useModals = () => {
  const { showModal, clearModal } = actions;
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
