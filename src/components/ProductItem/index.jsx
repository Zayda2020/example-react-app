import React,{useState} from "react"

const ProductItem = props => {
  const [quantityAdded, setQuantityAdded] = useState(1);

  return (
    <div className="product-item">
      <h3>{props.name}</h3>
      <h2>{`£${props.price}`}</h2>
      <h5>{props.quantity}</h5>
      <input 
        type="number"
        value={quantityAdded} 
        onChange={e => setQuantityAdded(Number(e.target.value))}
      />
      <img src={props.imgPath} alt={props.name} />
      <button 
        type="button"
        onClick={() => props.addToCartHandler(props.id, quantityAdded)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductItem