import { connect } from 'react-redux'
import { getCartItems, getCartTotalPrice } from '../Checkout/reducer'
import Subtotal from './Subtotal'

const mapStateToProps = state => ({
  cartTotalPrice: getCartTotalPrice()(state),
  items: getCartItems()(state),
})

export default connect(mapStateToProps)(Subtotal)