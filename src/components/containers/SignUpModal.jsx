import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { signUp } from '../../actions/authActions'
import { ModalForm } from '../common/GlobalStyles'
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalLogo,
  ModalPadding,
  ModalTitle,
  WhiteSpace,
} from './SignUpModal'
import SignUpInput from '../layout/SignUpInput.jsx'
import TwitterBtn from '../common/global/TwitterBtn.jsx'

const SignUpModal = ({ reference, modalState }) => {
  const dispatch = useDispatch()

  const { register, handleSubmit, errors } = useForm()

  const firebase = useFirebase()

  const createUser = (data) => {
    dispatch(signUp(data, { firebase }))
  }

  return (
    <ModalContainer
      ref={reference}
      modalState={modalState}
      onSubmit={handleSubmit(createUser)}
    >
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
          <SignUpInput
            type='Username'
            ref={register({
              required: (
                <span style={{ color: 'red' }}>
                  Bro I ain't got time to frick with u!
                </span>
              ),
              minLength: {
                value: 3,
                message: (
                  <span style={{ color: 'red' }}>
                    Username must be minimum 3 characters!
                  </span>
                ),
              },
              maxLength: {
                value: 15,
                message: (
                  <span style={{ color: 'red' }}>
                    Username must be maximum 15 characters!
                  </span>
                ),
              },
            })}
          />
          {errors.username && errors.username.message}
          <SignUpInput
            type='Name'
            ref={register({
              required: (
                <span style={{ color: 'red' }}>
                  Make sure it's your real name!
                </span>
              ),
              minLength: {
                value: 3,
                message: (
                  <span style={{ color: 'red' }}>
                    Name must be minimum 3 characters!
                  </span>
                ),
              },
              maxLength: {
                value: 25,
                message: (
                  <span style={{ color: 'red' }}>
                    Name must be maximum 25 characters!
                  </span>
                ),
              },
            })}
          />
          {errors.name && errors.name.message}
          <SignUpInput
            type='Email'
            ref={register({
              required: (
                <span style={{ color: 'red' }}>Email cannot be empty!</span>
              ),
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: (
                  <span style={{ color: 'red' }}>
                    Email must be a valid email address!
                  </span>
                ),
              },
            })}
          />
          {errors.email && errors.email.message}
          <SignUpInput
            type='Password'
            ref={register({
              required: (
                <span style={{ color: 'red' }}>Password cannot be empty!</span>
              ),
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                message: (
                  <span style={{ color: 'red' }}>
                    Password must contain at least 1 uppercase character and
                    number!
                  </span>
                ),
              },
              minLength: {
                value: 8,
                message: (
                  <span style={{ color: 'red' }}>
                    Password must be minimum 8 characters!
                  </span>
                ),
              },
              maxLength: {
                value: 20,
                message: (
                  <span style={{ color: 'red' }}>
                    Password cannot exceed 25 characters!
                  </span>
                ),
              },
            })}
          />
          {errors.password && errors.password.message}
        </ModalForm>
      </ModalContent>

      <div>
        <TwitterBtn text='Create New' type='submit' />
      </div>
    </ModalContainer>
  )
}

export default SignUpModal
