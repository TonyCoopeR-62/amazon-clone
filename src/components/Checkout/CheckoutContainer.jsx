import { removeFromCart } from './actions'
import { getCartItems } from './reducer'
import { connect } from 'react-redux'
import Checkout from './Checkout'
import { getUserData } from '../Login/reducer'

const mapStateToProps = state => ({
  items: getCartItems()(state),
  user: getUserData()(state),
})

const mapDispatchToProps = dispatch => ({
  onRemoveItemClicked: id => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
