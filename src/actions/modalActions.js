import {
  MODAL_CLOSE,
  MODAL_OPEN,
  PROFILE_CLOSE,
  PROFILE_OPEN,
} from '../constants/modalConstants'

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

export const profileOpen = (profile) => (dispatch) => {
  dispatch({
    type: PROFILE_OPEN,
    payload: profile,
  })
}

export const profileClose = (profile) => (dispatch) => {
  dispatch({
    type: PROFILE_CLOSE,
    payload: profile,
  })
}
