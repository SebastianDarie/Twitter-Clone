import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { actions as toastrActions } from 'react-redux-toastr'
import { closeModal, openModal } from '../../actions/modalActions'
import {
  addImage,
  removeImage,
  removeAllImages,
  setPreviewImage,
} from '../../actions/imageActions'
import { createTweet } from '../../actions/tweetActions'
import { BlackOut } from '../common/GlobalStyles'
import {
  ButtonDiv,
  Header,
  LogoContainer,
  LogoDiv,
  LogoHeader,
  LogoLink,
  NavLinks,
  NavLinksContainer,
  NestedDiv,
  SideContainer,
  SideContent,
  SideLink,
  SideLogo,
} from './SideNav'
import CreateModal from '../common/tweets/CreateModal.jsx'
import SideLinks from '../common/SideLinks.jsx'
import TwitterBtn from '../common/global/TwitterBtn.jsx'
import FooterProfile from '../containers/FooterProfile.jsx'

const SideNav = () => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  const modalState = useSelector((state) => state.modal)
  const images = useSelector((state) => state.image.imgs)
  const previews = useSelector((state) => state.image.previewImgs)
  const type = useSelector((state) => state.image.type)

  const createModal = useRef()
  const button = useRef()
  const textarea = useRef()

  const outsideClickHandler = (e) => {
    if (modalState.open) {
      if (e.target !== createModal.current) {
        dispatch(removeAllImages())
        dispatch(closeModal())
      }
    }
  }

  return (
    <>
      {modalState.open.el === 'create' ? (
        <BlackOut modalState={modalState} onClick={outsideClickHandler} />
      ) : null}
      <CreateModal
        dispatch={dispatch}
        firebase={firebase}
        button={button}
        textarea={textarea}
        createModal={createModal}
        modalState={modalState}
        closeModal={closeModal}
        createTweet={createTweet}
        profile={profile}
        userID={auth.uid}
        type={type}
        images={images}
        previews={previews}
        addImage={addImage}
        removeImage={removeImage}
        removeAllImages={removeAllImages}
        setPreviewImage={setPreviewImage}
        toastrActions={toastrActions}
      />
      <Header>
        <SideContainer>
          <SideContent>
            <NestedDiv>
              <SideLink>
                <LogoContainer>
                  <LogoHeader>
                    <LogoLink>
                      <LogoDiv>
                        <SideLogo />
                      </LogoDiv>
                    </LogoLink>
                  </LogoHeader>
                </LogoContainer>
                <NavLinksContainer>
                  <NavLinks>
                    <SideLinks />
                  </NavLinks>
                </NavLinksContainer>
                <ButtonDiv>
                  <TwitterBtn
                    text='Tweet'
                    type='button'
                    clickHandler={() => {
                      dispatch(removeAllImages())
                      dispatch(openModal('create'))
                    }}
                  />
                </ButtonDiv>
              </SideLink>
              <FooterProfile />
            </NestedDiv>
          </SideContent>
        </SideContainer>
      </Header>
    </>
  )
}

export default SideNav
