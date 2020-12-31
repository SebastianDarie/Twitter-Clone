import React, { useEffect } from 'react'
import { FlavorDiv, PositionModalDiv } from '../GlobalStyles'
import TweetForm from './TweetForm.jsx'
import CloseHeader from '../global/CloseHeader'

const CreateModal = ({
  dispatch,
  firebase,
  button,
  textarea,
  createModal,
  modalState,
  closeModal,
  createTweet,
  removeImage,
  removeAllImages,
  setPreviewImage,
  images,
  previews,
  type,
  profile,
  userID,
  toastrActions,
}) => {
  useEffect(() => {
    if (!modalState.open) {
      button.current.style.opacity = 0.5
      button.current.style.pointerEvents = 'none'
      textarea.current.value = ''
    }
  }, [button, modalState.open, textarea])

  const closeHandler = () => {
    button.current.style.opacity = 0.5
    button.current.style.pointerEvents = 'none'
    textarea.current.value = ''

    dispatch(removeAllImages())
    dispatch(closeModal())
  }
  return (
    <PositionModalDiv ref={createModal} modalState={modalState} id='create'>
      <FlavorDiv>
        <CloseHeader closeHandler={closeHandler} />
        <TweetForm
          dispatch={dispatch}
          firebase={firebase}
          button={button}
          textarea={textarea}
          createModal={createModal}
          createTweet={createTweet}
          removeImage={removeImage}
          setPreviewImage={setPreviewImage}
          images={images}
          previews={previews}
          type={type}
          profile={profile}
          userID={userID}
          toastrActions={toastrActions}
        />
      </FlavorDiv>
    </PositionModalDiv>
  )
}

export default CreateModal
