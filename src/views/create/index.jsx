import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

import Header from "@components/header";
import FormMovie from "@components/forms/movie";

import { defaultTypes, types } from "./types";
import useHooks from "./useHooks";



const Create = () => {
  const { createProps: { handleCreate } = {} } = useHooks();

  return (
    <>
      <Header />

      <Container>
        <Row className="mb-4">
          <Col>
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormMovie onSubmit={handleCreate} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

Create.defaultProps = defaultTypes;
Create.propTypes = types;

export default Create;
