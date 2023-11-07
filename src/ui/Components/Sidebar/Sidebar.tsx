import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { AiOutlineShoppingCart, AiOutlineMenuUnfold } from "react-icons/ai";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <AiOutlineMenuUnfold size={40}></AiOutlineMenuUnfold>
      </Button>
      <Offcanvas style={{ background: "#0d6efd" }} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <AiOutlineShoppingCart size={40}></AiOutlineShoppingCart>Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart></Cart>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
