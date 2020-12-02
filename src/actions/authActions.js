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
        email: credentials.email,
        followers: 0,
        following: 0,
      })

      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: 'Account successfully created!',
      })
    }
  } catch (err) {
    dispatch({ type: SIGN_UP_ERROR, payload: err.message })
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
    } else {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)

      dispatch({ type: LOG_IN_SUCCESS, payload: 'Successfully logged in!' })
    }
  } catch (err) {
    dispatch({ type: LOG_IN_ERROR, payload: err.message })
  }
}

export const logOut = ({ firebase }) => async (dispatch) => {
  try {
    await firebase.auth().signOut()
    dispatch({ type: SIGN_OUT, payload: 'Logged out!' })
  } catch (err) {
    dispatch({ type: SIGN_OUT_ERROR, payload: err.message })
  }
}
