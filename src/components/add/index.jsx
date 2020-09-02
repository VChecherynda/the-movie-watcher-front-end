import React from "react";
import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Add = () => (
  <Form>
    <Form.Row>
      <Col sm={8}>
        <Form.File id="formcheck-api-custom" custom>
          <Form.File.Input />

          <Form.File.Label data-browse="Upload list" />

          {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
        </Form.File>
      </Col>
      
      <Col sm={2}>
        <Button  type="submit" block>Add List</Button>
      </Col>

      <Col sm={2}>
        <Link to="/create">
          <Button block>Add Movie</Button>
        </Link>
      </Col>
    </Form.Row>
  </Form>
)

export default Add;
