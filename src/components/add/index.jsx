import React from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import withHooks from "./withHooks";

const Add = ({ isBtnDisabled, changed, upload, inputRef, listLabel }) => (
  <Form onSubmit={upload}>
    <Form.Row>
      <Col sm={8}>
        <Form.File id="addMovieList" custom>
          <Form.File.Input ref={inputRef} onChange={changed} />

          <Form.File.Label data-browse="Upload list">
            {listLabel}
          </Form.File.Label>

          <Form.Control.Feedback type="valid">
            You did it!
          </Form.Control.Feedback>

          {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
        </Form.File>
      </Col>

      <Col sm={2}>
        <Button type="submit" disabled={isBtnDisabled} block>
          Add List
        </Button>
      </Col>

      <Col sm={2}>
        <Link to="/create">
          <Button block>Add Movie</Button>
        </Link>
      </Col>
    </Form.Row>
  </Form>
);

export default withHooks(Add);
