import React, { forwardRef } from 'react'
import Subtotal from '../Subtotal'
import './checkoutStyles.css'
import CheckoutProduct from '../Product/CheckoutProduct'
import FlipMove from 'react-flip-move'

const FunctionalArticle = forwardRef((props, ref) => {
  const { index, price, image, title, rating, id } = props
  return (
    <div ref={ref}>
      <CheckoutProduct
        key={index}
        price={price}
        image={image}
        title={title}
        rating={rating}
        id={id}
      />
    </div>
  )
})

const Checkout = ({ items, user }) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad" 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt=""
        />
        <h3>{user?.email}</h3>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <FlipMove typeName={null}>
          {items.map((item) =>
            <FunctionalArticle key={item.id} {...item} />
          )}
        </FlipMove>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout