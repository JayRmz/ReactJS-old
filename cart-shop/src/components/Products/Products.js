import React from "react";
// Components
import { Container, Row, Spinner } from "react-bootstrap";
import Loading from "../Loading";
import Product from "../Product";

// css
import "./Products.scss";

export default function Products(props) {
  const { products = {}, addProductCart } = props;
  const { loading, error, result } = products;
  console.log("prodJS", props);
  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product, index) => (
            <div>
              <Product
                key={index}
                prod={product}
                addProductCart={addProductCart}
              />
            </div>
          ))
        )}
      </Row>
    </Container>
  );
}
