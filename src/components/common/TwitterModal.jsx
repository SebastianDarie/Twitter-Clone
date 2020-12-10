import React from 'react'
import {
  ButtonsContainer,
  CancelBtn,
  CancelContainer,
  HeightDiv,
  LogoutBtn,
  LogoutContainer,
  ModalBlackout,
  ModalContainer,
  ModalHeader,
  ModalLogo,
  ModalText,
} from './TwitterModal'

const TwitterModal = ({ title, text }) => {
  return (
    <>
      <ModalBlackout />
      <HeightDiv>
        <ModalContainer>
          <ModalLogo />
          <ModalHeader>{title}</ModalHeader>
          <ModalText>{text}</ModalText>
          <ButtonsContainer>
            <CancelContainer>
              <CancelBtn>Cancel</CancelBtn>
            </CancelContainer>
            <LogoutContainer>
              <LogoutBtn>Log out</LogoutBtn>
            </LogoutContainer>
          </ButtonsContainer>
        </ModalContainer>
      </HeightDiv>
    </>
  )
}

export default TwitterModal
