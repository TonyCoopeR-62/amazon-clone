import { connect } from 'react-redux'
import { getCartItems } from '../Checkout/reducer'
import { getUserData } from '../Login/reducer'
import Orders from './Orders'

const mapStateToProps = state => ({
  userData: getUserData()(state),
})

export default connect(mapStateToProps)(Orders)
