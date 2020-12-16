import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { reducer as toastrReducer } from 'react-redux-toastr'

import authReducer from './reducers/authReducer'
import imageReducer from './reducers/imageReducer'
import modalReducer from './reducers/modalReducer'
import selectedReducer from './reducers/selectedReducer'
import tweetReducer from './reducers/tweetReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  image: imageReducer,
  modal: modalReducer,
  selected: selectedReducer,
  toastr: toastrReducer,
  tweet: tweetReducer,
})

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
