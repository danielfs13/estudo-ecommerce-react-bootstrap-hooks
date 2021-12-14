import React from "react";
import { Card, Button } from "react-bootstrap";

function ShopingCartComponent(props) {
  const { cartItems } = props;

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Meu Carrinho</Card.Header>
        <Card.Body>
          <Card.Title>R${cartItems}</Card.Title>
          <Card.Text>
            {cartItems.length === 1 && <div>Carrinho vazio!</div>}
          </Card.Text>
          <Button variant="primary">Pagar</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default ShopingCartComponent;
