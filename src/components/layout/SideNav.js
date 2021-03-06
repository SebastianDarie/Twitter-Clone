import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SmallLogo } from '../common/GlobalStyles'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-end;
  z-index: 1;
`

export const SideContainer = styled.div`
  width: 275px;
`

export const SideContent = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
`

export const NestedDiv = styled.div`
  justify-content: space-between;
  overflow-y: auto;
  height: 100%;
  width: 275px;
  padding-left: 10px;
  padding-right: 10px;
`

export const SideLink = styled.div`
  align-items: flex-start;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
`

export const LogoHeader = styled.h1`
  display: flex;
  flex-grow: 1;
  align-items: center;
  align-self: stretch;
  min-width: 30px;
  cursor: pointer;
`

export const LogoLink = styled(Link).attrs({
  to: '/',
})`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 999px;
  min-height: 49px;
  min-width: 49px;
  transition-property: background-color, box-shadow;
  transition: 0.2s;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SideLogo = styled(SmallLogo)`
  height: 2rem;
  width: 1.5em;
`

export const NavLinksContainer = styled.div`
  margin-top: 2px;
  margin-bottom: 5px;
  width: 100%;
`

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ButtonDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 90%;
`
