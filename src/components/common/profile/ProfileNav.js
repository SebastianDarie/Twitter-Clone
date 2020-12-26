import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgb(235, 238, 240);
  height: 53px;
`

export const ProfileNavLink = styled(Link)`
  display: flex;
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) =>
    props.selected ? '2px solid rgb(29,161,242)' : ''};
  color: ${(props) =>
    props.selected ? 'rgb(29,161,242)' : 'rgb(91, 112, 131)'};
  font-size: 15px;
  font-weight: 700;
  height: 100%;
  text-decoration: none;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    color: rgb(29, 161, 242);
  }
`
