import { MODAL_CLOSE, MODAL_OPEN } from '../constants/modalConstants'

const initialState = {
  el: null,
  open: false,
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

    default:
      return state
  }
}

export default modalReducer
