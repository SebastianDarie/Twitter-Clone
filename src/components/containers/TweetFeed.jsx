import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { closeModal, openModal } from '../../actions/modalActions'
import {
  addImage,
  removeImage,
  removeAllImages,
  setPreviewImage,
  setTweetImage,
} from '../../actions/imageActions'
import {
  createTweet,
  likeTweet,
  unlikeTweet,
  retweet,
  unretweet,
  reply,
} from '../../actions/tweetActions'
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
  useFirestoreConnect([
    { collection: 'tweets', orderBy: ['timeStamp', 'desc'] },
  ])
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const tweets = useSelector((state) => state.firestore.ordered.tweets)
  const users = useSelector((state) => state.firestore.ordered.users)
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  const modalState = useSelector((state) => state.modal)
  const images = useSelector((state) => state.image.imgs)
  const previews = useSelector((state) => state.image.previewImgs)
  const tweetImages = useSelector((state) => state.image.tweetImgs)
  const type = useSelector((state) => state.image.type)

  const filteredTweets = tweets?.filter((tweet) => !tweet.replyTo)

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
          type={type}
          profile={profile}
          userID={auth.uid}
        />
        <FeedLineBreak />
        {filteredTweets &&
          filteredTweets.map((tweet) => (
            <TweetTemplate
              key={tweet.id}
              dispatch={dispatch}
              firebase={firebase}
              likeTweet={likeTweet}
              unlikeTweet={unlikeTweet}
              retweet={retweet}
              unretweet={unretweet}
              reply={reply}
              modalState={modalState}
              closeModal={closeModal}
              openModal={openModal}
              users={users}
              profile={profile}
              userID={auth.uid}
              tweet={tweet}
              tweetImages={tweetImages}
              setTweetImage={setTweetImage}
              type={type}
              images={images}
              previews={previews}
              addImage={addImage}
              removeImage={removeImage}
              removeAllImages={removeAllImages}
              setPreviewImage={setPreviewImage}
            />
          ))}
      </div>
    </MainTweetContainer>
  )
}

export default TweetFeed
