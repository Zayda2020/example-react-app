import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";

import Goals from "./pages/Goals";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <h1>Home page</h1>
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
