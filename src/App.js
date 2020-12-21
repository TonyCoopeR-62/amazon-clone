import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home/Home'
import Login from './components/Login'
import Payment from './components/Payment'
import Orders from './components/Orders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux'
import clientStore from './createStore'
import { auth } from './firebase'
import { signIn } from './components/Login/actions'
import { ToastProvider } from 'react-toast-notifications'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51I1GcWA4jk4idYBsDhzvv4szvjAKOspcafzhgGXnh8gzohpuq89Eo9pmn8cTECPPxw7CCeAPxV2aaLUMNSVGZpTJ00agAIXeSa'
)

const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        clientStore.dispatch(signIn(authUser))
      } else {
        clientStore.dispatch(signIn(null))
      }
    })
  }, [])

  return (
    <Provider store={clientStore}>
      <ToastProvider>
        <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>
            <Route path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path='/orders'>
              <Header />
              <Orders />
            </Route>
            <Route path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      </ToastProvider>
    </Provider>
  )
}

export default App
