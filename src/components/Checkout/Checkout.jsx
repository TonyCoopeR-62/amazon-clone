import React from 'react'
import Subtotal from '../Subtotal'
import './checkoutStyles.css'
import CheckoutProduct from '../Product/CheckoutProduct/CheckoutProduct'

const Checkout = ({ items, onRemoveItemClicked }) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad" 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt=""
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {items.map(({ price, image, title, rating, id, index }) =>
          <CheckoutProduct
            key={index}
            price={price}
            image={image}
            title={title}
            rating={rating}
            remove={onRemoveItemClicked}
            id={id}
          />
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout