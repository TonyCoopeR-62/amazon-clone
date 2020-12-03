import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux'
import clientStore from './createStore'

const App = () => {
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
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
