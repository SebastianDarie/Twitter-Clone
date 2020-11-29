import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faSearch,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
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

const SignUp = () => {
  return (
    <MainContainer>
      <BlackOut></BlackOut>
      <SignUpModal />
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
          <AuthBtn auth='signup' text='Sign up' />
          <AuthBtn auth='login' text='Log in' />
        </ContentContainer>
      </RightScreen>
    </MainContainer>
  )
}

export default SignUp
