import React from "react";

import ProductItem from "../../components/ProductItem"

import "./styles.css"

const Products = (props) => {


  return (
    <div className="products">
      {props.products.map(product => {
        return (
          <ProductItem 
            key={product.id}
            name={product.name}
            price={product.price}
            imgPath={product.imgPath}
            id={product.id}
            quantity={product.quantity}
            addToCartHandler={props.addToCartHandler}
          />
        )
      })}
    </div>
  )
}

export default Products
