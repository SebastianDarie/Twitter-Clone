import {
  LOG_IN_ERROR,
  LOG_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
} from '../constants/authConstants'

const initialState = {
  authMsg: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
    case LOG_IN_SUCCESS:
    case LOG_IN_ERROR:
    case SIGN_UP_ERROR:
    case SIGN_OUT:
    case SIGN_OUT_ERROR:
      return {
        ...state,
        authMsg: payload,
      }

    default:
      return state
  }
}

export default authReducer
