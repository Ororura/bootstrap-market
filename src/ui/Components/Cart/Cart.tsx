import React, { useContext } from "react";
import "./Cart.css";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { ProductContext } from "../../../core/Context";

export default function Cart() {
  const { cart } = useContext(ProductContext);
  const { count, setCount } = useContext(ProductContext);
  const filteredCart = cart.filter((product) => count[product.id] > 0);
  return (
    <div className="products-cart">
      {filteredCart.map((product) => (
        <ItemsInCart key={product.id} count={count} setCount={setCount} product={product}></ItemsInCart>
      ))}
    </div>
  );
}
