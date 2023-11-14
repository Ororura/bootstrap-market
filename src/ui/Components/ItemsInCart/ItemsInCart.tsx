import { useContext } from "react";
import plus from "../Assets/Photos/plus2.png";
import minus from "../Assets/Photos/minus.png";
import { ProductsProps } from "../../../constants/interfaces";
import { ProductContext } from "../../../core/Context";
import { Card } from "react-bootstrap";

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
    <Card style={{ width: "18rem", margin: "15px" }} className="mx-auto">
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
          <img style={{ width: "30px", height: "30px" }} onClick={() => plusCount(product.id)} src={plus} alt="" />
          <p className="counter" style={{ fontSize: "18px", marginTop: "3px" }}>
            {count[product.id] || 1}
          </p>
          <img style={{ width: "30px", height: "30px" }} onClick={() => minusCount(product.id)} src={minus} alt="" />{" "}
        </div>
      </Card.Body>
    </Card>
  );
}
