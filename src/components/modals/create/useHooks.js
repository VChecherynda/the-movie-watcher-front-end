import { useDispatch, useSelector } from "react-redux";

import { createMovie } from "@store/modules/movies/middleware";
import { selectModalData } from "@store/modules/modals/selectors";

import useModals from "../../../hooks/useModal";

const useHooks = props => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  const { isVisible, showModal } = useModals();

  return {
    confirmCreateProps: {
      isVisible,
      title: "Confirm",
      save: () => {
        dispatch(createMovie(modalData));
        showModal(false);
      },
      cancel: () => {
        showModal(false);
        console.log("Create cancel");
      },
      hide: () => {
        console.log("[hide]");
        showModal(false);
      }
    }
  };
};

export default useHooks;
