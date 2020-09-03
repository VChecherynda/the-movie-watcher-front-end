import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Alert } from "react-bootstrap";

import withHooks from "./withHooks";

const Header = ({ error }) => (
  <div className="mb-4">
    <div className="bg-primary">
      <Container>
        <Navbar variant="dark" className="pr-0 pl-0">
          <Navbar.Brand>Movie List</Navbar.Brand>
        </Navbar>
      </Container>
    </div>
    {error && (
        <Alert variant="danger" transition>
          {error}
        </Alert>
      )}
  </div>
);

export default withHooks(Header);
