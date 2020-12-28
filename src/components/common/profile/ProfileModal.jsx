import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { profileClose } from '../../../actions/modalActions'
import { updateProfile } from '../../../actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { ModalForm } from '../GlobalStyles'
import {
  AddPhotoContainer,
  BackgroundImage,
  BioLabel,
  BioPadding,
  BioTextarea,
  FlexGrowDiv,
  HeaderInput,
  HeaderInputContainer,
  PicBlackout,
  ProfileHeaderContainer,
  ProfileInput,
  ProfileInputContainer,
  ProfilePicContainer,
  ProfilePicsPadding,
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
import resizeImage from '../../../utils/resizeImage'
import { clearInput } from '../../../utils/addImage'

const ProfileModal = ({ currProfile, firebase, modalState, profileModal }) => {
  const dispatch = useDispatch()
  const [previewHeader, setPreviewHeader] = useState(null)
  const [previewProfile, setPreviewProfile] = useState(null)
  const { register, handleSubmit, errors } = useForm()
  const textarea = useRef()

  const setImage = async (e, type) => {
    if (e.target.files[0]) {
      const file = e.target.files[0]
      const blob =
        type === 'profile'
          ? await resizeImage(file, 400, 400)
          : await resizeImage(file, 1500, 500)

      const image = new File([blob], file?.name, {
        lastModified: new Date().getTime(),
        type: blob.type,
      })
      type === 'profile'
        ? setPreviewProfile(URL.createObjectURL(image))
        : setPreviewHeader(URL.createObjectURL(image))
    }
  }

  const submitProfile = async (data) => {
    dispatch(
      updateProfile(data, previewHeader, previewProfile, currProfile.id, {
        firebase,
      })
    )
    dispatch(profileClose())
  }

  return (
    <ModalContainer
      ref={profileModal}
      modalState={modalState}
      onSubmit={handleSubmit(submitProfile)}
    >
      <ModalHeader>
        <ModalPadding>
          <WhiteSpace></WhiteSpace>
          <ModalLogo />
          <WhiteSpace style={{ marginLeft: 20 }}></WhiteSpace>
        </ModalPadding>
      </ModalHeader>
      <ModalContent style={{ marginBottom: 120 }}>
        <ModalForm>
          <ModalTitle>Update your profile</ModalTitle>

          <ProfilePicsPadding>
            <ProfileHeaderContainer>
              <BackgroundImage />
              {previewHeader ? (
                <img
                  src={previewHeader}
                  alt='header'
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                  }}
                />
              ) : null}

              <HeaderInputContainer>
                <AddPhotoContainer>
                  <label htmlFor='header' style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faCamera} color='rgb(255,255,255)' />
                  </label>
                </AddPhotoContainer>
                <HeaderInput
                  ref={register}
                  onChange={(e) => setImage(e, 'header')}
                  onClick={clearInput}
                />
              </HeaderInputContainer>
            </ProfileHeaderContainer>

            <ProfilePicContainer>
              <PicBlackout />
              <img
                src={previewProfile ? previewProfile : currProfile?.photoURL}
                alt='profile'
                style={{
                  borderRadius: '999px',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
              <ProfileInputContainer>
                <AddPhotoContainer>
                  <label htmlFor='profile' style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faCamera} color='rgb(255,255,255)' />
                  </label>
                </AddPhotoContainer>
                <ProfileInput
                  ref={register}
                  onChange={(e) => setImage(e, 'profile')}
                  onClick={clearInput}
                />
              </ProfileInputContainer>
            </ProfilePicContainer>
          </ProfilePicsPadding>
          <SignUpInput
            profile='true'
            type='Name'
            ref={register({
              maxLength: {
                value: 25,
                message: (
                  <span style={{ color: 'red', paddingLeft: '15px' }}>
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
                <TextAreaPadding>
                  <BioTextarea
                    maxLength='160'
                    name='bio'
                    placeholder={currProfile?.bio}
                    ref={(ref) => {
                      textarea.current = ref
                      register(ref)
                    }}
                  />
                  {errors.bio && errors.bio.message}
                </TextAreaPadding>
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
