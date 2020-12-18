import { actions as toastrActions } from 'react-redux-toastr'
import {
  CREATE_TWEET,
  LIKE_TWEET,
  REPLY,
  RETWEET,
  UNLIKE_TWEET,
  UNRETWEET,
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
) => async (dispatch) => {
  let tempArr = []
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

export const likeTweet = (tweetID, userID, userLikes, { firebase }) => async (
  dispatch
) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .get()

    const currLikes = snapshot.data().likes
    const updatedLikes = [...currLikes, userID]

    await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .update({ likes: updatedLikes })

    const newLikes = [...userLikes, tweetID]

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ likes: newLikes })

    dispatch({ type: LIKE_TWEET, payload: tweetID })
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

export const unlikeTweet = (tweetID, userID, userLikes, { firebase }) => async (
  dispatch
) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .get()

    const currLikes = snapshot.data().likes
    const updatedLikes = currLikes.filter((like) => like !== userID)

    await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .update({ likes: updatedLikes })

    const newLikes = userLikes.filter((liked) => liked !== tweetID)

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

export const retweet = (tweetID, userID, userRetweets, { firebase }) => async (
  dispatch
) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .get()

    const updatedRetweets = [...snapshot.data().retweets, userID]

    await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .update({ retweets: updatedRetweets })

    const newRetweets = [...userRetweets, tweetID]

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ retweets: newRetweets })

    dispatch({ type: RETWEET, payload: tweetID })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Tweet retweeted!',
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
        title: 'Retweet Error',
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

export const unretweet = (
  tweetID,
  userID,
  userRetweets,
  { firebase }
) => async (dispatch) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .get()

    const updatedRetweets = snapshot
      .data()
      .retweets.filter((tweet) => tweet !== userID)

    await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .update({ retweets: updatedRetweets })

    const newRetweets = userRetweets.filter((tweet) => tweet !== tweetID)

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ retweets: newRetweets })

    dispatch({ type: UNRETWEET })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Tweet unretweeted!',
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
        title: 'Unretweet Error',
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

export const reply = (
  tweetID,
  creatorID,
  text,
  name,
  username,
  userID,
  userTweets,
  images,
  { firebase }
) => async (dispatch) => {
  let tempArr = []
  const imgCount = images.length || 0

  try {
    const replyTweet = await firebase.firestore().collection('tweets').add({
      name,
      username,
      text,
      userID,
      timeStamp: new Date(),
      replyTo: tweetID,
      replyUserID: creatorID,
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
        .ref('tweet pics/' + replyTweet.id + '/' + idx + '.png')
      await imgRef.put(img)

      const url = await imgRef.getDownloadURL()
      tempArr.push(url)
    }

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ tweets: [...userTweets, replyTweet.id] })

    const baseTweet = await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .get()
    const currReplies = baseTweet.data().replies

    const updatedReplies = [...currReplies, replyTweet.id]

    await firebase
      .firestore()
      .collection('tweets')
      .doc(tweetID)
      .update({ replies: updatedReplies })

    dispatch({ type: REPLY, payload: replyTweet })
    dispatch({
      type: SET_TWEET_IMAGE,
      payload: { id: replyTweet.id, images: tempArr },
    })
    dispatch({ type: IMAGE_REMOVE_ALL })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: `Replied!`,
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
        title: 'Reply Error',
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
