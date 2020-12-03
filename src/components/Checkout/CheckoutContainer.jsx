import { addToCart, removeFromCart } from './actions'
import { getCartItems } from './reducer'
import { connect } from 'react-redux'
import Checkout from './Checkout'

const mapStateToProps = state => ({
  items: getCartItems()(state),
})

const mapDispatchToProps = dispatch => ({
  onAddToCartClicked: item => dispatch(addToCart(item)),
  onRemoveItemClicked: id => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
