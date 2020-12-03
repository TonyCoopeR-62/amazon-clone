const ActionTypes = {
  ADD_TO_CART: '@@/PRODUCT/ADD_TO_CART',
}

const addToCart = item => ({
  type: ActionTypes.ADD_TO_CART,
  payload: {
    item,
  }
})

export {
  ActionTypes,
  addToCart,
}