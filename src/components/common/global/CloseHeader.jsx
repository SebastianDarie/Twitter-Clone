import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { BackgroundHover } from '../GlobalStyles'
import {
  BigFlexer,
  HeaderPadding,
  LeftContainer,
  RightContainer,
} from '../tweets/ReplyModal'

const CloseHeader = ({ closeHandler }) => {
  return (
    <div style={{ height: '53px' }}>
      <div>
        <HeaderPadding>
          <BigFlexer>
            <LeftContainer onClick={closeHandler}>
              <BackgroundHover>
                <FontAwesomeIcon color='rgba(29, 161, 242, 1)' icon={faTimes} />
              </BackgroundHover>
            </LeftContainer>
            <RightContainer>
              <div></div>
            </RightContainer>
          </BigFlexer>
        </HeaderPadding>
      </div>
    </div>
  )
}

export default CloseHeader
