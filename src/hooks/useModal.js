import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showModal, clearModal } from "@store/modules/modals/reducer";
import { selectModalShow } from "@store/modules/modals/selectors";

const useModals = () => {
  const isVisible = useSelector(selectModalShow);
  const isNotVisible = !isVisible;
  const dispatch = useDispatch();

  console.log();

  useEffect(() => {
    if (isNotVisible) {
      dispatch(clearModal());
    }
  }, [isNotVisible]);

  return {
    isVisible,
    showModal: isShow => dispatch(showModal(isShow))
  };
};

export default useModals;
