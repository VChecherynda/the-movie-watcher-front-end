import React from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardComponent = () => (
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>

      <Link to="/movie" className="mr-2">
        <Button variant="primary">Show</Button>
      </Link>

      <Button variant="danger">Delete</Button>
      
    </Card.Body>
  </Card>
)

export default CardComponent;