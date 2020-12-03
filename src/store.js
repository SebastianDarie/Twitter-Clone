import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { reducer as toastrReducer } from 'react-redux-toastr'

import authReducer from './reducers/authReducer'
import modalReducer from './reducers/modalReducer'
import selectedReducer from './reducers/selectedReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  modal: modalReducer,
  selected: selectedReducer,
  toastr: toastrReducer,
})

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
