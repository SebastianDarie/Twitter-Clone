import React from 'react'
import { useRouter } from '../hooks/useRouter'
import { Switch } from 'react-router-dom'
import {
  GrowDiv,
  MainContainer,
  MainDiv,
  MainFlexer,
} from '../components/common/GlobalStyles'
import PrivateRoute from '../components/containers/auth/PrivateRoute'
import FollowFeed from '../components/common/profile/FollowFeed.jsx'
import Profile from '../pages/Profile'
import RightScreen from '../components/layout/RightScreen.jsx'

const ProfileRoutes = () => {
  const router = useRouter()

  return (
    <MainFlexer>
      <MainDiv>
        <GrowDiv>
          <MainContainer>
            <Switch>
              <PrivateRoute path={`${router.match.path}/following`}>
                <FollowFeed />
              </PrivateRoute>
              <PrivateRoute path={`${router.match.path}/followers`}>
                <FollowFeed />
              </PrivateRoute>
              <PrivateRoute path={`${router.match.path}`}>
                <Profile />
              </PrivateRoute>
            </Switch>
            <RightScreen />
          </MainContainer>
        </GrowDiv>
      </MainDiv>
    </MainFlexer>
  )
}

export default ProfileRoutes
