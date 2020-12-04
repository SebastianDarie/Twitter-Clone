import React from 'react'
import {
  ElementContainer,
  HeightDiv,
  PaddingDiv,
  RightScreenContainer,
} from './RightScreen'

const RightScreen = () => {
  return (
    <RightScreenContainer>
      <HeightDiv>
        <ElementContainer>
          <div>
            <div>
              <PaddingDiv></PaddingDiv>
            </div>
          </div>
        </ElementContainer>
      </HeightDiv>
    </RightScreenContainer>
  )
}

export default RightScreen
