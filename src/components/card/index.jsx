import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import useHooks from "./useHooks";
import { defaultTypes, types } from "./types";

function CardComponent(props) {
  const { movieProps } = useHooks(props);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>
          <span className="movie-title">Title: {movieProps.title}</span>
        </Card.Title>

        <Card.Title>
          <span className="movie-stars">Stars: {movieProps.stars}</span>
        </Card.Title>

        <Link to={`/movie/${movieProps.id}`} className="mr-2">
          <Button variant="primary">Details</Button>
        </Link>

        <Button
          variant="danger"
          type="button"
          onClick={movieProps.handleDeleteMovie}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

CardComponent.defaultProps = defaultTypes;
CardComponent.propTypes = types;

export default CardComponent;
