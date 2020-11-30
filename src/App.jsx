import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './components/common/GlobalStyles'
import SignUp from './pages/SignUp.jsx'

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Switch>
        <Route path='/'>
          <SignUp />
        </Route>
      </Switch>
    </div>
  )
}

export default App
