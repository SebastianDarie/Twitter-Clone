import { CLEAR_ALERT, SHOW_ALERT } from '../constants/alertConstants'

export const showAlert = (alertType, msg) => (dispatch) => {
  dispatch({ type: SHOW_ALERT, payload: alertType, msg })
}

export const clearAlert = () => (dispatch) => {
  dispatch({ type: CLEAR_ALERT })
}
