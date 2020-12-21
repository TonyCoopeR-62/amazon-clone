import { connect } from 'react-redux'
import { getCartItems } from '../Checkout/reducer'
import { getUserData } from '../Login/reducer'
import Payment from './Payment'

const mapStateToProps = state => ({
  userData: getUserData()(state),
  cartItems: getCartItems()(state),
})

export default connect(mapStateToProps)(Payment)