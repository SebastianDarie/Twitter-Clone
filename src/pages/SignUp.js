import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/img/twitter.svg'

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  font-weight: 700;
`

export const BlackOut = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`

export const LeftScreen = styled.div`
  background-color: rgb(122, 204, 254);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

export const TwitterLogo = styled(Logo)`
  position: absolute;
  top: -30vh;
  right: -50vh;
  height: 160vh;
  color: rgba(29, 161, 242, 1);
  fill: currentColor;
  z-index: 0;
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  color: rgb(255, 255, 255);
  font-size: 23px;

  div {
    margin-left: 15px;
    line-height: 30px;
    font-size: 19px;
  }
`

export const RightScreen = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ContentContainer = styled.div`
  max-width: 380px;
  align-self: center;
  padding-top: 15px;
  padding-bottom: 15px;
  z-index: 1;
`

export const HeaderText = styled.div`
  color: rgb(15, 20, 25);
  font-size: 30px;
  line-height: 1.3125;
  margin-top: 20px;
`

export const SmallText = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  margin-top: 60px;
  margin-bottom: 15px;
`
