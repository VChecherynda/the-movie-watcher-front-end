import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearError } from "@store/modules/movies/actions";
import { selectError } from "@store/modules/movies/selectors";

import HeaderComponent from "@components/header";

const Header = () => {
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

  return <HeaderComponent error={error} />;
};

export default Header;
