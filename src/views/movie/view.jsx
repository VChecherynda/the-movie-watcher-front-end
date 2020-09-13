import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Back from "@components/buttons/back";
import ListMovie from "@components/list/movie";
import Header from "./header";

import { defaultTypes, types } from "./types";

const Movie = ({ movie }) => (
  <>
    <Header />
    <Container>
      <Row>
        <Col sm={1}>
          <Back />
        </Col>
      </Row>

      <Row>
        <ListMovie movie={movie} />
      </Row>
    </Container>
  </>
);

Movie.defaultProps = defaultTypes;
Movie.propTypes = types;

export default Movie;
