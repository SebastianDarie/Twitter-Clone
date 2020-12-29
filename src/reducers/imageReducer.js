import {
  IMAGE_ADD,
  IMAGE_REMOVE,
  IMAGE_REMOVE_ALL,
  REMOVE_PREVIEWS,
  SET_PREVIEW_HEADER,
  SET_PREVIEW_IMAGE,
  SET_PREVIEW_PIC,
  SET_TWEET_IMAGE,
} from '../constants/imageConstants'

const initialState = {
  imgs: [],
  previewImgs: [],
  tweetImgs: [],
  type: 'form',
  previewHeader: null,
  previewPic: null,
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

    case SET_PREVIEW_HEADER:
      return {
        ...state,
        previewHeader: payload,
      }

    case SET_PREVIEW_PIC:
      return {
        ...state,
        previewPic: payload,
      }

    case REMOVE_PREVIEWS:
      return {
        ...state,
        previewHeader: null,
        previewPic: null,
      }

    default:
      return state
  }
}

export default imageReducer
