import React from "react";
import { Pagination } from "react-bootstrap";

import { defaultTypes, types } from "./types";

const PaginationComponent = ({
  pagination: {
    prevPage,
    currentPage,
    nextPage,
    lastPage,
    hasPreviousPage,
    hasNextPage
  },
  handleMovies
}) => (
  <Pagination>
    <Pagination.First onClick={() => handleMovies(1)} />

    {currentPage !== 1 && (
      <Pagination.Item onClick={() => handleMovies(1)}>{1}</Pagination.Item>
    )}

    {hasPreviousPage && prevPage !== 2 && prevPage > 1 && <Pagination.Ellipsis />}

    {hasPreviousPage && prevPage !== 1 && (
      <Pagination.Item onClick={() => handleMovies(prevPage)}>
        {prevPage}
      </Pagination.Item>
    )}

    {currentPage && (
      <Pagination.Item onClick={() => handleMovies(currentPage)} active>
        {currentPage}
      </Pagination.Item>
    )}

    {hasNextPage && (
      <Pagination.Item onClick={() => handleMovies(nextPage)}>
        {nextPage}
      </Pagination.Item>
    )}

    {hasNextPage && (nextPage < lastPage - 1) && <Pagination.Ellipsis />}

    {lastPage !== currentPage && lastPage !== nextPage && (
      <Pagination.Item onClick={() => handleMovies(lastPage)}>
        {lastPage}
      </Pagination.Item>
    )}

    <Pagination.Last onClick={() => handleMovies(lastPage)} />
  </Pagination>
);

PaginationComponent.defaultProps = defaultTypes;
PaginationComponent.propTypes = types;

export default PaginationComponent;
