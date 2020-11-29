import React from 'react'
import {
  ModalInput,
  ModalInputContainer,
  ModalInputDiv,
  ModalInputPlaceholder,
  ModalLabel,
  EmailInput,
  PasswordInput,
} from './SignUpInput'

const SignUpInput = ({ type }) => {
  return (
    <ModalInputContainer>
      <ModalLabel>
        <div>
          <ModalInputPlaceholder>
            <span>{type}</span>
          </ModalInputPlaceholder>
          <div>
            <ModalInputDiv>
              {type === 'Name' ? (
                <ModalInput />
              ) : type === 'Email' ? (
                <EmailInput />
              ) : (
                <PasswordInput />
              )}
            </ModalInputDiv>
          </div>
        </div>
      </ModalLabel>
    </ModalInputContainer>
  )
}

export default SignUpInput
