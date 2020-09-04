import React from "react";

import { Form, FormControl, InputGroup, Col } from "react-bootstrap";

import { FaSearch } from "react-icons/fa";

import withHooks from "./withHooks";

const Search = ({ changed }) => (
  <Form>
    <Form.Row>
      <Col sm={12}>
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            id="inlineFormInputGroupUsername2"
            placeholder="Enter Film title or Actor name"
            onChange={changed}
          />
        </InputGroup>
      </Col>
    </Form.Row>
  </Form>
);

export default withHooks(Search);
