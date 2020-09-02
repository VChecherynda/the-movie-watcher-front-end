import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, ListGroup, Button } from "react-bootstrap";

import Header from "@components/header";

const Movie = () => {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Link to="/">
            <Button className="mb-4" block>Back</Button>
          </Link>
        </Row>

        <Row>
          <ListGroup>
            <ListGroup.Item>Title: Blazing Saddles</ListGroup.Item>
            <ListGroup.Item>Release: 1974</ListGroup.Item>
            <ListGroup.Item>Format: VHS</ListGroup.Item>
            <ListGroup.Item>Stars: Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn</ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};

export default Movie;
