import Products from "../Components/Products/Products";
import withNavbar from "../../HOC/HOC";

const Main = () => {
  return <Products></Products>;
};

const MainWithNavbar = withNavbar(<Main />);

export default MainWithNavbar;
