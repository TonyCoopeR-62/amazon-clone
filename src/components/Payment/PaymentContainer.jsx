import { connect } from 'react-redux'
import { clearCart } from '../Checkout/actions'
import { getCartItems, getCartTotalPrice } from '../Checkout/reducer'
import { getUserData } from '../Login/reducer'
import Payment from './Payment'

const mapStateToProps = state => ({
  userData: getUserData()(state),
  cartItems: getCartItems()(state),
  cartTotal: getCartTotalPrice()(state),
})

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)