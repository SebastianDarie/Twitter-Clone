import React from 'react'
import { TextDiv } from './GlobalStyles'
import { MainBtn } from './TwitterBtn.js'

const TwitterBtn = ({ clickHandler, text, type }) => {
  return (
    <TextDiv>
      <MainBtn type={type} onClick={clickHandler}>
        {text}
      </MainBtn>
    </TextDiv>
  )
}

export default TwitterBtn
