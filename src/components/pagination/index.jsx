import React from "react";
import { Pagination } from "react-bootstrap";

import useHooks from "./useHooks";
import { defaultTypes, types } from "./types";

function PaginationComponent(props) {
  const {
    paginationProps: {
      isNoMovies,
      prevPage,
      currentPage,
      nextPage,
      lastPage,
      hasPrevPage,
      hasNextPage
    },
    handleMovies
  } = useHooks(props);

  if (isNoMovies) {
    return null;
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => handleMovies(1)} />

      {currentPage !== 1 && prevPage !== 1 && (
        <Pagination.Item onClick={() => handleMovies(1)}>{1}</Pagination.Item>
      )}

      {hasPrevPage && currentPage == lastPage && <Pagination.Ellipsis />}

      {hasPrevPage && prevPage !== currentPage && (
        <Pagination.Item onClick={() => handleMovies(prevPage)}>
          {prevPage}
        </Pagination.Item>
      )}

      {currentPage && <Pagination.Item active>{currentPage}</Pagination.Item>}

      {hasNextPage && currentPage !== lastPage && <Pagination.Ellipsis />}

      {hasNextPage && (
        <Pagination.Item onClick={() => handleMovies(nextPage)}>
          {nextPage}
        </Pagination.Item>
      )}

      {lastPage !== currentPage && lastPage !== nextPage && (
        <Pagination.Item onClick={() => handleMovies(lastPage)}>
          {lastPage}
        </Pagination.Item>
      )}

      <Pagination.Last onClick={() => handleMovies(lastPage)} />
    </Pagination>
  );
}

PaginationComponent.defaultProps = defaultTypes;
PaginationComponent.propTypes = types;

export default PaginationComponent;
