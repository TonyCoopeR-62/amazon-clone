import { connect } from 'react-redux'
import { getCartItems } from '../Checkout/reducer'
import { getUserData } from '../Login/reducer'
import Header from './Header'

const mapStateToProps = state => ({
  items: getCartItems()(state),
  userData: getUserData()(state),
})

export default connect(mapStateToProps)(Header)