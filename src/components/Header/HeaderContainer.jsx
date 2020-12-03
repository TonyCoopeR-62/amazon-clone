import { connect } from "react-redux"
import { getCartItems } from "../Checkout/reducer"
import Header from "./Header"

const mapStateToProps = state => ({
  items: getCartItems()(state),
})

export default connect(mapStateToProps)(Header)