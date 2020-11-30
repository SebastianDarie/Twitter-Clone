import { MODAL_CLOSE, MODAL_OPEN } from '../constants/modalConstants'

export const openModal = (id) => (dispatch) => {
  dispatch({
    type: MODAL_OPEN,
    payload: { id, open: true },
  })
}

export const closeModal = (id) => (dispatch) => {
  dispatch({
    type: MODAL_CLOSE,
    payload: { id, open: false },
  })
}
