import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux'
import clientStore from './createStore'

const App = () => {
  return (
    <Provider store={clientStore}>
      <Router>
          <Header />
          <Switch>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
      </Router>
    </Provider>
  )
}

export default App
