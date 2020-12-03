import { ActionTypes } from './actions'

const defaultState = {
  items: [],
  user: null,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload.item]
      }
    case ActionTypes.ON_LOGIN_CLICK:
      return {
        ...state,
        loginClicked: true,
        login: action.payload
      }
    default:
      return state
  }
}

const getCartItems = () => state => state.home.items

export {
  reducer as default,
  getCartItems,
}
