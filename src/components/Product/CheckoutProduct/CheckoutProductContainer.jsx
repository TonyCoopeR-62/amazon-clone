import { connect } from 'react-redux'
import { removeFromCart } from '../../Checkout/actions'
import CheckoutProduct from './CheckoutProduct'

const mapDispatchToProps = dispatch => ({
  onRemoveItemClicked: id => dispatch(removeFromCart(id)),
})

export default connect(null, mapDispatchToProps)(CheckoutProduct)