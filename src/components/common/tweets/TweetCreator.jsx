import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChartBar,
  faImage,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Gif } from '../../../assets/img/gif.svg'
import { TextDiv } from '../GlobalStyles'
import {
  FirstSVG,
  ImageInput,
  TweetFormBottomContainer,
  TweetFormBottomContent,
  TweetFormBtn,
  TweetFormIcon,
  TweetFormSVGContainer,
} from './TweetCreator'

const TweetCreator = ({
  input,
  text,
  button,
  imageInput,
  clearInput,
  clickHandler,
}) => {
  return (
    <TweetFormBottomContainer>
      <TweetFormBottomContent>
        <FirstSVG>
          <TweetFormIcon>
            <label htmlFor={input} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faImage} size='lg' />
            </label>
            <ImageInput id={input} onChange={imageInput} onClick={clearInput} />
          </TweetFormIcon>
        </FirstSVG>
        <TweetFormSVGContainer>
          <TweetFormIcon>
            <Gif />
          </TweetFormIcon>
        </TweetFormSVGContainer>
        <TweetFormSVGContainer>
          <TweetFormIcon>
            <FontAwesomeIcon icon={faChartBar} size='lg' />
          </TweetFormIcon>
        </TweetFormSVGContainer>
        <TweetFormSVGContainer>
          <TweetFormIcon>
            <FontAwesomeIcon icon={faSmile} size='lg' />
          </TweetFormIcon>
        </TweetFormSVGContainer>
        <TweetFormSVGContainer>
          <TweetFormIcon>
            <FontAwesomeIcon icon={faCalendar} size='lg' />
          </TweetFormIcon>
        </TweetFormSVGContainer>
      </TweetFormBottomContent>

      <TweetFormBottomContent>
        <TextDiv>
          <TweetFormBtn ref={button} onClick={clickHandler}>
            {text}
          </TweetFormBtn>
        </TextDiv>
      </TweetFormBottomContent>
    </TweetFormBottomContainer>
  )
}

export default TweetCreator
