import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../Product/CheckoutProduct'
import './paymentStyles.css'

const Payment = ({ userData, cartItems }) => {
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cartItems?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{userData?.email}</p>
            <p>Address Line 1</p>
            <p>Address Line 2</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cartItems.map(({ id, title, image, price, rating}) => (
              <CheckoutProduct
                id={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__details">
            payment method
          </div>

        </div>
      </div>
    </div>
  )
}

export default Payment
