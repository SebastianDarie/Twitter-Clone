import React from 'react'
import {
  ModalContainer,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalLogo,
  ModalPadding,
  ModalTitle,
  WhiteSpace,
} from './SignUpModal'
import SignUpInput from './SignUpInput.jsx'

const SignUpModal = () => {
  return (
    <ModalContainer>
      <ModalHeader>
        <ModalPadding>
          <WhiteSpace></WhiteSpace>
          <ModalLogo />
          <WhiteSpace style={{ marginLeft: 20 }}></WhiteSpace>
        </ModalPadding>
      </ModalHeader>
      <ModalContent>
        <ModalForm>
          <ModalTitle>Create your account</ModalTitle>
          <SignUpInput type='Name' />
          <SignUpInput type='Email' />
          <SignUpInput type='Password' />
        </ModalForm>
      </ModalContent>
    </ModalContainer>
  )
}

export default SignUpModal
