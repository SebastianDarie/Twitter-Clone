import React, { useRef, useState } from 'react'
import composeRefs from '@seznam/compose-react-refs'
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
  UsernameInput,
} from './SignUpInput'

const SignUpInput = React.forwardRef(({ type }, ref) => {
  const [changeIcon, setChangeIcon] = useState(false)

  const password = useRef()

  const showPassword = () => {
    if (password.current.type === 'password') {
      password.current.type = 'text'
      setChangeIcon(true)
    } else {
      password.current.type = 'password'
      setChangeIcon(false)
    }
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
              {type === 'Username' ? (
                <UsernameInput ref={ref} />
              ) : type === 'Name' ? (
                <ModalInput ref={ref} />
              ) : type === 'Email' ? (
                <EmailInput ref={ref} />
              ) : (
                <>
                  <PasswordInput ref={composeRefs(ref, password)} />
                  <FontAwesomeIcon
                    icon={!changeIcon ? faEye : faEyeSlash}
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
