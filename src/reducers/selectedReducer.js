import { SELECT_LINK } from '../constants/selectedConstants'

const initialState = {
  el: '',
}

const selectedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_LINK:
      return {
        ...state,
        el: payload.el,
      }

    default:
      return state
  }
}

export default selectedReducer
