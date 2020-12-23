import React, { useState, useEffect } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../Product/CheckoutProduct'
import './paymentStyles.css'
import CurrencyFormat from 'react-currency-format'
import { useToasts } from 'react-toast-notifications'
import axios from '../../axios'
import { useHistory } from 'react-router-dom'
import { db } from '../../firebase'

const Payment = ({ userData, cartItems, cartTotal, clearCart }) => {
  const stripe = useStripe()
  const history = useHistory()
  const elements = useElements()
  const { addToast } = useToasts()
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState(null)
  const isButtonDisabled = processing || disabled || succeeded

  useEffect(() => {
    //generate the special stripe secret to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // stripe expects the total in a currencies subunits, 1$ = 100c
        url: `/payments/create?total=${cartTotal * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [cartTotal])

  console.log(clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {

      db
        .collection('users')
        .doc(userData?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          cartItems: cartItems,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setSucceeded(true)
      setError(null)
      setProcessing(false)
      clearCart()

      history.replace('/orders')
    })

  }

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error
      ? (
        addToast(e.error.message, {
          appearance: 'error',
          autoDismiss: true,
        })
      )
      : '')
  }

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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>

              <div className="payment__priceContainer">
                <CurrencyFormat 
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={cartTotal}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={isButtonDisabled}>
                  <span>
                    {processing ? <p>Processing</p> : 'Buy Now'}
                  </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Payment
