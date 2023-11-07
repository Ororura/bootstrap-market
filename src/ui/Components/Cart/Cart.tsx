import React, { useContext, useState } from "react";
import "./Cart.css";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { Product, Rating } from "../../../constants/interfaces";
import { ProductContext } from "../../../core/Context";

interface ProductsProps {
  cart: Product[];
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
}

export default function Cart() {
  const { cart, setCart } = useContext(ProductContext);
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
