import {
  likeTweet,
  unlikeTweet,
  retweet,
  unretweet,
} from '../actions/tweetActions'

export const replyHandler = (
  e,
  dispatch,
  openModal,
  removeAllImages,
  tweet
) => {
  e.stopPropagation()

  dispatch(removeAllImages())
  dispatch(openModal(tweet.id))
}

export const retweetHandler = (
  e,
  retweeted,
  dispatch,
  currTweet,
  userID,
  profile,
  firebase
) => {
  if (retweeted) {
    e.stopPropagation()

    dispatch(
      unretweet(currTweet.id, userID, profile.retweets, {
        firebase,
      })
    )
  } else {
    e.stopPropagation()

    dispatch(
      retweet(currTweet.id, userID, profile.retweets, {
        firebase,
      })
    )
  }
}

export const likeHandler = (
  e,
  liked,
  dispatch,
  currTweet,
  userID,
  profile,
  firebase
) => {
  if (liked) {
    e.stopPropagation()

    dispatch(
      unlikeTweet(currTweet.id, userID, profile.likes, {
        firebase,
      })
    )
  } else {
    e.stopPropagation()

    dispatch(
      likeTweet(currTweet.id, userID, profile.likes, {
        firebase,
      })
    )
  }
}
