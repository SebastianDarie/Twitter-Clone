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

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TWEET:
    case REPLY:
      return { ...state, currTweet: action.payload }

    case LIKE_TWEET:
      return { ...state, likedTweet: action.payload }

    case UNLIKE_TWEET:
      return { ...state, likedTweet: null }

    case RETWEET:
      return { ...state, retweet: action.payload }

    case UNRETWEET:
      return { ...state, retweet: null }

    default:
      return state
  }
}

export default tweetReducer
