import { combineReducers } from "redux";
import checkout from './components/Checkout/reducer'
import login from './components/Login/reducer'

export default combineReducers({
  checkout,
  login,
})