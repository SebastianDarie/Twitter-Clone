import { Suspense, lazy } from 'react';
import { useRouter } from '../hooks/useRouter'
import { Switch } from 'react-router-dom'
import {
  GrowDiv,
  MainContainer,
  MainDiv,
  MainFlexer,
} from '../components/common/GlobalStyles'
import Loading from '../components/common/global/Loading.jsx'
import PrivateRoute from '../components/containers/auth/PrivateRoute'

const FollowFeed = lazy(() =>
  import('../components/common/profile/FollowFeed.jsx')
)
const Profile = lazy(() => import('../pages/Profile'))
const RightScreen = lazy(() => import('../components/layout/RightScreen.jsx'))

const ProfileRoutes = () => {
  const router = useRouter()

  return (
    <MainFlexer>
      <MainDiv>
        <GrowDiv>
          <MainContainer>
            <Suspense fallback={<Loading />}>
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
            </Suspense>
          </MainContainer>
        </GrowDiv>
      </MainDiv>
    </MainFlexer>
  )
}

export default ProfileRoutes
