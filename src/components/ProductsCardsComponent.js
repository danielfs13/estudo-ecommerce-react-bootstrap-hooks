import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./NavbarComponent.css";

const ProductsCardsComponent = () => {
  let cardInfo = [
    {
      image:
        "https://img.irroba.com.br/filters:fill(fff):quality(95)/lojaroao/catalog/fotos-produtos/0916/tenis-azul-rockfit-3.jpg",
      title: "Tenis Azul",
      text: "Confortável tenis azul",
      valor: 150.0,
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/lojaroao/catalog/fotos-produtos/0939/tenis-fitness-vermelho-rockfit-1.jpg",
      title: "Tenis Vermelho",
      text: "Nosso novo tenis vermelho",
      valor: 300.0,
    },
    {
      image:
        "https://secure-static.zzmall.com.br/medias/sys_master/marketplacezz/marketplacezz/hdb/hbf/h00/h00/8838797590558/A1167900010001U-01-BASEIMAGE-Midres.jpg",
      title: "Tenis Verde",
      text: "Um tenis verde",
      valor: 250.0,
    },
    {
      image:
        "https://img.panoramasistemas.com.br/modaze.img/produto/5254/tenis-masculino-casual-ark-preto-5254-large.jpg",
      title: "Tenis Preto",
      text: "Clássico tenis preto",
      valor: 200.0,
    },
  ];
  const RenderCard = (card, index) => {
    const [valorFinal, setValor] = useState(0);

    function aumentar() {
      setValor(card.valor);
    }

    console.log("Valor Final", valorFinal);
    return (
      <div>
        <Card style={{ width: "18rem" }} key={index} className="box">
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.text}
              <br /> R${card.valor}
            </Card.Text>
            <Button onClick={aumentar} variant="primary">
              Adicionar ao Carrinho
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return <div className="grid">{cardInfo.map(RenderCard)}</div>;
};

export default ProductsCardsComponent;
