import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './config/firebase'
import store from './store'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rrfConfig = {
  userProfile: 'users',
  userFirestoreForProfile: true,
  attachAuthIsReady: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
  presence: 'presence',
  sessions: 'sessions',
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <App />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
