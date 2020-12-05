import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth)
  return (
    <Route
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
