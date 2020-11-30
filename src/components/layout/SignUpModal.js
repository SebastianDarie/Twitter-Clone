import styled from 'styled-components'
import { SmallLogo } from '../../pages/SignUp'

export const ModalContainer = styled.form`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 8%;
  left: 31%;
  border-radius: 16px;
  height: 650px;
  min-height: 400px;
  max-height: 90vh;
  min-width: 600px;
  max-width: 80vw;
  z-index: 2;
`

export const ModalHeader = styled.div`
  position: absolute;
  top: 3%;
  left: 0;
  margin-bottom: 10px;
  height: 53px;
  width: 100%;
`

export const ModalPadding = styled.div`
  display: flex;
  flex-direction: row;
  height: 53px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`

export const WhiteSpace = styled.div`
  flex-basis: 50%;
  min-height: 30px;
  min-width: 60px;
`

export const ModalLogo = styled(SmallLogo)`
  height: 1.75rem;
`

export const ModalContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 200px;
  height: 400px;
  max-height: 400px;
  max-width: 600px;
  width: 100%;
  overflow: auto;
`

export const ModalForm = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  width: 100%;
`

export const ModalTitle = styled.div`
  color: rgb(15, 20, 25);
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 15px;
`
