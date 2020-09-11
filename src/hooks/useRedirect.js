import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectRedirectTo } from "@store/modules/movies/selectors";

const useRedirect = () => {
  const redirectTo = useSelector(selectRedirectTo);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (redirectTo) {
      history.push(`/${redirectTo}`);
    }
  }, [dispatch, history, redirectTo]);
};

export default useRedirect;
