import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {
  ModalInput,
  ModalInputContainer,
  ModalInputDiv,
  ModalInputPlaceholder,
  ModalLabel,
  EmailInput,
  PasswordInput,
} from './SignUpInput'

const SignUpInput = React.forwardRef(({ type }, ref) => {
  const password = useRef()

  const showPassword = () => {
    console.log(password)
    // if (password.current.type === 'password') {
    //   password.current.type = 'text'
    // } else {
    //   password.current.type = 'password'
    // }
  }

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
                <ModalInput ref={ref} />
              ) : type === 'Email' ? (
                <EmailInput ref={ref} />
              ) : (
                <>
                  <PasswordInput passwordRef={password} ref={ref} />
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{
                      marginBottom: 15,
                      marginRight: 10,
                      cursor: 'pointer',
                    }}
                    onClick={showPassword}
                  />
                </>
              )}
            </ModalInputDiv>
          </div>
        </div>
      </ModalLabel>
    </ModalInputContainer>
  )
})

export default SignUpInput
