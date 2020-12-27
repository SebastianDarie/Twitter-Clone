import {
  MODAL_CLOSE,
  MODAL_OPEN,
  PROFILE_CLOSE,
  PROFILE_OPEN,
} from '../constants/modalConstants'

const initialState = {
  el: null,
  open: false,
  profile: false,
}

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return {
        ...state,
        el: payload || null,
        open: true,
      }

    case MODAL_CLOSE:
      return {
        ...state,
        el: payload || null,
        open: false,
      }

    case PROFILE_OPEN:
      return {
        ...state,
        open: false,
        profile: true,
      }

    case PROFILE_CLOSE:
      return {
        ...state,
        profile: false,
      }

    default:
      return state
  }
}

export default modalReducer
