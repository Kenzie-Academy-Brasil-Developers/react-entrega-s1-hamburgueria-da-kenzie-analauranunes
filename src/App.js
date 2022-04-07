import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function dataApi() {
      const response = await axios(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );

      setProducts(response.data);
    }
    dataApi();
  }, []);

  const handleClick = (idProduct) => {
    const findProduct = products.find((el) => el.id === idProduct);

    const includesItem = cartProduct.includes(findProduct);

    if (!includesItem) {
      setCartProduct([...cartProduct, findProduct]);
    }
  };

  const showProducts = (search) => {
    const filtered = products.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilterProducts(filtered);
  };

  const removeProduct = (idProduct) => {
    const removedList = cartProduct.filter((el) => el.id !== idProduct);
    setCartProduct(removedList);
  };

  const removeAll = () => {
    setCartProduct([]);
  };

  return (
    <>
      <Header>
        <h1 className="h1-header">
          Burguer <span className="span-header">Kenzie</span>
        </h1>
        <div className="input-header">
          <input
            className="search-input"
            type="text"
            placeholder="Digitar pesquisa"
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button
            onClick={() => showProducts(searchInput)}
            className="search-button"
          >
            Pesquisar
          </button>
        </div>
      </Header>
      <div className="divisionProdCart-div">
        {filterProducts.length > 0 ? (
          <ProductsList products={filterProducts} handleClick={handleClick} />
        ) : (
          <ProductsList products={products} handleClick={handleClick} />
        )}
        <Cart
          cartProduct={cartProduct}
          removeProduct={removeProduct}
          removeAll={removeAll}
        />
      </div>
    </>
  );
}

export default App;
