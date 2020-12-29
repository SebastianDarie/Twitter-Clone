import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import Loading from '../../common/global/Loading.jsx'

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth)
  return <>{!isLoaded(auth) ? <Loading /> : children}</>
}

export default AuthIsLoaded
