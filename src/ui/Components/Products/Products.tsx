import { useEffect, useContext } from "react";
import vector from "../Assets/Photos/vector.png";
import filledVector from "../Assets/Photos/filled_vector.png";
import star from "../Assets/Photos/star.png";
import { Product } from "../../../constants/interfaces";
import { ProductContext } from "../../../core/Context";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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
    (async () => {
      await getProducts();
    })();
  }, []);

  return (
    <Container style={{ width: "85%" }}>
      <Row>
        {shopData.map((product) => (
          <Col md={3} sm={6}>
            <Card className="shadow-sm mt-4 bg-white rounded">
              <div className="d-flex align-items-center" style={{ height: "250px" }}>
                <Card.Img
                  className="mx-auto"
                  style={{ maxHeight: "250px", width: "140px", minWidth: "110px" }}
                  variant="top"
                  src={product.image}
                />{" "}
              </div>
              <Card.Body>
                <Card.Title>Id: {product.id}</Card.Title>
                <Card.Title className="overflow-hidden text-truncate text-nowrap">{product.title}</Card.Title>
                <Card.Text className="overflow-hidden text-truncate text-nowrap">{product.description}</Card.Text>
                <Card.Text>Count: {product.rating.count}</Card.Text>
                <div className="d-flex">
                  <div className="d-flex">
                    <img className="mr-10" src={star} style={{ width: "20px", height: "20px" }} alt="" />
                    <Card.Text style={{ marginLeft: "3px" }}>{product.rating.rate}</Card.Text>
                  </div>
                  <div className="ms-auto d-flex">
                    <Card.Text>{product.price}$</Card.Text>
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
