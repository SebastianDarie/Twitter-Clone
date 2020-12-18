import { actions as toastrActions } from 'react-redux-toastr'
import { MODAL_CLOSE } from '../constants/modalConstants'
import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
} from '../constants/authConstants'

export const signUp = (credentials, { firebase }) => async (dispatch) => {
  try {
    const userSnapshot = await firebase
      .firestore()
      .collection('users')
      .where('name', '==', credentials.name)
      .get()

    if (userSnapshot.docs.length !== 0) {
      dispatch({ type: SIGN_UP_ERROR, payload: 'Name already exists!' })
      dispatch(
        toastrActions.add({
          type: 'error',
          title: 'Auth Error',
          position: 'top-right',
          message: 'Name already exists!',
          options: {
            showCloseButton: true,
            timeOut: 3000,
          },
        })
      )
    } else {
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)

      const url = await firebase
        .storage()
        .ref('profile pics/default_profile_400x400.png')
        .getDownloadURL()

      await newUser.user.updateProfile({
        displayName: credentials.name,
        photoURL: url,
      })

      await firebase.firestore().collection('users').doc(newUser.user.uid).set({
        joined: new Date(),
        name: credentials.name,
        username: credentials.username,
        email: credentials.email,
        photoURL: url,
        followers: [],
        following: [],
        likes: [],
        retweets: [],
        tweets: [],
      })

      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: 'Account successfully created!',
      })
      dispatch(
        toastrActions.add({
          type: 'success',
          title: 'Success',
          position: 'top-right',
          message: 'Account successfully created!',
          options: {
            showCloseButton: true,
            timeOut: 3000,
          },
        })
      )
      dispatch({ type: MODAL_CLOSE })
    }
  } catch (err) {
    dispatch({ type: SIGN_UP_ERROR, payload: err.message })
    dispatch(
      toastrActions.add({
        type: 'error',
        title: 'Auth Error',
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

export const logIn = (credentials, { firebase }) => async (dispatch) => {
  try {
    const userSnapshot = await firebase
      .firestore()
      .collection('users')
      .where('email', '==', credentials.email)
      .get()

    if (userSnapshot.docs.length === 0) {
      dispatch({ type: LOG_IN_ERROR, payload: 'Email does not exist.' })
      dispatch(
        toastrActions.add({
          type: 'error',
          title: 'Auth Error',
          position: 'top-right',
          message: 'Email does not exist.',
          options: {
            showCloseButton: true,
            timeOut: 3000,
          },
        })
      )
    } else {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)

      dispatch({ type: LOG_IN_SUCCESS, payload: 'Successfully logged in!' })
      dispatch(
        toastrActions.add({
          type: 'success',
          title: 'Success',
          position: 'top-right',
          message: 'Successfully logged in!',
          options: {
            showCloseButton: true,
            timeOut: 3000,
          },
        })
      )
    }
  } catch (err) {
    dispatch({ type: LOG_IN_ERROR, payload: err.message })
    dispatch(
      toastrActions.add({
        type: 'error',
        title: 'Auth Error',
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

export const logOut = ({ firebase }) => async (dispatch) => {
  try {
    await firebase.auth().signOut()
    dispatch({ type: SIGN_OUT, payload: 'Logged out!' })
    dispatch(
      toastrActions.add({
        type: 'success',
        title: 'Success',
        position: 'top-right',
        message: 'Logged out!',
        options: {
          showCloseButton: true,
          timeOut: 3000,
        },
      })
    )
    dispatch({ type: MODAL_CLOSE })
  } catch (err) {
    dispatch({ type: SIGN_OUT_ERROR, payload: err.message })
    dispatch(
      toastrActions.add({
        type: 'error',
        title: 'Auth Error',
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
