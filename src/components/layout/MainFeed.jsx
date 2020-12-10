import React from 'react'
import { GrowDiv, MainContainer, MainDiv, MainFlexer } from './MainFeed'
import TweetFeed from '../containers/TweetFeed.jsx'
import RightScreen from './RightScreen.jsx'

const MainFeed = () => {
  return (
    <MainFlexer>
      <MainDiv>
        <GrowDiv>
          <MainContainer>
            <TweetFeed />
            <RightScreen />
          </MainContainer>
        </GrowDiv>
      </MainDiv>
    </MainFlexer>
  )
}

export default MainFeed
