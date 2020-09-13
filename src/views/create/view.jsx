import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Header from "./header";
import FormMovie from "@components/forms/movie";
import Back from "@components/buttons/back";

import { defaultTypes, types } from "./types";

const Create = ({ handleCreate }) => (
  <>
    <Header />

    <Container>
      <Row className="mb-4">
        <Col sm={1}>
          <Back />
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

Create.defaultProps = defaultTypes;
Create.propTypes = types;

export default Create;
