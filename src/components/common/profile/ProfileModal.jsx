import React from 'react'
import { useForm } from 'react-hook-form'
import { ModalForm } from '../GlobalStyles'
import {
  BioLabel,
  BioPadding,
  FlexGrowDiv,
  SmallText,
  TextAreaPadding,
} from './ProfileModal'

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalLogo,
  ModalPadding,
  ModalTitle,
  WhiteSpace,
} from '../../containers/SignUpModal'
import SignUpInput from '../../layout/SignUpInput.jsx'
import TwitterBtn from '../global/TwitterBtn.jsx'

const ProfileModal = ({ modalState, profileModal }) => {
  const { register, handleSubmit, errors } = useForm()

  const updateProfile = (data) => {
    console.log(data)
  }
  return (
    <ModalContainer
      ref={profileModal}
      modalState={modalState}
      onSubmit={handleSubmit(updateProfile)}
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
          <ModalTitle>Update your profile</ModalTitle>
          <SignUpInput
            type='Name'
            ref={register({
              required: (
                <span style={{ color: 'red' }}>
                  Make sure you spell it correctly this time!
                </span>
              ),
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

          <BioPadding>
            <BioLabel>
              <FlexGrowDiv>
                <div>
                  <SmallText>Your bio</SmallText>
                </div>
                <TextAreaPadding></TextAreaPadding>
              </FlexGrowDiv>
            </BioLabel>
          </BioPadding>
        </ModalForm>
      </ModalContent>

      <div>
        <TwitterBtn text='Update' type='submit' />
      </div>
    </ModalContainer>
  )
}

export default ProfileModal
