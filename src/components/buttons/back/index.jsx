import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


import { defaultTypes, types } from "./types";

const Back = ({ route = "/" }) => (
  <Link to={route}>
    <Button className="mb-4" block>
      Back
    </Button>
  </Link>
);

Back.defaultProps = defaultTypes;
Back.propTypes = types;

export default Back;
