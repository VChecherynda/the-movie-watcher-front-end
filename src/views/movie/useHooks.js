import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectMovieCurrent } from "@store/modules/movies/selectors";
import { fetchMovieCurrent } from "@store/modules/movies/middleware";

const useHooks = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const currentId = params?.id || "";

  const movieCurrent = useSelector(selectMovieCurrent);

  useEffect(() => {
    if (currentId) {
      dispatch(fetchMovieCurrent(currentId));
    }
  }, [dispatch, currentId]);

  return { movieCurrent };
};

export default useHooks;
