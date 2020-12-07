import { ActionTypes } from './actions'

const initialState = {
  userData: null,
  isUserLogin: false,
  isUserAuthError: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        userData: action.payload.data,
        isUserLogin: true,
      }
    case ActionTypes.SHOW_ERROR:
      return {
        ...state,
        isUserLogin: false,
        isUserAuthError: true,
        error: action.payload.error.message
      }
      default:
        return state
  }
}

const isUserLogin = () => state => state.login.isUserLogin
const isUserAuthError = () => state => state.login.isUserAuthError
const getErrorMessage = () => state => state.login.error
const getUserData = () => state => state.login.userData

export {
  reducer as default,
  isUserLogin,
  isUserAuthError,
  getErrorMessage,
  getUserData,
}