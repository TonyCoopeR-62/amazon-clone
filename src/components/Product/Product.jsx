import React from 'react'
import './Product.css'

const Product = (props) => {
  const { title, price, rating, image, onAddToCartClicked, remove } = props
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
        onClick={() => remove ? remove(title) : onAddToCartClicked({
          title,
          price,
          rating,
          image
      })}>
        {remove ? 'Remove From Basket' : 'Add to Basket'}
      </button>
    </div>
  )
}

export default Product
