import { connect } from "react-redux"
import { addToCart } from "../Checkout/actions"
import Home from "./Home"
import { getCartItems } from "../Checkout/reducer"

const mapStateToProps = state => ({
  items: getCartItems()(state),
})

const mapDispatchToProps = dispatch => {
  return {
    onAddToCartClicked: item => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)