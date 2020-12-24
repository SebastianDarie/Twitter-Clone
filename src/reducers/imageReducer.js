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
  type: 'form',
}

const imageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGE_ADD:
      return {
        ...state,
        imgs: [...state.imgs, payload.image],
        type: payload.type,
      }

    case IMAGE_REMOVE:
      return {
        ...state,
        imgs: state.imgs.filter((img) => img.name !== payload.name),
        previewImgs: state.previewImgs.filter(
          (img) => img.key !== payload.name
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
        previewImgs: [...payload],
      }

    case SET_TWEET_IMAGE:
      return {
        ...state,
        tweetImgs: [...state.tweetImgs, payload],
      }

    default:
      return state
  }
}

export default imageReducer
