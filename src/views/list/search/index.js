import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { saveSearchWord } from "@store/modules/movies/reducer";

import FormSearch from "@components/forms/search";

const Search = () => {
  const dispatch = useDispatch();

  const changed = useCallback(
    e => {
      dispatch(saveSearchWord(e.target.value));
    },
    [dispatch]
  );

  return <FormSearch changed={changed} />;
};

export default Search;
