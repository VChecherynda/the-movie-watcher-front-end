import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./header";
import Search from "./search";
import Add from "./add";
import Card from "./card";
import Pagination from "./pagination";

import { defaultTypes, types } from "./types";

const List = ({ isPaginationExsist, isNotFound, movies, pagination }) => (
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
        {isNotFound ? (
          <Col sm={12}>
            <h1>Films not found</h1>
          </Col>
        ) : null}

        {movies.map(movie => (
          <Col key={movie?.id} sm={4}>
            <Card movie={movie} />
          </Col>
        ))}
      </Row>


      {isPaginationExsist && (
        <Row>
          <Col>
            <Pagination pagination={pagination} />
          </Col>
        </Row>
      )}
    </Container>
  </>
);

List.defaultProps = defaultTypes;
List.propTypes = types;

export default List;
