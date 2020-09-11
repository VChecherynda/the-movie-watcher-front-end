import React from "react";

import { Pagination } from "react-bootstrap";

import useHooks from "./useHooks";
import { defaultTypes, types } from "./types";

function PaginationComponent(props) {
  const {
    paginationProps: {
      prevPage,
      currentPage,
      nextPage,
      lastPage,
      hasPrevPage,
      hasNextPage
    },
    fetchMovies
  } = useHooks(props);

  return (
    <Pagination>
      {currentPage !== 1 && prevPage !== 1 && <Pagination.Item  onClick={() => fetchMovies(1)}>{1}</Pagination.Item>}

      {hasPrevPage && <Pagination.Item onClick={() => fetchMovies(prevPage)}>{prevPage}</Pagination.Item>}

      {currentPage === lastPage && <Pagination.Ellipsis />}

      {currentPage && <Pagination.Item active>{currentPage}</Pagination.Item>}

      {hasNextPage && <Pagination.Ellipsis />}

      {hasNextPage && <Pagination.Item onClick={() => fetchMovies(nextPage)}>{nextPage}</Pagination.Item>}

      {lastPage !== currentPage && lastPage !== nextPage && (
        <Pagination.Item onClick={() => fetchMovies(lastPage)}>{lastPage}</Pagination.Item>
      )}
    </Pagination>
  );
}

PaginationComponent.defaultProps = defaultTypes;
PaginationComponent.propTypes = types;

export default PaginationComponent;
