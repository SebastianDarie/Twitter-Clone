import { SELECT_LINK } from '../constants/selectedConstants'

const initialState = {
  el: null,
  selected: false,
}

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LINK:
      return {
        ...state,
        el: action.payload.el,
        selected: action.payload.selected,
      }

    default:
      return state
  }
}

export default selectedReducer
