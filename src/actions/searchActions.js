import { SEARCH_TWEET } from '../constants/searchConstants'

export const filterTweets = (searchedText) => (dispatch) => {
  dispatch({ type: SEARCH_TWEET, payload: searchedText })
}
