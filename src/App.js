import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import Detail from "./components/Detail";

//styling
import "./App.css";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    id: 1,
    name: "Chocolate Chip Cookie",
    price: 10,
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
    info: "The best choice for chocolate lovers",
  });

  return (
    <div>
      <Home />
      <ProductList setInfo={setInfo} />
      <Detail info={info} />
    </div>
  );
}

export default App;
