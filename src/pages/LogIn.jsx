import React from 'react'
import { useForm } from 'react-hook-form'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { logIn } from '../actions/authActions'
import { openModal } from '../actions/modalActions'
import {
  BlueLink,
  BreakPoint,
  BtnContainer,
  FormContainer,
  Header,
  LinkContainer,
  LinkDiv,
  LoginLogo,
  SVGContainer,
} from './LogIn.js'
import { MainContainer } from './SignUp.js'
import { ModalForm } from '../components/common/GlobalStyles'
import SignUpInput from '../components/layout/SignUpInput.jsx'
import TwitterBtn from '../components/common/global/TwitterBtn.jsx'

const LogIn = () => {
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const firebase = useFirebase()

  const submitHandler = (data) => {
    dispatch(logIn(data, { firebase }))
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <SVGContainer>
          <LoginLogo />
        </SVGContainer>
        <Header>Log in to Twitter</Header>
        <ModalForm>
          <SignUpInput type='Email' ref={register} />
          <SignUpInput type='Password' ref={register} />
        </ModalForm>
        <BtnContainer>
          <TwitterBtn text='Log in' type='submit' />
        </BtnContainer>

        <LinkContainer>
          <LinkDiv>
            <BlueLink to='/'>Forgot Password?</BlueLink>
            <BreakPoint>&#8901;</BreakPoint>
            <BlueLink to='/' onClick={() => dispatch(openModal('signup'))}>
              Sign up for Twitter
            </BlueLink>
          </LinkDiv>
        </LinkContainer>
      </FormContainer>
    </MainContainer>
  )
}

export default LogIn
