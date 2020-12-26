import React from 'react'
import { Switch } from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase'
import PrivateRoute from '../components/containers/auth/PrivateRoute'
import ProfileRoutes from './ProfileRoutes'
import SideNav from '../components/layout/SideNav.jsx'

import Home from '../pages/Home.jsx'
import TweetView from '../components/common/tweets/TweetView.jsx'
import { Container } from '../components/common/GlobalStyles'

const Routes = () => {
  useFirestoreConnect([{ collection: 'users' }])
  useFirestoreConnect([
    { collection: 'tweets', orderBy: ['timeStamp', 'desc'] },
  ])
  return (
    <Container>
      <SideNav />
      <Switch>
        <PrivateRoute path='/tweet/:id'>
          <TweetView />
        </PrivateRoute>
        {/* <PrivateRoute path='/home'>
          <Home />
        </PrivateRoute> */}
        <PrivateRoute path='/:profile'>
          <ProfileRoutes />
        </PrivateRoute>
        <PrivateRoute exact path='/'>
          <Home />
        </PrivateRoute>
      </Switch>
    </Container>
  )
}

export default Routes
