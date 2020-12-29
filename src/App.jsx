import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthIsLoaded from './components/containers/auth/AuthIsLoaded'

const GlobalStyles = lazy(() => import('./components/common/GlobalStyles'))
const LogIn = lazy(() => import('./pages/LogIn.jsx'))
const SignUp = lazy(() => import('./pages/SignUp.jsx'))
const Routes = lazy(() => import('./routes/Routes'))

lazy(() => import('react-redux-toastr/lib/css/react-redux-toastr.min.css'))

function App() {
  const auth = useSelector((state) => state.firebase.auth)
  return (
    <AuthIsLoaded>
      <Suspense fallback={null}>
        <GlobalStyles />
        <Switch>
          <Route
            exact
            path='/login'
            render={() => (isEmpty(auth) ? <LogIn /> : <Redirect to='/' />)}
          />
          <Route
            exact
            path='/signup'
            render={() => (isEmpty(auth) ? <SignUp /> : <Redirect to='/' />)}
          ></Route>
          <Route path='/'>
            <Routes />
          </Route>
        </Switch>
      </Suspense>
    </AuthIsLoaded>
  )
}

export default App
