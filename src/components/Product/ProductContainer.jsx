import { connect } from "react-redux"
import { addToCart } from "../Checkout/actions"
import Product from "./Product"
import { getCartItems } from "../Checkout/reducer"


const mapStateToProps = state => ({
  items: getCartItems()(state)
})

const mapDispatchToProps = dispatch => ({
  onAddToCartClicked: item => dispatch(addToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)