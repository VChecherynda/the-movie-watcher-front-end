import React from "react";

import { Modal, Button } from "react-bootstrap";

import useHooks from "./useHooks";

const Create = (props) => {
  const { confirmCreateProps } = useHooks(props);

  return (
    <Modal show={confirmCreateProps.isVisible} onHide={confirmCreateProps.hide}>
      <Modal.Header closeButton>
        <Modal.Title>{confirmCreateProps.title}</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button onClick={confirmCreateProps.cancel} variant="secondary">
          No
        </Button>
        <Button onClick={confirmCreateProps.save} variant="primary">
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Create;
