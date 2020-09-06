import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import withHooks from "./withHooks";

const CardComponent = ({
  movie: { id = "", title = "", stars = "" } = {},
  handleDeleteMovie
}) => (
  <Card className="mb-4">
    <Card.Body>
      <Card.Title>Title: {title}</Card.Title>

      <Card.Title>Stars: {stars}</Card.Title>

      <Link to={`/movie/${id}`} className="mr-2">
        <Button variant="primary">Details</Button>
      </Link>

      <Button variant="danger" type="button" onClick={handleDeleteMovie}>
        Delete
      </Button>
    </Card.Body>
  </Card>
);

export default withHooks(CardComponent);
