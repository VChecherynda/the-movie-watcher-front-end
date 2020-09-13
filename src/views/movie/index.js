import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectMovieCurrent } from "@store/modules/movies/selectors";
import { fetchMovieCurrent } from "@store/modules/movies/middleware";

import View from "./view";

const Movie = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const currentId = params?.id || "";

  const movieCurrent = useSelector(selectMovieCurrent);

  useEffect(() => {
    if (currentId) {
      dispatch(fetchMovieCurrent(currentId));
    }
  }, [dispatch, currentId]);

  return <View movie={movieCurrent} />;
};

export default Movie;
