import { StrictMode } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './config/firebase'
import store from './store'
import ReduxToastr from 'react-redux-toastr'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
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
  <StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <App />
        </Router>
        <ReduxToastr
          timeOut={3500}
          newestOnTop={false}
          preventDuplicates
          position='top-right'
          getState={(state) => state.toastr}
          progressBar
          transitionIn='fadeIn'
          transitionOut='fadeOut'
          closeOnToastrClick
        />
      </ReactReduxFirebaseProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
