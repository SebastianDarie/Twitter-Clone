import { Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { actions as toastrActions } from 'react-redux-toastr'
import {
  MainHeaderContainer,
  MainTweetContainer,
  PointerHeader,
  PointerHeight,
  PointerPadding,
} from '../common/GlobalStyles'
import { FeedLineBreak, PointerText } from './TweetFeed'

const TweetForm = lazy(() => import('../common/tweets/TweetForm.jsx'))
const TweetTemplate = lazy(() => import('../common/tweets/TweetTemplate.jsx'))

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
      <Suspense fallback={null}>
        <TweetForm
          dispatch={dispatch}
          firebase={firebase}
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
              modalState={modalState}
              users={users}
              auth={auth}
              profile={profile}
              userID={auth.uid}
              tweet={tweet}
              tweetImages={tweetImages}
              type={type}
              images={images}
              previews={previews}
              toastrActions={toastrActions}
            />
          ))}
      </Suspense>
    </MainTweetContainer>
  )
}

export default TweetFeed
