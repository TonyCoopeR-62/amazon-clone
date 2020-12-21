import React from 'react'
import './checkoutProductStyles.css'

const CheckoutProduct = (props) => {
  const { title, image, id, price, rating, onRemoveItemClicked } = props
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>  
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))
          }
        </div>
        <button className="btn-primary" onClick={() => onRemoveItemClicked(id)}>Remove from Basket</button>
      </div>   
    </div>
  )
}

export default CheckoutProduct
