import { SHOW_ALERT, CLEAR_ALERT } from '../constants/alertConstants'

const initialState = {
  alertType: null,
  message: '',
  show: false,
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alertType: action.payload.alertType,
        message: action.payload.msg,
        show: true,
      }

    case CLEAR_ALERT:
      return {
        ...state,
        alertType: null,
        message: '',
        show: false,
      }

    default:
      return state
  }
}

export default alertReducer
