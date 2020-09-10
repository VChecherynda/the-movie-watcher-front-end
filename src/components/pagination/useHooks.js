import { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  showModal,
  setModalType,
  setModalData
} from "@store/modules/modals/reducer";

const useHooks = ({ movie, ...rest }) => {
  const dispatch = useDispatch();

  return {};
};

export default useHooks;
