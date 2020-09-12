import React from "react";

import { Col, Form } from "react-bootstrap";

import { defaultTypes, types } from "./types";

const Input = ({
  id = "",
  title = "",
  value = "",
  placeholder = "",
  touched = false,
  error = "",
  name = "",
  changed,
  blured
}) => (
  <Form.Group as={Col} md="12" controlId={id}>
    <Form.Label>{title}</Form.Label>
    <Form.Control
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
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

Input.defaultProps = defaultTypes
Input.propTypes = types;

export default Input;
