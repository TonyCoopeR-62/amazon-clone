import { BehaviorSubject } from 'rxjs'
import { combineEpics } from 'redux-observable'
import loginEpic from '../src/components/Login/epic'
import { catchError, mergeMap } from 'rxjs/operators'

const epicRegistry = [
  loginEpic,
]
const epic$ = new BehaviorSubject(combineEpics(...epicRegistry))

const rootEpic = (action$, state$) =>
  epic$.pipe(
    mergeMap(epic => epic(action$, state$)),
    catchError((error, source) => {
      if (console) console.error(error)
      return source
    })
  )

export { rootEpic as default, epicRegistry, epic$ }
