import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import ProductsCardsComponent from "./components/ProductsCardsComponent";
import ShopingCartComponent from "./components/ShopingCartComponent";
import data from "./components/data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([0]);
  return (
    <div className="App">
      <NavbarComponent />
      <ProductsCardsComponent
        products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <ShopingCartComponent cartItems={cartItems} />
    </div>
  );
}

export default App;
