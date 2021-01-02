import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { actions as toastrActions } from 'react-redux-toastr'
import { reply } from '../../../actions/tweetActions'
import TweetTemplate from '../tweets/TweetTemplate.jsx'

const ProfileFeed = ({ currProfile, profileView }) => {
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

  const filteredTweets =
    profileView === 'retweets'
      ? tweets
          ?.filter((tweet) => !tweet.replyTo)
          .filter(
            (pureTweet) =>
              pureTweet.userID === currProfile?.id ||
              pureTweet.retweets.includes(currProfile?.id)
          )
      : profileView === 'replies'
      ? tweets?.filter(
          (tweet) =>
            tweet.userID === currProfile?.id ||
            tweet.retweets.includes(currProfile?.id)
        )
      : profileView === 'media'
      ? tweets?.filter(
          (tweet) => tweet.userID === currProfile?.id && tweet.imageNum !== 0
        )
      : profileView === 'likes'
      ? tweets?.filter((tweet) => tweet.likes.includes(currProfile?.id))
      : []

  return (
    <>
      {filteredTweets &&
        filteredTweets.map((tweet) => (
          <TweetTemplate
            key={tweet.id}
            dispatch={dispatch}
            firebase={firebase}
            reply={reply}
            profileView={profileView}
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
    </>
  )
}

export default ProfileFeed
