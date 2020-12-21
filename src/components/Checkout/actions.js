const ActionTypes = {
  ADD_TO_CART: '@@CHECKOUT/ADD_TO_CART',
  REMOVE_FROM_CART: '@@CHECKOUT/REMOVE_FROM_CART',
  CLEAR_CART: '@@CHECKOUT/CLEAR_CART',
}

const addToCart = item => ({
  type: ActionTypes.ADD_TO_CART,
  payload: {
    item
  }
})

const removeFromCart = id => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: {
    id,
  }
})

const clearCart = () => ({
  type: ActionTypes.CLEAR_CART,
})

export {
  ActionTypes,
  addToCart,
  removeFromCart,
  clearCart,
}