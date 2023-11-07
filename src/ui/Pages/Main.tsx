import React, { FC } from "react";
import Products from "../Components/Products/Products";
import withNavbar from "../../HOC/hoc";


const Main = () => {
  return <Products></Products>;
};

const MainWithNavbar = withNavbar(<Main />);

export default MainWithNavbar;
