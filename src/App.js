import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";

import Goals from "./pages/Goals";
import ShoppingCart from "./pages/ShoppingCart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail"

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const initialProducts = [
  {
    id: "product-1",
    name: "Product 1",
    price: 9.99,
    quantity: 0,
    imgPath: "https://www.poupadou.com/966-large_retina/black-truffle-honey-product-100g.jpg"
  },
  {
    id: "product-2",
    name: "Product 2",
    price: 2.99,
    quantity: 0,
    imgPath: "https://www.poupadou.com/966-large_retina/black-truffle-honey-product-100g.jpg"
  },
  {
    id: "product-3",
    name: "Product 3",
    price: 5.99,
    quantity: 0,
    imgPath: "https://www.poupadou.com/966-large_retina/black-truffle-honey-product-100g.jpg"
  }
]

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addToCartHandler = (productId, quantityAdded) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        product.quantity += quantityAdded;
      }

      return product
    })

    setProducts(updatedProducts)

    // alert("Your product has been added to the cart successfully")
  }

  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <h1>Home page</h1>
        </Route>

        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart products={products}/>
        </Route>

        <Route path="/products/:productTitle">
          <ProductDetail />
        </Route>

        <Route path="/products">
          <Products products={products} addToCartHandler={addToCartHandler} />
        </Route>

      </Switch>

      <Footer />
    </>
  );
}

export default App;
