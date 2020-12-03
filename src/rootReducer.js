import { combineReducers } from "redux";
import checkout from './components/Checkout/reducer'
import product from './components/Product/reducer'
import home from './components/Home/reducer'


export default combineReducers({
  checkout,
  product,
  home,
})