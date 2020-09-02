import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardComponent = ({ movie }) => (
  <Card>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>

      <Link to="/movie" className="mr-2">
        <Button variant="primary">Show</Button>
      </Link>

      <Button variant="danger">Delete</Button>
    </Card.Body>
  </Card>
);

export default CardComponent;
