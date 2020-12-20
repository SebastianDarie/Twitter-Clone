import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { logOut } from '../../actions/authActions.js'
import { openModal, closeModal } from '../../actions/modalActions'
import { HoverDiv } from '../common/GlobalStyles.js'
import {
  DotContainer,
  Image,
  InvisibleDiv,
  ProfileHeaderContainer,
  ProfileHigh,
  ProfileLogoContainer,
  ProfileLow,
  SideProfile,
} from './FooterProfile'
import ProfileModal from '../layout/ProfileModal.jsx'

const FooterProfile = () => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const profile = useSelector((state) => state.firebase.profile)
  const modalState = useSelector((state) => state.modal)
  const logoutModal = useRef()

  // useEffect(() => {
  //   document.addEventListener('mousedown', outsideClick)
  //   return () => {
  //     document.removeEventListener('mousedown', outsideClick)
  //   }
  // }, [logoutModal])

  const logoutHandler = () => {
    dispatch(logOut({ firebase }))
  }

  const modalHandler = () => {
    !modalState.open ? dispatch(openModal('logout')) : dispatch(closeModal())
  }

  // const outsideClick = (e) => {
  //   console.log('function running', modalState.open)
  //   if (modalState.open) {
  //     if (logoutModal.current && !logoutModal.current.contains(e.target)) {
  //       dispatch(closeModal())
  //       console.log('open', modalState.open)
  //     }
  //   }
  // }

  return (
    <>
      <ProfileModal
        image={profile.photoURL}
        name={profile.name}
        username={profile.username}
        logoutHandler={logoutHandler}
        modalState={modalState}
        reference={logoutModal}
      />
      <SideProfile onClick={modalHandler}>
        <div>
          <HoverDiv style={{ maxWidth: '100%' }}>
            <div>
              <ProfileLogoContainer>
                <div>
                  <Image src={profile.photoURL} />
                </div>
                <InvisibleDiv />
              </ProfileLogoContainer>
            </div>
            <div style={{ flexShrink: 1, marginRight: 10 }}>
              <ProfileHeaderContainer>
                <ProfileHigh>{profile.name}</ProfileHigh>
                <ProfileLow>&#64;{profile.username}</ProfileLow>
              </ProfileHeaderContainer>
            </div>
            <DotContainer>
              <FontAwesomeIcon icon={faEllipsisH} color='rgb(15,20,25)' />
            </DotContainer>
          </HoverDiv>
        </div>
      </SideProfile>
    </>
  )
}

export default FooterProfile
