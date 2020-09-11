import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, ListGroup, Button } from "react-bootstrap";

import Header from "@components/header";

import { defaultTypes, types } from "./types";
import useHooks from "./useHooks";

const Movie = () => {
  const {
    movieCurrent: { title = "", release = "", format = "", stars = "" } = {}
  } = useHooks();

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Link to="/">
            <Button className="mb-4" block>
              Back
            </Button>
          </Link>
        </Row>

        <Row>
          <ListGroup>
            <ListGroup.Item>
              <span className="list-group-item__title">{`Title: ${title}`}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="list-group-item__release">{`Release: ${release}`}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="list-group-item__format">{`Format: ${format}`}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="list-group-item__stars">{`Stars: ${stars}`}</span>
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};

Movie.defaultProps = defaultTypes;
Movie.propTypes = types;

export default Movie;
