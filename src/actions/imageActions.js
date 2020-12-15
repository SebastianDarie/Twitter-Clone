import { actions as toastrActions } from 'react-redux-toastr'
import {
  IMAGE_ADD,
  IMAGE_REMOVE,
  SET_PREVIEW_IMAGE,
} from '../constants/imageConstants'

export const addImage = (image) => (dispatch, getState) => {
  const currImages = getState().image.imgs
  const names = currImages.map((image) => image.name)
  console.log(currImages, typeof names[0], typeof image.name)
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
    dispatch({ type: IMAGE_ADD, payload: image })
  }
}

export const removeImage = (image) => (dispatch) => {
  dispatch({ type: IMAGE_REMOVE, payload: image })
}

export const setPreviewImage = (images) => (dispatch) => {
  dispatch({ type: SET_PREVIEW_IMAGE, payload: images })
}
