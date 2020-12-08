import { SELECT_LINK } from '../constants/selectedConstants'

const initialState = {
  el: 'home',
}

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LINK:
      return {
        ...state,
        el: action.payload.el,
      }

    default:
      return state
  }
}

export default selectedReducer
