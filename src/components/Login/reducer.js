import { ActionTypes } from './actions'

const initialState = {
  credentials: null,
  isUserLogin: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        credentials: action.payload.credentials,
        isUserLogin: true,
      }
    case ActionTypes.REGISTER: // перенести в эпик
      return {
        ...state,
        credentials: action.payload.credentials,
        isUserLogin: true,
      }
      default:
        return state
  }
}

const isUserLogin = () => state => state.isUserLogin

export {
  reducer as default,
  isUserLogin,
}