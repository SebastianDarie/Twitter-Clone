import styled from 'styled-components'
import { BtnLink } from './GlobalStyles'

export const LoginBtn = styled(BtnLink)`
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(29, 161, 242);
  color: rgb(29, 161, 242);
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`
