import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { saveSearchWord } from "@store/modules/movies/reducer";

const useHooks = () => {
  const dispatch = useDispatch();

  const changed = useCallback(
    e => {
      dispatch(saveSearchWord(e.target.value));
    },
    [dispatch]
  );

  return { searchProps: { changed } };
};

export default useHooks;
