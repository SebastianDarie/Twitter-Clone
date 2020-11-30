import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getFirebase, firebaseReducer } from 'react-redux-firebase'
import { getFirestore, firestoreReducer, reduxFirestore } from 'redux-firestore'
import { firebaseConfig } from './config/firebase'

import modalReducer from './reducers/modalReducer'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  modal: modalReducer,
})

const initialState = {}

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares),
    reduxFirestore(firebaseConfig)
  )
)

export default store
