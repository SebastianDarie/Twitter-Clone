import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import TweetFeed from '../components/containers/TweetFeed.jsx'
import RightScreen from '../components/layout/RightScreen.jsx'
import {
  GrowDiv,
  MainContainer,
  MainDiv,
  MainFlexer,
} from '../components/common/GlobalStyles.js'
//import TwitterModal from '../components/common/TwitterModal.jsx'

const Home = () => {
  useFirestoreConnect([{ collection: 'users' }])

  return (
    <>
      {/* <TwitterModal
        title='Log out of Twitter?'
        text='You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.'
      /> */}
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
    </>
  )
}

export default Home
