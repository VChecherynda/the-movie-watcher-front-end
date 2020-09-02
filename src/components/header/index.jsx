import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <div className="bg-primary">
    <Container>
      <Navbar variant="dark" className="pr-0 pl-0 mb-4">
        <Navbar.Brand>Movie List</Navbar.Brand>
      </Navbar>
    </Container>
  </div>
);

export default Header;
