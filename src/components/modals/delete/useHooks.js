import { useDispatch, useSelector } from "react-redux";

import { deleteMovie } from "@store/modules/movies/middleware";
import { selectModalData } from "@store/modules/modals/selectors";

import useModals from "../../../hooks/useModal";

const useHooks = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  const { isVisible, showModal } = useModals();

  return {
    confirmCreateProps: {
      isVisible,
      title: "Are you sure ?",
      save: () => {
        dispatch(deleteMovie(modalData.id));
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
