import React from "react";
import { ListGroup } from "react-bootstrap";

import { defaultTypes, types } from "./types";

const Movie = ({
  movie: { title = "", release = "", format = "", stars = "" } = {}
}) => (
  <ListGroup>
    <ListGroup.Item>
      <span className="list-group-item__title">{`Title: ${title}`}</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="list-group-item__release">{`Release: ${release}`}</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="list-group-item__format">{`Format: ${format}`}</span>
    </ListGroup.Item>
    <ListGroup.Item>
      <span className="list-group-item__stars">{`Stars: ${stars}`}</span>
    </ListGroup.Item>
  </ListGroup>
);

Movie.defaultProps = defaultTypes;
Movie.propTypes = types;

export default Movie;
