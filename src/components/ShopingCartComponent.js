import React from "react";
import { Card, Button } from "react-bootstrap";

const ShopingCartComponent = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Meu Carrinho</Card.Header>
        <Card.Body>
          <Card.Title>Valor Total</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default ShopingCartComponent;
