import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import {
  addImage,
  removeImage,
  setPreviewImage,
  setTweetImage,
} from '../../actions/imageActions'
import { createTweet, likeTweet, unlikeTweet } from '../../actions/tweetActions'
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
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const tweets = useSelector((state) => state.firestore.ordered.tweets)
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  const images = useSelector((state) => state.image.imgs)
  const previews = useSelector((state) => state.image.previewImgs)
  const tweetImages = useSelector((state) => state.image.tweetImgs)

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
        <TweetForm
          dispatch={dispatch}
          firebase={firebase}
          createTweet={createTweet}
          addImage={addImage}
          removeImage={removeImage}
          setPreviewImage={setPreviewImage}
          images={images}
          previews={previews}
          profile={profile}
          userID={auth.uid}
        />
        <FeedLineBreak />
        {tweets &&
          tweets.map((tweet) => (
            <TweetTemplate
              key={tweet.id}
              dispatch={dispatch}
              firebase={firebase}
              likeTweet={likeTweet}
              unlikeTweet={unlikeTweet}
              profile={profile}
              userID={auth.uid}
              tweet={tweet}
              tweetImages={tweetImages}
              setTweetImage={setTweetImage}
            />
          ))}
      </div>
    </MainTweetContainer>
  )
}

export default TweetFeed
