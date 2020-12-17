import {
  CREATE_TWEET,
  LIKE_TWEET,
  UNLIKE_TWEET,
} from '../constants/tweetConstants'

const initialState = {
  currTweet: null,
  likedTweet: null,
}

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TWEET:
      return { ...state, currTweet: action.payload }

    case LIKE_TWEET:
      return { ...state, likedTweet: action.payload }

    case UNLIKE_TWEET:
      return { ...state, likedTweet: null }

    default:
      return state
  }
}

export default tweetReducer
