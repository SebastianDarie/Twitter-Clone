import React from 'react'
import PrivateRoute from '../components/containers/auth/PrivateRoute'
import SideNav from '../components/layout/SideNav.jsx'
//import RightScreen from '../components/layout/RightScreen.jsx'
import Home from '../pages/Home.jsx'
import TweetView from '../components/common/tweets/TweetView.jsx'
import { Container } from '../components/common/GlobalStyles'

const Routes = () => {
  return (
    <Container>
      <SideNav />
      <PrivateRoute path='/tweet/:id'>
        <TweetView />
      </PrivateRoute>
      <PrivateRoute exact path={['/', '/home']}>
        <Home />
      </PrivateRoute>
      {/* <RightScreen /> */}
    </Container>
  )
}

export default Routes
