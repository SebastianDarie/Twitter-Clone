import React from 'react'
import SideLinks from '../common/SideLinks.jsx'
import {
  ButtonDiv,
  Header,
  LogoContainer,
  LogoDiv,
  LogoHeader,
  LogoLink,
  NavLinks,
  NavLinksContainer,
  NestedDiv,
  SideContainer,
  SideContent,
  SideLink,
  SideLogo,
} from './SideNav'
import TwitterBtn from '../common/global/TwitterBtn.jsx'
import FooterProfile from '../containers/FooterProfile.jsx'

const SideNav = () => {
  return (
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
            <FooterProfile />
          </NestedDiv>
        </SideContent>
      </SideContainer>
    </Header>
  )
}

export default SideNav
