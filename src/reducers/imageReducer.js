import {
  IMAGE_ADD,
  IMAGE_REMOVE,
  IMAGE_REMOVE_ALL,
  SET_PREVIEW_IMAGE,
  SET_TWEET_IMAGE,
} from '../constants/imageConstants'

const initialState = {
  imgs: [],
  previewImgs: [],
  tweetImgs: [],
}

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_ADD:
      return { ...state, imgs: [...state.imgs, action.payload] }

    case IMAGE_REMOVE:
      return {
        ...state,
        imgs: state.imgs.filter((img) => img.name !== action.payload.name),
        previewImgs: state.previewImgs.filter(
          (img) => img.key !== action.payload.name
        ),
      }

    case IMAGE_REMOVE_ALL:
      return {
        ...state,
        imgs: [],
        previewImgs: [],
        tweetImgs: [...state.tweetImgs],
      }

    case SET_PREVIEW_IMAGE:
      return {
        ...state,
        previewImgs: [...action.payload],
      }

    case SET_TWEET_IMAGE:
      return {
        ...state,
        tweetImgs: [action.payload],
      }

    default:
      return state
  }
}

export default imageReducer
