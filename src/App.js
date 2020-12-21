import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home/Home'
import Login from './components/Login'
import Payment from './components/Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux'
import clientStore from './createStore'
import { auth } from './firebase'
import { signIn } from './components/Login/actions'
import { ToastProvider } from 'react-toast-notifications'

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
            <Payment />
          </Route>
          <Route path='/'>
            <ToastProvider>
              <Header />
              <Home />
            </ToastProvider>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
