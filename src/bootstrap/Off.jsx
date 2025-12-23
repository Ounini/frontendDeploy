import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

function Off() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Show
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>LIfe</Offcanvas.Header>
        <Offcanvas.Body>Life is a beautiful thing to man.</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Off;
