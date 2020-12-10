import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/img/twitter.svg'
import { Button } from './GlobalStyles'

export const HeightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100vh;
  max-width: 80vw;
  width: 320px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

export const ModalBlackout = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  z-index: 4;
`

export const ModalContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-height: 100%;
  max-width: 600px;
  overflow-y: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  width: 100%;
  z-index: 5;
`

export const ModalLogo = styled(Logo)`
  color: rgba(29, 161, 242, 1);
  fill: currentColor;
  height: 39px;
  margin-bottom: 15px;
`

export const ModalHeader = styled.div`
  color: rgb(15, 20, 25);
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3125;
  margin-bottom: 10px;
`

export const ModalText = styled.div`
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
  margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const CancelContainer = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(15, 20, 25);
  text-align: center;
  max-width: 100%;
  width: 100%;
`

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  text-align: center;
  max-width: 100%;
  width: 100%;
`

export const CancelBtn = styled(Button)`
  background-color: rgb(235, 238, 240);
  margin-right: 15px;
  margin-bottom: 0px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(212, 214, 216);
  }
`

export const LogoutBtn = styled(Button)`
  background-color: rgb(29, 161, 242);
  margin-bottom: 0px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(26, 145, 218);
  }
`
