import { useEffect, Suspense, lazy } from 'react'
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

const SearchBar = lazy(() => import('../common/SearchBar.jsx'))
const ProfileCard = lazy(() => import('../common/profile/ProfileCard.jsx'))
const TweetTemplate = lazy(() => import('../common/tweets/TweetTemplate.jsx'))

const ExploreFeed = () => {
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
  const searchedText = useSelector((state) => state.search.filteredUser)

  const filteredTweets = tweets
    ?.filter((tweet) => !tweet.replyTo)
    .filter(
      (filteredTweet) =>
        filteredTweet.name.toLowerCase().includes(searchedText) ||
        filteredTweet.username.toLowerCase().includes(searchedText)
    )
  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchedText) ||
      user.username.toLowerCase().includes(searchedText)
  )

  useEffect(() => {
    return async () => {
      const { searchUsers } = await import('../../actions/searchActions')
      dispatch(searchUsers(''))
    }
  }, [])

  return (
    <MainTweetContainer>
      <MainHeaderContainer>
        <PointerHeader>
          <PointerHeight>
            <PointerPadding>
              <Suspense fallback={null}>
                <SearchBar page='explore' />
              </Suspense>
            </PointerPadding>
          </PointerHeight>
        </PointerHeader>
      </MainHeaderContainer>
      <Suspense fallback={null}>
        {searchedText
          ? filteredUsers.map((user) => (
              <ProfileCard key={user.id} profile={profile} userID={user.id} />
            ))
          : null}
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

export default ExploreFeed
