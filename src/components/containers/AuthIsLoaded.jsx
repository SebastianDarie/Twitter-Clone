import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import Loading from '../common/Loading.jsx'

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth)
  return (
    <>
      {!isLoaded(auth) ? (
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
