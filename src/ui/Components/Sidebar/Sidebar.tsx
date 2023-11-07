import { useState } from "react";
import Cart from "../Cart/Cart";
import { Button, Offcanvas } from "react-bootstrap";
import { AiOutlineShoppingCart, AiOutlineMenuUnfold } from "react-icons/ai";

function Sidebar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setShow(true);
        }}
      >
        <AiOutlineMenuUnfold size={40}></AiOutlineMenuUnfold>
      </Button>
      <Offcanvas
        style={{ background: "#0d6efd" }}
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
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
