import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setRedirectTo } from "@store/modules/movies/reducer";
import { fetchMovies } from "@store/modules/movies/middleware";

import PaginationComponent from "@components/pagination";

const Pagination = ({ isNoMovies, pagination }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleMovies = page => {
    dispatch(fetchMovies(page));
    // dispatch(setRedirectTo(`movies/${page}`));
  };

  return (
    <PaginationComponent
      isNoMovies={isNoMovies}
      pagination={pagination}
      handleMovies={handleMovies}
    />
  );
};

export default Pagination;
