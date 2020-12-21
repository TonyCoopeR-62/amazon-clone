import React from 'react'
import './subtotalStyles.css'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'

const Subtotal = ({ cartTotalPrice, items }) => {
  const history = useHistory()
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
        disabled={items.length < 1}
        className="btn-primary"
        onClick={() => history.push('/payment')}
      >
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
