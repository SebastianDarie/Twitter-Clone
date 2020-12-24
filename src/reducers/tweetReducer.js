import {
  CREATE_TWEET,
  LIKE_TWEET,
  UNLIKE_TWEET,
  RETWEET,
  UNRETWEET,
  REPLY,
} from '../constants/tweetConstants'

const initialState = {
  currTweet: null,
  likedTweet: null,
  retweet: null,
}

const tweetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TWEET:
    case REPLY:
      return { ...state, currTweet: payload }

    case LIKE_TWEET:
      return { ...state, likedTweet: payload }

    case UNLIKE_TWEET:
      return { ...state, likedTweet: null }

    case RETWEET:
      return { ...state, retweet: payload }

    case UNRETWEET:
      return { ...state, retweet: null }

    default:
      return state
  }
}

export default tweetReducer
