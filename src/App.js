import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import ProductsCardsComponent from "./components/ProductsCardsComponent";
import ShopingCartComponent from "./components/ShopingCartComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ProductsCardsComponent />
      <ShopingCartComponent />
    </div>
  );
}

export default App;
