import React from 'react'
import { Link } from 'react-router-dom'
import { LoginBtn, SignupBtn, TextDiv } from './AuthBtn'

const AuthBtn = ({ auth, text }) => {
  return (
    <TextDiv>
      <Link
        to={`/${auth}`}
        component={auth === 'signup' ? SignupBtn : LoginBtn}
      >
        {text}
      </Link>
    </TextDiv>
  )
}

export default AuthBtn
