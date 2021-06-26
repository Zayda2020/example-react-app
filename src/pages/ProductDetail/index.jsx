import React from "react"
import {useHistory, useLocation, useParams} from "react-router-dom"

const ProductDetail = () => {
  const {productTitle} = useParams()
  console.log("🚀 ~ file: index.jsx ~ line 6 ~ ProductDetail ~ productTitle", productTitle)

  const location = useLocation()
  console.log("🚀 ~ file: index.jsx ~ line 8 ~ ProductDetail ~ location", location)
  const history = useHistory()
  console.log("🚀 ~ file: index.jsx ~ line 10 ~ ProductDetail ~ history", history)

  return (
    <div className="product-detail">
      {`This iss a ${productTitle} page`}
    </div>
  )
}

export default ProductDetail
