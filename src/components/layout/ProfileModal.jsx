import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ProfileImage } from '../common/GlobalStyles'
import {
  ColorDiv,
  EdgesDiv,
  FlexDiv,
  ModalContent,
  ModalPositioner,
  NestedImgDiv,
  ProfilePicContainer,
  TopDiv,
} from './ProfileModal'

const ProfileModal = () => {
  return (
    <ModalPositioner>
      <FlexDiv>
        <div>
          <div>
            <ColorDiv>
              <FontAwesomeIcon
                icon={faCaretDown}
                size='lg'
                style={{
                  color: 'rgb(255,255,255)',
                  filter: 'drop-shadow(rgb(196, 207, 214) 1px -1px 1px)',
                  position: 'absolute',
                  left: '17.5px',
                  bottom: '-13px',
                  width: '24px',
                }}
              />
              <ModalContent>
                <EdgesDiv>
                  <TopDiv>
                    <ProfilePicContainer>
                      <NestedImgDiv>
                        <ProfileImage imageURL='https://firebasestorage.googleapis.com/v0/b/twitter-clone-c0b2e.appspot.com/o/profile%20pics%2Fdefault_profile_400x400.png?alt=media&token=2a456bdd-ea91-45f2-86a1-3099daf63292' />
                      </NestedImgDiv>
                    </ProfilePicContainer>
                  </TopDiv>
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
