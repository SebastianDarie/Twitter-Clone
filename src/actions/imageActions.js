import { actions as toastrActions } from 'react-redux-toastr'
import {
  IMAGE_ADD,
  IMAGE_REMOVE,
  IMAGE_REMOVE_ALL,
  SET_PREVIEW_IMAGE,
  SET_TWEET_IMAGE,
} from '../constants/imageConstants'

export const addImage = (image, type) => (dispatch, getState) => {
  const currImages = getState().image.imgs
  const currType = getState().image.type
  const names = currImages.map((image) => image.name)

  if (currType !== type) {
    dispatch({ type: IMAGE_REMOVE_ALL })
  }

  if (currImages.length >= 4 && !names.includes(image.name)) {
    dispatch(
      toastrActions.add({
        type: 'warning',
        title: 'Too many images',
        position: 'top-right',
        message: 'Please select a maximum of 4 images!',
        options: {
          showCloseButton: true,
          timeOut: 5000,
        },
      })
    )
  } else if (names.includes(image.name)) {
    dispatch(
      toastrActions.add({
        type: 'warning',
        title: 'Duplicate Image',
        position: 'top-right',
        message: "You've already uploaded that image!",
        options: {
          showCloseButton: true,
          timeOut: 5000,
        },
      })
    )
  } else {
    dispatch({ type: IMAGE_ADD, payload: { image, type } })
  }
}

export const removeImage = (image) => (dispatch) => {
  dispatch({ type: IMAGE_REMOVE, payload: image })
}

export const removeAllImages = () => (dispatch) => {
  dispatch({ type: IMAGE_REMOVE_ALL })
}

export const setPreviewImage = (images) => (dispatch) => {
  dispatch({ type: SET_PREVIEW_IMAGE, payload: images })
}

export const setTweetImage = (id, images) => (dispatch) => {
  dispatch({ type: SET_TWEET_IMAGE, payload: { id, images } })
}
