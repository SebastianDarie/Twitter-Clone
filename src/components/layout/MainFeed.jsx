import React from 'react'
import { MainContainer, MainDiv } from './MainFeed'
import RightScreen from './RightScreen.jsx'

const MainFeed = () => {
  return (
    <main>
      <MainDiv>
        <div>
          <MainContainer>
            <RightScreen />
          </MainContainer>
        </div>
      </MainDiv>
    </main>
  )
}

export default MainFeed
