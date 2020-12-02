import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
  const alertState = useSelector((state) => state.alert)

  return <>{alertState.show}</>
}

export default Alert
