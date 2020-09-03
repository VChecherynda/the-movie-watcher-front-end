import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "@components/header";
import Search from "@components/search";
import Add from "@components/add";
import Card from "@components/card";

import withHooks from "./withHooks";

const List = ({ movies }) => (
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
        {movies.map(movie => (
          <Col key={movie.id} sm={4}>
            <Card movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default withHooks(List);
