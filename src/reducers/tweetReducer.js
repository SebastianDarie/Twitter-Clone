import { CREATE_TWEET } from '../constants/tweetConstants'

const initialState = {
  currTweet: null,
}

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TWEET:
      return { ...state, currTweet: action.payload }

    default:
      return state
  }
}

export default tweetReducer
