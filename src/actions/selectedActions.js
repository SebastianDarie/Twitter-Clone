import { SELECT_LINK } from '../constants/selectedConstants'

export const selectLink = (el) => (dispatch) => {
  dispatch({ type: SELECT_LINK, payload: { el } })
}
