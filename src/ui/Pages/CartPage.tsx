import React from "react";
import Cart from "../Components/Cart/Cart";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import withNavbar from "../Components/HOC/HOC";

function WithounNavBarCartPage() {
  return (
    <>
      <Cart></Cart>
    </>
  );
}

const CartPage = withNavbar(<WithounNavBarCartPage />);
export default CartPage;
