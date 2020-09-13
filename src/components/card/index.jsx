import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { defaultTypes, types } from "./types";

const CardComponent = ({
  memoMovie: { id, title, stars } = {},
  handleDeleteMovie
}) => (
  <Card className="mb-4">
    <Card.Body>
      <Card.Title>
        <span className="movie-title">Title: {title}</span>
      </Card.Title>

      <Card.Title>
        <span className="movie-stars">Stars: {stars}</span>
      </Card.Title>

      <Link to={`/movie/${id}`} className="mr-2">
        <Button variant="primary">Details</Button>
      </Link>

      <Button variant="danger" type="button" onClick={handleDeleteMovie}>
        Delete
      </Button>
    </Card.Body>
  </Card>
);

CardComponent.defaultProps = defaultTypes;
CardComponent.propTypes = types;

export default CardComponent;
