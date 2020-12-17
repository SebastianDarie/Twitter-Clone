import { actions as toastrActions } from 'react-redux-toastr'
import {
  CREATE_TWEET,
  LIKE_TWEET,
  UNLIKE_TWEET,
} from '../constants/tweetConstants'
import { IMAGE_REMOVE_ALL, SET_TWEET_IMAGE } from '../constants/imageConstants'

export const createTweet = (
  text,
  name,
  username,
  userID,
  userTweets,
  images,
  { firebase }
) => async (dispatch, getState) => {
  let tempArr = []
  const imgCount = images.length || 0
  //   const previewImgs = getState().image.previewImgs

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

      const url = await imgRef.getDownloadURL()
      tempArr.push(url)
    }

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ tweets: [...userTweets, newTweet.id] })

    dispatch({ type: CREATE_TWEET, payload: newTweet })
    dispatch({
      type: SET_TWEET_IMAGE,
      payload: { id: newTweet.id, images: tempArr },
    })
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

export const likeTweet = (tweet, userID, userLikes, { firebase }) => async (
  dispatch
) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .doc(tweet.id)
      .get()

    const currLikes = snapshot.data().likes
    const updatedLikes = [...currLikes, userID]

    await firebase
      .firestore()
      .collection('tweets')
      .doc(tweet.id)
      .update({ likes: updatedLikes })

    const newLikes = [...userLikes, tweet.id]

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ likes: newLikes })

    dispatch({ type: LIKE_TWEET, payload: tweet.id })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Tweet liked!',
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
        title: 'Like Error',
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

export const unlikeTweet = (tweet, userID, userLikes, { firebase }) => async (
  dispatch
) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .doc(tweet.id)
      .get()

    const currLikes = snapshot.data().likes
    const updatedLikes = currLikes.filter((like) => like !== userID)

    await firebase
      .firestore()
      .collection('tweets')
      .doc(tweet.id)
      .update({ likes: updatedLikes })

    const newLikes = userLikes.filter((liked) => liked !== tweet.id)

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ likes: newLikes })

    dispatch({ type: UNLIKE_TWEET })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Tweet unliked!',
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
        title: 'Unlike Error',
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
