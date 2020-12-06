import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import Loading from '../common/Loading.jsx'

const AuthIsLoaded = ({ children }) => {
  useFirestoreConnect([{ collection: 'users' }])
  const auth = useSelector((state) => state.firebase.auth)
  const users = useSelector((state) => state.firestore.ordered.users)
  return (
    <>
      {!isLoaded(auth) && !users ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 350,
            width: '100%',
          }}
        >
          <Loading />
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default AuthIsLoaded
