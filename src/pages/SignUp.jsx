import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faSearch,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { closeModal, openModal } from '../actions/modalActions'
import {
  BlackOut,
  MainContainer,
  LeftScreen,
  TwitterLogo,
  IconContainer,
  RightScreen,
  ContentContainer,
  HeaderText,
  SmallLogo,
  SmallText,
} from './SignUp'
import AuthBtn from '../components/common/AuthBtn.jsx'
import SignUpModal from '../components/layout/SignUpModal.jsx'
import TwitterBtn from '../components/common/TwitterBtn.jsx'

const SignUp = () => {
  const dispatch = useDispatch()
  const modalState = useSelector((state) => state.modal)
  const modal = useRef()
  const dimmedScreen = useRef()

  const outsideClickHandler = (e) => {
    if (modalState.open) {
      if (e.target !== modal.current && e.target === dimmedScreen.current) {
        dispatch(closeModal(modal.current.id))
      }
    }
  }

  const signupClickHandler = () => {
    dispatch(openModal(modal.current.id))
  }

  return (
    <MainContainer onClick={outsideClickHandler}>
      <BlackOut
        ref={dimmedScreen}
        style={{ display: modalState.open ? '' : 'none' }}
      />
      <SignUpModal reference={modal} modalState={modalState} />
      <LeftScreen>
        <TwitterLogo />
        <ContentContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faSearch} />
            <div>Follow your interests.</div>
          </IconContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faUserFriends} />
            <div>Hear what people are talking about.</div>
          </IconContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faComment} />
            <div>Join the conversation.</div>
          </IconContainer>
        </ContentContainer>
      </LeftScreen>

      <RightScreen>
        <ContentContainer style={{ marginRight: 20, marginBottom: 20 }}>
          <SmallLogo />
          <HeaderText>See what's happening in the world right now</HeaderText>
          <SmallText>Join Twitter today.</SmallText>
          <TwitterBtn text='Sign up' clickHandler={signupClickHandler} />
          <AuthBtn auth='login' text='Log in' />
        </ContentContainer>
      </RightScreen>
    </MainContainer>
  )
}

export default SignUp
