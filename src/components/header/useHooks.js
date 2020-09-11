import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearError } from "@store/modules/movies/reducer";
import { selectError } from "@store/modules/movies/selectors";

const useHooks = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, error]);

  return { headerProps: { error } };
};

export default useHooks;
