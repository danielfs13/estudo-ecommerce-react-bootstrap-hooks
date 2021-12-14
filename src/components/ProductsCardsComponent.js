import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductsCardsComponent(props) {
  const { products } = props;
  const { cartItems } = props;
  const { setCartItems } = props;

  const RenderCard = (card, index) => {
    console.log(cartItems);
    return (
      <div>
        <Card style={{ width: "18rem" }} key={card.id} className="box">
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.text}
              <br /> R${card.valor}
            </Card.Text>
            <Button
              onClick={() => setCartItems(parseFloat(cartItems) + card.valor)}
              variant="primary"
            >
              Adicionar ao Carrinho
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return <div className="grid">{products.map(RenderCard)}</div>;
}

export default ProductsCardsComponent;
