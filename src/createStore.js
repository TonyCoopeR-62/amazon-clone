import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './rootReducer'
import rootEpic from './rootEpic'

const isDev = process.env.NODE_ENV === 'development'
const reduxDevTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const epicMiddleware = createEpicMiddleware()
const initialState = {}

const clientStore = createStore(rootReducer, initialState,
  compose(applyMiddleware(epicMiddleware), reduxDevTools)
)

epicMiddleware.run(rootEpic)

export default clientStore