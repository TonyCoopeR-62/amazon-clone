const ActionTypes = {
  SIGN_IN: '@@/LOGIN/SIGN_IN',
  REGISTER: '@@/LOGIN/REGISTER'
}

const signIn = (credentials) => ({
  type: ActionTypes.SIGN_IN,
  payload: {
    credentials,
  }
})

const register = (credentials) => ({
  type: ActionTypes.REGISTER,
  payload: {
    credentials,
  }
})

export {
  ActionTypes,
  signIn,
  register,
}