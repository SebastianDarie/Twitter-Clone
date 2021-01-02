import { Suspense, lazy } from 'react'
import {
  GrowDiv,
  MainContainer,
  MainDiv,
  MainFlexer,
} from '../components/common/GlobalStyles.js'
import Loading from '../components/common/global/Loading.jsx'

const ExploreFeed = lazy(() =>
  import('../components/containers/ExploreFeed.jsx')
)
const RightScreen = lazy(() => import('../components/layout/RightScreen.jsx'))

const Explore = () => {
  return (
    <>
      <MainFlexer>
        <MainDiv>
          <GrowDiv>
            <MainContainer>
              <Suspense fallback={<Loading />}>
                <ExploreFeed />
                <RightScreen page='explore' />
              </Suspense>
            </MainContainer>
          </GrowDiv>
        </MainDiv>
      </MainFlexer>
    </>
  )
}

export default Explore
