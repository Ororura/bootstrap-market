import React, { ComponentType, ReactNode } from "react";
import Logo from "../ui/Components/Assets/Photos/logo.png";
import Sidebar from "../ui/Components/Sidebar/Sidebar";
import { Container, Navbar } from "react-bootstrap";

const withNavbar = (WrappedComponent: ReactNode) => {
  return () => {
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
        {WrappedComponent}
      </>
    );
  };
};

export default withNavbar;
