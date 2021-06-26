import React from "react";

import CartItem from "../../components/CartItem"

const ShoppingCart = (props) => {
  const isAnyItemAddedToCart = props.products.every(product => product.quantity === 0);

  return (
    <div className="shopping-cart">
      {isAnyItemAddedToCart && <h2>Your shopping cart is empty!</h2>}

      {props.products.map(product => {
        if (product.quantity === 0) return null;

        return (
          <CartItem 
            key={product.id}
            imgPath={product.imgPath}
            name={product.name}
            quantity={product.quantity}
            price={product.price}
          />
        )
      })}
    </div>
  )
}

export default ShoppingCart
