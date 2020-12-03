// import Axios from 'axios'
// import { combineEpics, ofType } from 'redux-observable'
// import { Observable } from 'rxjs'
// import { mergeMap } from 'rxjs/operators'

// import { ActionTypes } from './components/Product/actions.js'

// const onLoginClicked = (action$) =>
//   action$.pipe(
//     ofType(ActionTypes.ADD_TO_CART),
//     mergeMap(() =>
//       Axios.get('/asd')
//         .tap(({ data: getResponse }) => {
//           if (getResponse) {
//             window.location.assign(getResponse.data.location)
//             return Observable.empty()
//           }

//           return Observable.throw()
//         })
//     )

//   )

// export default combineEpics(
//   onLoginClicked,
// )