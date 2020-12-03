import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

const Subtotal = ({ cartTotalPrice = 0, items }) => {
  console.log(cartTotalPrice)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
          <p>
            Subtotal ({items.length} items): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
          </>
        )}
        decimalScale={2}
        value={cartTotalPrice}
        displayType="text"
        thousandSeparator={true}
        prefix={'$'}
      
      />
      <button
        className="btn-primary"
      >
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
