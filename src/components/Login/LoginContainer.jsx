import { connect } from "react-redux"
import Login from "./Login"
import { signIn, register } from './actions'

const mapDispatchToProps = dispatch => ({
  onSignInClicked: credentials => dispatch(signIn(credentials)),
  onRegisterClicked: credentials => dispatch(register(credentials))
})

export default connect(null, mapDispatchToProps)(Login)