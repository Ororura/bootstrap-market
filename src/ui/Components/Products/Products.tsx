import React, { useEffect, useContext } from "react";
import vector from "../Assets/Photos/vector.png";
import filledVector from "../Assets/Photos/filled_vector.png";
import star from "../Assets/Photos/star.png";
import { Product } from "../../../constants/interfaces";
import { ProductContext } from "../../../core/Context";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

interface ProductsProps {
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  addToCart: (product: Product) => void;
}

export default function Products() {
  const { cart, setCart } = useContext(ProductContext);
  const { count, setCount } = useContext(ProductContext);
  const { shopData } = useContext(ProductContext);
  const { getProducts } = useContext(ProductContext);

  const handleClick = (product: Product) => {
    const existingProduct = cart.find((el) => el.id === product.id);
    if (!existingProduct) {
      setCart([...cart, product]);
    }
    setCount((prevCount) => ({
      ...prevCount,
      [product.id]: prevCount[product.id] ? prevCount[product.id] + 1 : 1,
    }));
  };

  useEffect(() => {
    console.log(cart);
    getProducts();
  }, []);

  return (
    <Container style={{ width: "70%" }}>
      <Row>
        {shopData.map((product) => (
          <Col md={3} sm={6}>
            <Card className="shadow-sm mt-4 bg-white rounded">
              <div className="d-flex align-items-center" style={{ height: "250px" }}>
                <Card.Img
                  className="mx-auto"
                  style={{ maxHeight: "250px", width: "140px" }}
                  variant="top"
                  src={product.image}
                />{" "}
              </div>
              <Card.Body>
                <Card.Title>{product.id} id</Card.Title>
                <Card.Title className="overflow-hidden text-truncate text-nowrap">{product.title}</Card.Title>
                <Card.Text className="overflow-hidden text-truncate text-nowrap">{product.description}</Card.Text>
                <div className="d-flex">
                  <Card.Text>{product.price}$</Card.Text>
                  <div className="ms-auto d-flex">
                    <Card.Text>{product.rating.count}</Card.Text>
                    <img
                      className="add-prod ms-1"
                      style={{ width: "20px", height: "24px" }}
                      src={count[product.id] > 0 ? filledVector : vector}
                      onClick={() => handleClick(product)}
                    ></img>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}