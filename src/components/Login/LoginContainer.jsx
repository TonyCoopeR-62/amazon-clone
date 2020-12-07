import { connect } from "react-redux"
import Login from "./Login"
import { signIn, register } from './actions'
import { getErrorMessage, getUserData, isUserAuthError } from "./reducer"

const mapStateToProps = state => ({
  isUserAuthError: isUserAuthError()(state),
  errorMessage: getErrorMessage()(state),
  userData: getUserData()(state),
})

const mapDispatchToProps = dispatch => ({
  onSignInClicked: credentials => dispatch(signIn(credentials)),
  onRegisterClicked: credentials => dispatch(register(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)