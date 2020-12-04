import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
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

const FooterProfile = () => {
  const auth = useSelector((state) => state.firebase.auth)
  return (
    <SideProfile>
      <div>
        <HoverDiv style={{ maxWidth: '100%' }}>
          <div>
            <ProfileLogoContainer>
              <div>
                <Image src={auth.photoURL} />
              </div>
              <InvisibleDiv />
            </ProfileLogoContainer>
          </div>
          <div style={{ flexShrink: 1, marginRight: 10 }}>
            <ProfileHeaderContainer>
              <ProfileHigh>{auth.displayName}</ProfileHigh>
              <ProfileLow>&#64;{auth.displayName}</ProfileLow>
            </ProfileHeaderContainer>
          </div>
          <DotContainer>
            <FontAwesomeIcon icon={faEllipsisH} color='rgb(15,20,25)' />
          </DotContainer>
        </HoverDiv>
      </div>
    </SideProfile>
  )
}

export default FooterProfile
