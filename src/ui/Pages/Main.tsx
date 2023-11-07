import React from "react";
import Logo from "../Components/Assets/Photos/logo.png";
import Sidebar from "../Components/Sidebar/Sidebar";
import Products from "../Components/Products/Products";
import { Container, Navbar } from "react-bootstrap";

export default function Main() {
  return (
    <>
      <Navbar expand="lg" style={{ background: "#0d6efd" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" style={{ width: "60px", height: "64px" }} />
          </Navbar.Brand>
          <Sidebar></Sidebar>
        </Container>
      </Navbar>
      <Products></Products>
    </>
  );
}
