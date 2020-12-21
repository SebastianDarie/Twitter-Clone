import { useSelector } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import { Switch, Route, Redirect } from 'react-router-dom'
import GlobalStyles from './components/common/GlobalStyles'
import AuthIsLoaded from './components/containers/auth/AuthIsLoaded'
import LogIn from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Routes from './routes/Routes'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

function App() {
  const auth = useSelector((state) => state.firebase.auth)
  return (
    <AuthIsLoaded>
      <GlobalStyles />
      <Switch>
        <Route
          exact
          path='/login'
          render={() => (isEmpty(auth) ? <LogIn /> : <Redirect to='/home' />)}
        />
        <Route
          exact
          path='/signup'
          render={() => (isEmpty(auth) ? <SignUp /> : <Redirect to='/home' />)}
        ></Route>
        <Route path='/'>
          <Routes />
        </Route>
      </Switch>
    </AuthIsLoaded>
  )
}

export default App
