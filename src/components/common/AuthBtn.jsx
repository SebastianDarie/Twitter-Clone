import React from 'react'
import { Link } from 'react-router-dom'
import { LoginBtn } from './AuthBtn'
import { TextDiv } from './GlobalStyles'

const AuthBtn = ({ auth, text }) => {
  return (
    <TextDiv>
      <Link to={`/${auth}`} component={LoginBtn}>
        {text}
      </Link>
    </TextDiv>
  )
}

export default AuthBtn
