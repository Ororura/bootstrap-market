import Products from "../Components/Products/Products";
import WithNavbar from "../Components/HOC/HOC";

const Main = () => {
  return <Products></Products>;
};

const MainWithNavbar: () => JSX.Element = WithNavbar(<Main />);

export default MainWithNavbar;
