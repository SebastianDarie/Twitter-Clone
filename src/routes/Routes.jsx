import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Container } from '../components/common/GlobalStyles'
import Loading from '../components/common/global/Loading.jsx'
import PrivateRoute from '../components/containers/auth/PrivateRoute'

const SideNav = lazy(() => import('../components/layout/SideNav.jsx'))
const Home = lazy(() => import('../pages/Home.jsx'))
const ProfileRoutes = lazy(() => import('./ProfileRoutes'))
const TweetView = lazy(() =>
  import('../components/common/tweets/TweetView.jsx')
)

const Routes = () => {
  useFirestoreConnect([{ collection: 'users' }])
  useFirestoreConnect([
    { collection: 'tweets', orderBy: ['timeStamp', 'desc'] },
  ])
  return (
    <Container>
      <SideNav />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Container>
  )
}

export default Routes
