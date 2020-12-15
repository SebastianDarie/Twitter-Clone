import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import {
  addImage,
  removeImage,
  setPreviewImage,
} from '../../actions/imageActions'
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
  const tweets = useSelector((state) => state.firestore.ordered.tweets)
  const profile = useSelector((state) => state.firebase.profile)
  const images = useSelector((state) => state.image.imgs)
  const previews = useSelector((state) => state.image.previewImgs)

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
          addImage={addImage}
          removeImage={removeImage}
          setPreviewImage={setPreviewImage}
          images={images}
          previews={previews}
          profile={profile}
        />
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
