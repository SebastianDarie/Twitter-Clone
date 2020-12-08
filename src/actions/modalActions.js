import { MODAL_CLOSE, MODAL_OPEN } from '../constants/modalConstants'

export const openModal = (el) => (dispatch) => {
  dispatch({
    type: MODAL_OPEN,
    payload: el,
  })
}

export const closeModal = (el) => (dispatch) => {
  dispatch({
    type: MODAL_CLOSE,
    payload: el,
  })
}
