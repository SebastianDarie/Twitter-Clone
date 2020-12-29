import { FOLLOW, UNFOLLOW, UPDATE_PROFILE } from '../constants/userConstants'
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

export const updateName = (newName, currProfile, { firebase }) => async (
  dispatch
) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('tweets')
      .where('userID', '==', currProfile.id)
      .get()

    snapshot.forEach(async (doc) => {
      await firebase
        .firestore()
        .collection('tweets')
        .doc(doc.id)
        .update({ name: newName || currProfile.name })
    })
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

export const updateProfile = (
  data,
  header,
  profile,
  currProfile,
  { firebase }
) => async (dispatch) => {
  try {
    await firebase
      .firestore()
      .collection('users')
      .doc(currProfile.id)
      .update({
        name: data.name || currProfile.name,
        bio: data.bio || currProfile.bio,
      })

    dispatch(updateName(data.name, currProfile, { firebase }))

    if (header) {
      const snapshot = await firebase
        .storage()
        .ref('header pics/' + currProfile.id + '.png')
        .put(header)

      const url = await snapshot.ref.getDownloadURL()

      await firebase
        .firestore()
        .collection('users')
        .doc(currProfile.id)
        .update({
          headerURL: url,
        })
    }

    if (profile) {
      const snapshot = await firebase
        .storage()
        .ref('profile pics/' + currProfile.id + '.png')
        .put(profile)

      const url = await snapshot.ref.getDownloadURL()

      await firebase
        .firestore()
        .collection('users')
        .doc(currProfile.id)
        .update({
          photoURL: url,
        })
    }

    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Profile successfully updated!',
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
