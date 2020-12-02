import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import alertReducer from './reducers/alertReducer'
import authReducer from './reducers/authReducer'
import modalReducer from './reducers/modalReducer'

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  modal: modalReducer,
})

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
