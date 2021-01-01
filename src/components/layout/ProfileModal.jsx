import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import { ProfileImage } from '../common/GlobalStyles'
import {
  ColorDiv,
  EdgesDiv,
  FlexDiv,
  FlexRowDiv,
  LogoutBtn,
  LogoutText,
  ModalContent,
  ModalPositioner,
  NestedImgDiv,
  ProfileInfo,
  ProfilePicContainer,
  TopDiv,
} from './ProfileModal'
import {
  ProfileHeaderContainer,
  ProfileHigh,
  ProfileLow,
} from '../containers/FooterProfile'

const ProfileModal = ({
  image,
  name,
  username,
  logoutHandler,
  modalState,
  reference,
}) => {
  return (
    <ModalPositioner modalState={modalState} ref={reference}>
      <FlexDiv>
        <div>
          <div>
            <ColorDiv>
              <FontAwesomeIcon
                icon={faCaretUp}
                size='lg'
                style={{
                  color: 'rgb(255,255,255)',
                  filter: 'drop-shadow(rgb(196, 207, 214)) 1px -1px 1px',
                  transform: 'rotate(180deg)',
                  position: 'absolute',
                  left: '17.5px',
                  bottom: '-14px',
                  width: '24px',
                }}
              />
              <ModalContent>
                <EdgesDiv>
                  <TopDiv>
                    <ProfilePicContainer>
                      <NestedImgDiv>
                        <ProfileImage imageURL={image} />
                      </NestedImgDiv>
                    </ProfilePicContainer>
                    <ProfileInfo>
                      <FlexRowDiv>
                        <ProfileHeaderContainer>
                          <ProfileHigh>{name}</ProfileHigh>
                          <ProfileLow>&#64;{username}</ProfileLow>
                        </ProfileHeaderContainer>
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: 'rgba(29,161,242,1)',
                            height: '1.25em',
                            marginLeft: '10px',
                            maxWidth: '100%',
                          }}
                        />
                      </FlexRowDiv>
                    </ProfileInfo>
                  </TopDiv>
                  <LogoutBtn onClick={logoutHandler}>
                    <LogoutText>Log out @{username}</LogoutText>
                  </LogoutBtn>
                </EdgesDiv>
              </ModalContent>
            </ColorDiv>
          </div>
        </div>
      </FlexDiv>
    </ModalPositioner>
  )
}

export default ProfileModal
