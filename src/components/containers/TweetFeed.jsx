import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import {
  FeedLineBreak,
  MainHeaderContainer,
  MainTweetContainer,
  PointerHeader,
  PointerHeight,
  PointerPadding,
  PointerText,
} from './TweetFeed'
import TweetForm from '../common/tweets/TweetForm.jsx'
import TweetTemplate from '../common/tweets/TweetTemplate.jsx'

const TweetFeed = () => {
  useFirestoreConnect([{ collection: 'tweets' }])
  const tweets = useSelector((state) => state.firestore.ordered.tweets)
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
        {tweets &&
          tweets.map((tweet) => (
            <TweetTemplate key={tweet.id} profile={profile} tweet={tweet} />
          ))}
      </div>
    </MainTweetContainer>
  )
}

export default TweetFeed
