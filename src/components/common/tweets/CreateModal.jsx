import { useEffect } from 'react';
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

  const closeHandler = async () => {
    button.current.style.opacity = 0.5
    button.current.style.pointerEvents = 'none'
    textarea.current.value = ''

    const { removeAllImages } = await import('../../../actions/imageActions')
    const { closeModal } = await import('../../../actions/modalActions')
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
