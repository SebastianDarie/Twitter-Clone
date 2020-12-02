import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './components/common/GlobalStyles'
//import Alert from './components/common/Alert'
import AuthIsLoaded from './components/containers/AuthIsLoaded'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp.jsx'

function App() {
  return (
    <AuthIsLoaded>
      <GlobalStyles />
      <Switch>
        <Route exact path='/login'>
          <LogIn />
        </Route>
        <Route path='/'>
          <SignUp />
        </Route>
      </Switch>
    </AuthIsLoaded>
  )
}

export default App
