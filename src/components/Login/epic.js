import { combineEpics, ofType } from 'redux-observable'
import { skip, tap } from 'rxjs/operators'
import { ActionTypes as LoginActionTypes, signIn } from '../Login/actions'

const onRegisterClickedDoRegisterRequest = (action$) =>
  action$.pipe(
    ofType(LoginActionTypes.SIGN_IN),
    tap((action) => {
      const { data } = action.payload
      return signIn(data)
    }),
    skip()
  )

export default combineEpics (
  onRegisterClickedDoRegisterRequest,
)