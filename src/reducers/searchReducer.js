import { SEARCH_TWEET, SEARCH_USER } from '../constants/searchConstants'

const initialState = {
  filteredTweet: '',
  filteredUser: '',
}

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_TWEET:
      return { ...state, filteredTweet: payload }

    case SEARCH_USER:
      return { ...state, filteredUser: payload }

    default:
      return state
  }
}

export default searchReducer
