import { FOLLOW, UNFOLLOW, UPDATE_NAME } from '../constants/userConstants'
import { actions as toastrActions } from 'react-redux-toastr'

export const followUser = (
  followID,
  userID,
  userFollows,
  { firebase }
) => async (dispatch) => {
  try {
    await firebase.firestore().runTransaction(async (transaction) => {
      const snapshot = await firebase
        .firestore()
        .collection('users')
        .doc(followID)
        .get()

      const updatedFollowers = [...snapshot.data().followers, userID]

      await firebase
        .firestore()
        .collection('users')
        .doc(followID)
        .update({ followers: updatedFollowers })

      const updatedFollowing = [...userFollows, followID]

      await firebase
        .firestore()
        .collection('users')
        .doc(userID)
        .update({ following: updatedFollowing })

      dispatch({ type: FOLLOW, payload: followID })
      dispatch(
        toastrActions.add({
          type: 'success',
          title: 'Success',
          position: 'top-right',
          message: 'User successfully followed!',
          options: {
            showCloseButton: true,
            timeOut: 3000,
          },
        })
      )
    })
  } catch (err) {
    dispatch(
      toastrActions.add({
        type: 'error',
        title: 'Follow Error',
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

export const unfollowUser = (
  unfollowID,
  userID,
  userFollows,
  { firebase }
) => async (dispatch) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('users')
      .doc(unfollowID)
      .get()

    const updatedFollowers = snapshot
      .data()
      .followers.filter((follower) => follower !== userID)

    await firebase
      .firestore()
      .collection('users')
      .doc(unfollowID)
      .update({ followers: updatedFollowers })

    const updatedFollowing = userFollows.filter((user) => user !== unfollowID)

    await firebase
      .firestore()
      .collection('users')
      .doc(userID)
      .update({ following: updatedFollowing })

    dispatch({ type: UNFOLLOW, payload: unfollowID })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'User successfully unfollowed!',
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
        title: 'Unfollow Error',
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

export const updateName = (newName, userID, { firebase }) => async (
  dispatch
) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .where('userID', '==', userID)
      .get()

    snapshot.forEach(async (doc) => {
      await firebase
        .firestore()
        .collection('tweets')
        .doc(doc.id)
        .update({ name: newName })
    })

    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Successfully updated name!',
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
        title: 'Update Error',
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
