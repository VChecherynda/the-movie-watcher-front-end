import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import withHooks from "./withHooks";

const CardComponent = ({
  movie: { id = "", title = "" } = {},
  handleDeleteMovie
}) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>

      <Link to={`/movie/${id}`} className="mr-2">
        <Button variant="primary">Show</Button>
      </Link>

      <Button variant="danger" type="button" onClick={handleDeleteMovie}>
        Delete
      </Button>
    </Card.Body>
  </Card>
);

export default withHooks(CardComponent);
