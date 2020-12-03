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
    case ActionTypes.REMOVE_FROM_CART:
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let newItems = [...state.items]
      if (index >= 0) {
        newItems.splice(index, 1)
      } else {
        console.warn(`Cant remove product ${action.payload.id}`)
      }
      return {
        ...state,
        items: newItems,
      }
    default:
      return state
  }
}

const getCartItems = () => state => state.checkout.items
const getCartTotalPrice = () => state => {
  const items = getCartItems()(state)
  return items.reduce((total, item) => total + item.price, 0)
}

export {
  reducer as default,
  getCartItems,
  getCartTotalPrice,
}
