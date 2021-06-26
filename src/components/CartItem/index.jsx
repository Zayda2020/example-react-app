import React from "react"

const CartItem = props => {
  return (
    <div className="cart-item">
      <img src={props.imgPath} alt={props.name} />
      <h2>{props.name}</h2>
      <h2>{props.quantity}</h2>
      <h2>{props.price}</h2>
    </div>
  )
}

export default CartItem
