import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { BackgroundHover } from '../GlobalStyles'
import {
  BigFlexer,
  DoublePaddingDiv,
  FlavorDiv,
  HeaderPadding,
  LeftContainer,
  PositionModalDiv,
  ReplySectionContainer,
  RightContainer,
} from './ReplyModal'

const ReplyModal = () => {
  return (
    <PositionModalDiv>
      <FlavorDiv>
        <div></div>
        <div style={{ height: '53px' }}>
          <div>
            <HeaderPadding>
              <BigFlexer>
                <LeftContainer>
                  <BackgroundHover>
                    <FontAwesomeIcon
                      color='rgba(29, 161, 242, 1)'
                      icon={faTimes}
                    />
                  </BackgroundHover>
                </LeftContainer>
                <RightContainer>
                  <div></div>
                </RightContainer>
              </BigFlexer>
            </HeaderPadding>
          </div>
        </div>
        <ReplySectionContainer>
          <div style={{ paddingBottom: '5px' }}>
            <DoublePaddingDiv>
              <div></div>
              <div></div>
            </DoublePaddingDiv>
          </div>
        </ReplySectionContainer>
      </FlavorDiv>
    </PositionModalDiv>
  )
}

export default ReplyModal
