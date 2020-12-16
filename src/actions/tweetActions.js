import { actions as toastrActions } from 'react-redux-toastr'
import { CREATE_TWEET } from '../constants/tweetConstants'
import { IMAGE_REMOVE_ALL } from '../constants/imageConstants'

export const createTweet = (
  text,
  name,
  username,
  userID,
  userTweets,
  images,
  { firebase }
) => async (dispatch) => {
  const imgCount = images.length || 0

  try {
    const newTweet = await firebase.firestore().collection('tweets').add({
      name,
      username,
      text,
      userID,
      timeStamp: new Date(),
      hashtags: [],
      userTags: [],
      replies: [],
      retweets: [],
      likes: [],
      imageNum: imgCount,
    })

    for (const [idx, img] of images.entries()) {
      const imgRef = firebase
        .storage()
        .ref('tweet pics/' + newTweet.id + '/' + idx + '.png')
      await imgRef.put(img)
    }

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ tweets: [...userTweets, newTweet.id] })

    dispatch({ type: CREATE_TWEET, payload: newTweet })
    dispatch({ type: IMAGE_REMOVE_ALL })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Tweet successfully created!',
        options: {
          showCloseButton: true,
          timeOut: 3000,
        },
      })
    )
  } catch (err) {
    dispatch(
      toastrActions.add({
        type: 'error',
        title: 'Tweet Error',
        position: 'top-right',
        message: err.message,
        options: {
          showCloseButton: true,
          timeOut: 3000,
        },
      })
    )
  }
}
