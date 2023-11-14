import React from "react";
import Cart from "../Components/Cart/Cart";
import withNavbar from "../Components/HOC/HOC";

function WithounNavBarCartPage() {
  return (
    <>
      <div className="text-center">
        <p style={{ fontSize: "40px" }}>Cart</p>
      </div>
      <Cart></Cart>
    </>
  );
}

const CartPage = withNavbar(<WithounNavBarCartPage />);
export default CartPage;
