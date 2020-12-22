import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { actions as toastrActions } from 'react-redux-toastr'
import { closeModal, openModal } from '../../actions/modalActions'
import {
  addImage,
  removeImage,
  removeAllImages,
  setPreviewImage,
  setTweetImage,
} from '../../actions/imageActions'
import { createTweet, reply } from '../../actions/tweetActions'
import {
  MainHeaderContainer,
  MainTweetContainer,
  PointerHeader,
  PointerHeight,
  PointerPadding,
} from '../common/GlobalStyles'
import { FeedLineBreak, PointerText } from './TweetFeed'
import TweetForm from '../common/tweets/TweetForm.jsx'
import TweetTemplate from '../common/tweets/TweetTemplate.jsx'

const TweetFeed = () => {
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
          toastrActions={toastrActions}
        />
        <FeedLineBreak />
        {filteredTweets &&
          filteredTweets.map((tweet) => (
            <TweetTemplate
              key={tweet.id}
              dispatch={dispatch}
              firebase={firebase}
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
              toastrActions={toastrActions}
            />
          ))}
      </div>
    </MainTweetContainer>
  )
}

export default TweetFeed
