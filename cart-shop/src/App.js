import React, { useEffect, useState } from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { LOCAL_CART, URL_API } from "./utils/constants";
import Products from "./components/Products";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./components/Loading";

function App() {
  const products = useFetch(URL_API);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idProducts = localStorage.getItem(LOCAL_CART);

    if (idProducts) {
      const idsProducts = idProducts.split(",");
      setProductsCart(idsProducts);
    } else {
      setProductsCart([]);
    }
  };

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(LOCAL_CART, productsCart);
    getProductsCart();
    toast.success(`Added ${name} to cart `);
  };
  return (
    <div>
      <TopMenu
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        products={products}
      />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
