import React, { useContext, useEffect } from "react";
import "./ItemsInCart.css";
import { useState } from "react";
import plus from "../Assets/Photos/plus2.png";
import minus from "../Assets/Photos/minus.png";
import { Product } from "../../../constants/interfaces";
import { ProductContext } from "../../../core/Context";

interface ProductsProps {
  product: Product;
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
}

export default function ItemsInCart({ product }: ProductsProps) {
  const { count, setCount } = useContext(ProductContext);

  const plusCount = (productId: number) => {
    setCount((prevCount) => ({
      ...prevCount,
      [productId]: prevCount[productId] + 1,
    }));
  };

  const minusCount = (productId: number) => {
    setCount((prevCount) => ({
      ...prevCount,
      [productId]: prevCount[productId] - 1,
    }));
  };

  return (
    <div style={{ color: "black" }} key={product.id} className="product-in-cart">
      <div className="img-frame">
        <img src={product.image} alt={product.title} className="img-product"></img>
      </div>
      <p
        className="product-title"
        style={{
          width: "140px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {product.title}
      </p>
      <p>{product.price}$</p>
      <div className="product-counter">
        <img className="plus" onClick={() => plusCount(product.id)} src={plus} alt="" />
        <p className="counter" style={{ fontSize: "18px", marginTop: "3px" }}>
          {count[product.id] || 1}
        </p>
        <img className="minus" onClick={() => minusCount(product.id)} src={minus} alt="" />
      </div>
    </div>
  );
}
