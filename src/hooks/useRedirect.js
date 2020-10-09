import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectRedirectTo } from "@store/modules/ui/selectors";

const useRedirect = () => {
  const redirectTo = useSelector(selectRedirectTo);

  const history = useHistory();

  useEffect(() => {
    if (redirectTo) {
      history.push(`/${redirectTo}`);
    }
  }, [redirectTo]);
};

export default useRedirect;
