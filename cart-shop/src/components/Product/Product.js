import React from "react";
import "./Product.scss";

// components
import { Col, Card, Button } from "react-bootstrap";
import { URL_BASE } from "../../utils/constants";

export default function Product(props) {
  const { prod, addProductCart } = props;
  console.log(props);
  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${URL_BASE}/${prod.image}`} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>{prod.extraInfo}</Card.Text>
          <Card.Text>{prod.price.toFixed(2)} $/ unit</Card.Text>
          <Button onClick={() => addProductCart(prod.id, prod.name)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
