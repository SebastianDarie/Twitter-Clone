import {
  deleteTweet,
  likeTweet,
  unlikeTweet,
  retweet,
  unretweet,
} from '../actions/tweetActions'

export const deleteHandler = (
  e,
  dispatch,
  tweetID,
  userID,
  userTweets,
  replyTo,
  firebase
) => {
  e.stopPropagation()

  dispatch(deleteTweet(tweetID, userID, userTweets, replyTo, { firebase }))
}

export const replyHandler = async (dispatch, tweet) => {
  const { removeAllImages } = await import('../actions/imageActions')
  const { openModal } = await import('../actions/modalActions')

  dispatch(removeAllImages())
  dispatch(openModal(tweet ? tweet.id : 'view'))
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
