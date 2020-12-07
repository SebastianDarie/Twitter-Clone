import { SELECT_LINK } from '../constants/selectedConstants'

export const selectLink = (el, selected) => (dispatch) => {
  dispatch({ type: SELECT_LINK, payload: { el, selected } })
}
