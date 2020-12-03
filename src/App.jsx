import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './components/common/GlobalStyles'
import AuthIsLoaded from './components/containers/AuthIsLoaded'
import LogIn from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

function App() {
  return (
    <AuthIsLoaded>
      <GlobalStyles />
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
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
