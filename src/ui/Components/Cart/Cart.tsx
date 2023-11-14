import { useContext } from "react";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { ProductContext } from "../../../core/Context";
import { Col, Container, Row } from "react-bootstrap";

export default function Cart() {
  const { cart } = useContext(ProductContext);
  const { count, setCount } = useContext(ProductContext);
  const filteredCart = cart.filter((product) => count[product.id] > 0);
  return (
    <>
      <Container>
        <Row>
          {filteredCart.map((product) => (
            <Col md={3} sm={6}>
              <ItemsInCart key={product.id} count={count} setCount={setCount} product={product}></ItemsInCart>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
