import React from "react";

import { Modal, Button } from "react-bootstrap";

const Delete = ({ isVisible, title, cancel, save }) => (
  <Modal show={isVisible} onHide={cancel}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>

    <Modal.Footer>
      <Button onClick={cancel} variant="secondary">
        No
      </Button>
      <Button onClick={save} variant="primary">
        Yes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default Delete;
