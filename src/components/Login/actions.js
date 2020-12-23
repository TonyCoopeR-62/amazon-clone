const ActionTypes = {
  SIGN_IN: '@@LOGIN/SIGN_IN',
  REGISTER: '@@LOGIN/REGISTER',
  SHOW_ERROR: '@@LOGIN/SHOW_ERROR',
}

const signIn = data => ({
  type: ActionTypes.SIGN_IN,
  payload: {
    data,
  }
})

const register = (credentials) => ({
  type: ActionTypes.REGISTER,
  payload: {
    credentials,
  }
})

const showError = error => ({
  type: ActionTypes.SHOW_ERROR,
  payload: {
    error,
  }
})

export {
  ActionTypes,
  signIn,
  register,
  showError,
}