import React, { useRef, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faSearch,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { BlackOut, SmallLogo } from '../components/common/GlobalStyles'
import {
  MainContainer,
  LeftScreen,
  TwitterLogo,
  IconContainer,
  RightScreen,
  ContentContainer,
  HeaderText,
  SmallText,
} from './SignUp'
import AuthBtn from '../components/common/global/AuthBtn.jsx'
import TwitterBtn from '../components/common/global/TwitterBtn.jsx'

const SignUpModal = lazy(() =>
  import('../components/containers/SignUpModal.jsx')
)

const SignUp = () => {
  const dispatch = useDispatch()
  const modalState = useSelector((state) => state.modal)
  const modal = useRef()
  const dimmedScreen = useRef()

  const outsideClickHandler = async (e) => {
    if (modalState.open) {
      if (e.target !== modal.current && e.target === dimmedScreen.current) {
        const modal = await import('../actions/modalActions')
        dispatch(modal.closeModal(modal.current))
      }
    }
  }

  const signupClickHandler = async () => {
    const modal = await import('../actions/modalActions')
    dispatch(modal.openModal(modal.current))
  }

  return (
    <MainContainer onClick={outsideClickHandler}>
      <Suspense fallback={null}>
        <BlackOut ref={dimmedScreen} modalState={modalState} />
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
      </Suspense>
    </MainContainer>
  )
}

export default SignUp
