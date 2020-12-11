import React from 'react'
import { useSelector } from 'react-redux'
import {
  FeedLineBreak,
  MainHeaderContainer,
  MainTweetContainer,
  PointerHeader,
  PointerHeight,
  PointerPadding,
  PointerText,
} from './TweetFeed'
import TweetForm from '../common/TweetForm.jsx'

const TweetFeed = () => {
  const profile = useSelector((state) => state.firebase.profile)

  return (
    <MainTweetContainer>
      <div>
        <MainHeaderContainer>
          <PointerHeader>
            <PointerHeight>
              <div>
                <PointerPadding>
                  <PointerText>Home</PointerText>
                </PointerPadding>
              </div>
            </PointerHeight>
          </PointerHeader>
        </MainHeaderContainer>
        <TweetForm profile={profile} />
        <FeedLineBreak />
      </div>
    </MainTweetContainer>
  )
}

export default TweetFeed
