import { Suspense, lazy } from 'react';
import {
  GrowDiv,
  MainContainer,
  MainDiv,
  MainFlexer,
} from '../components/common/GlobalStyles.js'
import Loading from '../components/common/global/Loading.jsx'

const TweetFeed = lazy(() => import('../components/containers/TweetFeed.jsx'))
const RightScreen = lazy(() => import('../components/layout/RightScreen.jsx'))

const Home = () => {
  return (
    <>
      <MainFlexer>
        <MainDiv>
          <GrowDiv>
            <MainContainer>
              <Suspense fallback={<Loading />}>
                <TweetFeed />
                <RightScreen />
              </Suspense>
            </MainContainer>
          </GrowDiv>
        </MainDiv>
      </MainFlexer>
    </>
  )
}

export default Home
