import { MODAL_CLOSE, MODAL_OPEN } from '../constants/modalConstants'

const modalReducer = (state = { open: false }, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        id: action.payload.id,
        open: action.payload.open,
      }

    case MODAL_CLOSE:
      return {
        ...state,
        id: action.payload.id,
        open: action.payload.open,
      }

    default:
      return state
  }
}

export default modalReducer
