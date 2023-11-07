import React, { useContext } from "react";
import "./ItemsInCart.css";
import plus from "../Assets/Photos/plus2.png";
import minus from "../Assets/Photos/minus.png";
import { Product } from "../../../constants/interfaces";
import { ProductContext } from "../../../core/Context";
import { Card } from "react-bootstrap";

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
    <Card style={{ width: "18rem", marginBottom: "10px" }} className="mx-auto">
      <div className="d-flex align-items-center" style={{ height: "250px" }}>
        <Card.Img
          className="mx-auto"
          variant="top"
          src={product.image}
          style={{ maxHeight: "250px", width: "140px", minWidth: "110px" }}
        />
      </div>
      <Card.Body>
        <Card.Title className="overflow-hidden text-truncate text-nowrap">{product.title}</Card.Title>
        <Card.Text className="overflow-hidden text-truncate text-nowrap">{product.description}</Card.Text>
        <div className="d-flex justify-content-between">
          {" "}
          <img className="plus" onClick={() => plusCount(product.id)} src={plus} alt="" />
          <p className="counter" style={{ fontSize: "18px", marginTop: "3px" }}>
            {count[product.id] || 1}
          </p>
          <img className="minus" onClick={() => minusCount(product.id)} src={minus} alt="" />{" "}
        </div>
      </Card.Body>
    </Card>
  );
}
