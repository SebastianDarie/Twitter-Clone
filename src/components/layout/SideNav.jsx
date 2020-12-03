import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import SideLinks from '../common/SideLinks.jsx'
import { HoverDiv } from '../common/GlobalStyles.js'
import {
  ButtonDiv,
  Container,
  DotContainer,
  Header,
  Image,
  InvisibleDiv,
  LogoContainer,
  LogoDiv,
  LogoHeader,
  LogoLink,
  NavLinks,
  NavLinksContainer,
  NestedDiv,
  ProfileHeaderContainer,
  ProfileHigh,
  ProfileLogoContainer,
  ProfileLow,
  SideContainer,
  SideContent,
  SideLink,
  SideLogo,
  SideProfile,
} from './SideNav'
import TwitterBtn from '../common/TwitterBtn.jsx'

const SideNav = () => {
  const auth = useSelector((state) => state.firebase.auth)

  return (
    <Container>
      <Header>
        <SideContainer>
          <SideContent>
            <NestedDiv>
              <SideLink>
                <LogoContainer>
                  <LogoHeader>
                    <LogoLink>
                      <LogoDiv>
                        <SideLogo />
                      </LogoDiv>
                    </LogoLink>
                  </LogoHeader>
                </LogoContainer>
                <NavLinksContainer>
                  <NavLinks>
                    <SideLinks />
                  </NavLinks>
                </NavLinksContainer>
                <ButtonDiv>
                  <TwitterBtn text='Tweet' type='button' />
                </ButtonDiv>
              </SideLink>
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
                      <FontAwesomeIcon
                        icon={faEllipsisH}
                        color='rgb(15,20,25)'
                      />
                    </DotContainer>
                  </HoverDiv>
                </div>
              </SideProfile>
            </NestedDiv>
          </SideContent>
        </SideContainer>
      </Header>
    </Container>
  )
}

export default SideNav
