import React from "react";

import { Col, Form } from "react-bootstrap";

const Input = ({ id, title, value, touched, error, name, changed, blured }) => {
  return (
    <Form.Group as={Col} md="12" controlId={id}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        type="text"
        name={name}
        value={value}
        onChange={changed}
        onBlur={blured}
        isValid={touched && !error}
        isInvalid={touched && error}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
