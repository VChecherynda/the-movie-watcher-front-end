import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import useHooks from './useHooks';

export default function CardComponent(props) {
  const { memoMovie } = useHooks(props);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Title: {memoMovie.title}</Card.Title>

        <Card.Title>Stars: {memoMovie.stars}</Card.Title>

        <Link to={`/movie/${memoMovie.id}`} className="mr-2">
          <Button variant="primary">Details</Button>
        </Link>

        <Button
          variant="danger"
          type="button"
          onClick={handleDeleteMovie}
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
