import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { redirectTo } from "@store/modules/ui/actions";
import { fetchMovies } from "@store/modules/movies/actions";

import PaginationComponent from "@components/pagination";

const Pagination = ({ isNoMovies, pagination }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleMovies = page => {
    dispatch(fetchMovies(page));
    dispatch(redirectTo(`movies/${page}`));
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
