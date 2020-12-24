import { FOLLOW, UNFOLLOW, UPDATE_NAME } from '../constants/userConstants'

const initialState = {
  followedUsers: [],
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FOLLOW:
    case UNFOLLOW:
      return { ...state, payload }

    default:
      return state
  }
}

export default userReducer
