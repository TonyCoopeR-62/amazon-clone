import React from 'react'
import { useToasts } from 'react-toast-notifications'
import './productStyles.css'

const Product = (props) => {
  const { title, price, rating, image, onAddToCartClicked, id } = props
  const { addToast } = useToasts()
  const clicked = () => {
    onAddToCartClicked({
      title,
      price,
      rating,
      image,
      id,
    })
    addToast(`${title} - $${price}`, {
      appearance: 'success',
      autoDismiss: true,
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
            <p>⭐</p>
            ))}
        </div>
      </div>
        <img alt={title} src={image} />
      <button
        className="btn-primary"
        onClick={clicked}>
        Add to Basket
      </button>
    </div>
  )
}

export default Product
