import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { actions as toastrActions } from 'react-redux-toastr'
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
  const searchedText = useSelector((state) => state.search.filteredTweet)

  const filteredTweets = tweets
    ?.filter((tweet) => !tweet.replyTo)
    .filter((filteredTweet) => filteredTweet.text.includes(searchedText))

  return (
    <MainTweetContainer>
      <MainHeaderContainer>
        <PointerHeader>
          <PointerHeight>
            <PointerPadding>
              <PointerText>Home</PointerText>
            </PointerPadding>
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
        filteredTweets.map(async (tweet) => (
          <TweetTemplate
            key={tweet.id}
            dispatch={dispatch}
            firebase={firebase}
            reply={reply}
            modalState={modalState}
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
    </MainTweetContainer>
  )
}

export default TweetFeed
