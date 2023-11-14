import { ReactNode } from "react";
import Logo from "../Assets/Photos/logo.png";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const withNavbar = (WrappedComponent: ReactNode) => {
  return () => {
    return (
      <>
        <Navbar expand="lg" style={{ background: "#0d6efd" }}>
          <Container>
            <Navbar.Brand href="/cart">
              <Link to={"/"}>
                <img src={Logo} alt="" style={{ width: "60px", height: "64px" }} />
              </Link>
            </Navbar.Brand>
            <Link to={"/cart"}>
              <FiShoppingCart size={40} color="black" />
            </Link>
          </Container>
        </Navbar>
        {WrappedComponent}
      </>
    );
  };
};

export default withNavbar;
