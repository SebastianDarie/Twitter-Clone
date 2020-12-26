import { followUser, unfollowUser } from '../actions/userActions'

const followHandler = (
  followed,
  dispatch,
  followID,
  auth,
  profile,
  firebase
) => {
  if (!followed) {
    dispatch(followUser(followID, auth.uid, profile.following, { firebase }))
  } else {
    dispatch(unfollowUser(followID, auth.uid, profile.following, { firebase }))
  }
}

export default followHandler
