import React from "react"
import { useCartContext } from "../../context/CartContext"
import "./ItemCart.css"

const ItemCart = ({product}) => {
  const {removeItem} = useCartContext()

  return (
    <div className="itemCart">
      <img src={product.image} alt={product.title} />
        <div>
          <p>{product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio: ${product.price}</p>
          <p>Subtotal: ${product.quantity * product.price}</p>
          <button className="btn btn-sm btn-light" onClick={() => removeItem(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart