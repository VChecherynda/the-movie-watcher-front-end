import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "@components/header";
import Search from "@components/search";
import Add from "@components/add";
import Card from "@components/card";
import Pagination from "@components/pagination";

import { defaultTypes, types } from "./types";
import useHooks from "./useHooks";

const List = () => {
  const { listProps } = useHooks();

  return (
    <>
      <Header />

      <Container>
        <Row className="mb-4">
          <Col>
            <Add />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Search />
          </Col>
        </Row>

        <Row className="mb-4">
          {listProps?.isNotFound ? (
            <Col sm={12}>
              <h1>Films not found</h1>
            </Col>
          ) : null}

          {listProps?.movies.map(movie => (
            <Col key={movie?.id} sm={4}>
              <Card movie={movie} />
            </Col>
          ))}
        </Row>

        <Row>
          <Col>
            <Pagination />
          </Col>
        </Row>
          
      </Container>
    </>
  );
};

List.defaultProps = defaultTypes;
List.propTypes = types;

export default List;
