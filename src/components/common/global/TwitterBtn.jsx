import React from 'react'
import { MainBtn, TextDiv } from '../GlobalStyles'

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
