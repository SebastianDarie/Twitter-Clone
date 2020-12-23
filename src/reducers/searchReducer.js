import { SEARCH_TWEET } from '../constants/searchConstants'

const initialState = {
  filteredTweet: '',
}

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_TWEET:
      return { ...state, filteredTweet: payload }

    default:
      return state
  }
}

export default searchReducer
