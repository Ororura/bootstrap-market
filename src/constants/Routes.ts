import CartPage from "../ui/Pages/CartPage";
import Main from "../ui/Pages/Main"

interface RouteType {
  path: string;
  component: () => JSX.Element;
}

const Routs: RouteType[] = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/cart",
    component: CartPage,
  },
];

export default Routs;
