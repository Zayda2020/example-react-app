import React,{useState} from "react"
import Button from "../Button";

import "./styles.css"

const ProductItem = props => {
  const [quantityAdded, setQuantityAdded] = useState(1);

  return (
    <div className="product-item">
      <h3>{props.name}</h3>
      <img src={props.imgPath} alt={props.name} />
      <h2>{`£${props.price}`}</h2>
      {/* <h5>{props.quantity}</h5> */}
      <input 
        type="number"
        value={quantityAdded} 
        onChange={e => setQuantityAdded(Number(e.target.value))}
      />
      <Button 
        className="add-to-cart-button"
        type="button"
        onClick={() => props.addToCartHandler(props.id, quantityAdded)}
      >
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductItem