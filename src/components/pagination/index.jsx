import React from "react";
// import { Link } from "react-router-dom";

import { Pagination } from "react-bootstrap";

// import useHooks from "./useHooks";
import { defaultTypes, types } from "./types";

function PaginationComponent(props) {
  // const {} = useHooks(props);

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Ellipsis />

      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

PaginationComponent.defaultProps = defaultTypes;
PaginationComponent.propTypes = types;

export default PaginationComponent;
