import React from "react";

import { Col, Form } from "react-bootstrap";

import { defaultTypes, types } from "./types";

const Select = ({
  id = "",
  title = "",
  value = "",
  options = [],
  touched = false,
  error = "",
  name = "",
  changed,
  blured
}) => (
  <Form.Group as={Col} md="12" controlId={id}>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>{title}</Form.Label>
      <Form.Control
        as="select"
        name={name}
        value={value}
        onChange={changed}
        onBlur={blured}
        isValid={touched && !error}
        isInvalid={touched && error}
      >
        {options.map(opt => opt && <option key={`${id}-${opt}`}>{opt}</option>)}
      </Form.Control>
    </Form.Group>

    <Form.Control.Feedback type="invalid" tooltip>
      {error}
    </Form.Control.Feedback>
  </Form.Group>
);

Select.defaultProps = defaultTypes;
Select.propTypes = types;

export default Select;
