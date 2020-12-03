import { SELECT_LINK } from '../constants/selectedConstants'

export const selectLink = (id, selected) => (dispatch) => {
  dispatch({ type: SELECT_LINK, payload: { id, selected } })
}
