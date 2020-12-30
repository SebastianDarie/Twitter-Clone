import {
  MENU_CLOSE,
  MENU_OPEN,
  MODAL_CLOSE,
  MODAL_OPEN,
  PROFILE_CLOSE,
  PROFILE_OPEN,
} from '../constants/modalConstants'

const initialState = {
  el: null,
  menu: false,
  open: false,
  profile: false,
}

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MENU_OPEN:
      return {
        ...state,
        el: payload,
        menu: true,
      }

    case MENU_CLOSE:
      return {
        ...state,
        menu: false,
      }

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
