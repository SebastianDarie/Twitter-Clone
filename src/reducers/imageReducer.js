import {
  IMAGE_ADD,
  IMAGE_REMOVE,
  SET_PREVIEW_IMAGE,
} from '../constants/imageConstants'

const initialState = {
  imgs: [],
  previewImgs: [],
}

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_ADD:
      return { ...state, imgs: [...state.imgs, action.payload] }

    case IMAGE_REMOVE:
      return {
        ...state,
        imgs: state.imgs.filter((img) => img.name !== action.payload.name),
      }

    case SET_PREVIEW_IMAGE:
      return {
        ...state,
        previewImgs: [...state.previewImgs, ...action.payload],
      }

    default:
      return state
  }
}

export default imageReducer
