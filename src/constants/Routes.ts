import CartPage from "../ui/Pages/CartPage";
import Main from "../ui/Pages/Main"
import { RouteType } from "./interfaces";

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
