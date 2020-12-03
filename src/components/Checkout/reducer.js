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
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.title !== action.payload.id)
      }
    default:
      return state
  }
}

const getCartItems = () => state => state.checkout.items
const getCartTotalPrice = () => state => {
  const items = getCartItems()(state)
  console.log(items)
  return items.reduce((total, item) => total + item.price, 0)
}

export {
  reducer as default,
  getCartItems,
  getCartTotalPrice,
}
