import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as CloseModal } from "../../assets/svg/close.svg";
import { LOCAL_CART } from "../../utils/constants";
import { removeArrayDuplicates } from "../../utils/arrayFunc";
import { ReactComponent as ClearCart } from "../../assets/svg/garbage.svg";

export default function Cart(props) {
  const { productsCart, getProductsCart, products } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;

  const [singleProductsCart, setSingleProductsCart] = useState([]);

  useEffect(() => {
    const allProductsIDs = removeArrayDuplicates(productsCart);
    setSingleProductsCart(allProductsIDs);
  }, [productsCart]);

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  const clearCart = () => {
    localStorage.removeItem(LOCAL_CART);
    closeCart();
    getProductsCart();
  };

  return (
    <>
      <Button variant="link" className="cart">
        {productsCart.length > 0 ? (
          <CartFull onClick={openCart} />
        ) : (
          <CartEmpty onClick={openCart} />
        )}
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        <CartContentHeader closeCart={closeCart} clearCart={clearCart} />
        {singleProductsCart.map((idProductsCart, index) => (
          <CartContentProducts products={products} key={index} />
        ))}
      </div>
    </>
  );
}

function CartContentHeader(props) {
  const { closeCart, clearCart } = props;

  return (
    <div className="cart-content__header">
      <div>
        <CloseModal onClick={closeCart} />
        <h2>Cart</h2>
      </div>
      <Button variant="link" onClick={clearCart}>
        Clear
        <ClearCart />
      </Button>
    </div>
  );
}

function CartContentProducts(props) {
  const { products } = props;

  //   console.log("CartContentProducts", products);

  return "Products...";
}
