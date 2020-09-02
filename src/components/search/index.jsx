import React from "react";

import { Form, FormControl, InputGroup, Button, Col} from 'react-bootstrap';

import { FaSearch } from 'react-icons/fa';

const Search = () => (
  <Form>
    <Form.Row>
      <Col sm={10}>
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FaSearch/>
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl id="inlineFormInputGroupUsername2" placeholder="Enter Film title or Actor name" />
        </InputGroup>
      </Col>

      <Col sm={2}>
        <Button type="submit" className="mb-2" block>
          Search
        </Button>
      </Col>
    </Form.Row>
  </Form>
)

export default Search;
