import { SELECT_LINK } from '../constants/selectedConstants'

const initialState = {
  id: 'first',
  selected: false,
}

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LINK:
      return {
        ...state,
        id: action.payload.id,
        selected: action.payload.selected,
      }

    default:
      return state
  }
}

export default selectedReducer
