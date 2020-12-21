const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51I1GcWA4jk4idYBsiHFdFJQGnSegR5xNCwnMPq3pBqByCnaJ05VHhPyn1aCTLmiugKrxlnyfP5haoU4TUGqnEvEb00XGj6RfqC')

// App config
const app = express()

// Middleware
app.use(cors({ origin: true }))
app.use(express.json())

// Routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
  const total = req.query.total
  console.log('payment amount ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// Listen
exports.api = functions.https.onRequest(app)
