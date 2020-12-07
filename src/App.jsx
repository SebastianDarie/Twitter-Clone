import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import GlobalStyles from './components/common/GlobalStyles'
import AuthIsLoaded from './components/containers/AuthIsLoaded'
import PrivateRoute from './components/containers/PrivateRoute'
import LogIn from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

function App() {
  const auth = useSelector((state) => state.firebase.auth)
  return (
    <AuthIsLoaded>
      <GlobalStyles />
      <Switch>
        <PrivateRoute exact path='/home'>
          <Home />
        </PrivateRoute>
        <Route
          exact
          path='/login'
          render={() => (!auth ? <LogIn /> : <Redirect to='/home' />)}
        />
        <Route
          exact
          path='/'
          render={() => (!auth ? <SignUp /> : <Redirect to='/home' />)}
        ></Route>
      </Switch>
    </AuthIsLoaded>
  )
}

export default App
