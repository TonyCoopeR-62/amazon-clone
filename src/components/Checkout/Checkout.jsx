import React from 'react'
import Subtotal from '../Subtotal'
import './Checkout.css'
import Product from '../Product'

const Checkout = ({ items, onRemoveItemClicked }) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad" 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
            {items.length > 0 && items.map((item) => {
              const { price, image, title, rating } = item
              return <Product
                price={price}
                image={image}
                title={title}
                rating={rating}
                remove={onRemoveItemClicked}
              />
            })}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout