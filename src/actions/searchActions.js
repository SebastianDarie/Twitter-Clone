import { SEARCH_TWEET, SEARCH_USER } from '../constants/searchConstants'

export const filterTweets = (searchedText) => (dispatch) => {
  dispatch({ type: SEARCH_TWEET, payload: searchedText })
}

export const searchUsers = (searchedUser) => (dispatch) => {
  const atTags = searchedUser.match(/@\w+/) || searchedUser
  const user =
    atTags.constructor === Array
      ? atTags.map((tag) => tag.slice(1))
      : searchedUser

  const lowerCaseUser =
    user.constructor === Array ? user[0].toLowerCase() : user.toLowerCase()

  dispatch({ type: SEARCH_USER, payload: lowerCaseUser })
}
