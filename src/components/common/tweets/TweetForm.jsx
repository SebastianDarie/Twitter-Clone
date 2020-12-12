import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChartBar,
  faImage,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import {
  ImageLink,
  ProfileImage,
  ProfileImageDiv,
  TextDiv,
} from '../GlobalStyles'
import { ReactComponent as Gif } from '../../../assets/img/gif.svg'
import {
  FirstSVG,
  LineBreak,
  TweetFormBottomContainer,
  TweetFormBottomContent,
  TweetFormBtn,
  TweetFormContainer,
  TweetFormContent,
  TweetFormContentContainer,
  TweetFormIcon,
  TweetFormImageContainer,
  TweetFormInputBorder,
  TweetFormInputContainer,
  TweetFormInputFlex,
  TweetFormInputPadding,
  TweetFormInputText,
  TweetFormPadding,
  TweetFormRow,
  TweetFormSidePadding,
  TweetFormSVGContainer,
  TweetFormTextArea,
  TweetFormTopLine,
} from './TweetForm'

const TweetForm = ({ profile }) => {
  const textarea = useRef()
  const breakline = useRef()
  const button = useRef()

  const blurHandler = () => {
    breakline.current.style.display = 'none'
    button.current.style.opacity = 0.5
    button.current.style.pointerEvents = 'none'
  }

  const focusHandler = () => {
    breakline.current.style.display = 'block'
    button.current.style.opacity = 1
    button.current.style.pointerEvents = 'all'
  }

  const setHeight = (txarea) => {
    txarea.style.height = 'auto'
    txarea.style.height = txarea.scrollHeight + 'px'
  }

  for (let i = 0; i < textarea.current?.length || 0; i++) {
    textarea[i].setAttribute(
      'style',
      'height:' + textarea[i].scrollHeight + 'px;'
    )
    textarea[i].addEventListener('input', setHeight(textarea[i]), false)
  }

  return (
    <TweetFormContainer>
      <TweetFormPadding>
        <TweetFormTopLine />
        <TweetFormContent>
          <div>
            <div>
              <TweetFormSidePadding>
                <TweetFormRow>
                  <TweetFormImageContainer>
                    <ProfileImageDiv>
                      <div>
                        <ImageLink>
                          <ProfileImage imageURL={profile.photoURL} />
                        </ImageLink>
                      </div>
                    </ProfileImageDiv>
                  </TweetFormImageContainer>
                  <TweetFormContentContainer>
                    <div style={{ width: '100%' }}>
                      <TweetFormInputContainer>
                        <div>
                          <TweetFormInputFlex>
                            <div style={{ width: '100%' }}>
                              <TweetFormInputBorder>
                                <div>
                                  <TweetFormInputText>
                                    <TweetFormInputPadding>
                                      <TweetFormTextArea
                                        ref={textarea}
                                        onBlur={blurHandler}
                                        onFocus={focusHandler}
                                        onKeyUp={() =>
                                          setHeight(textarea.current)
                                        }
                                      />
                                    </TweetFormInputPadding>
                                  </TweetFormInputText>
                                  <div></div>
                                </div>
                              </TweetFormInputBorder>
                            </div>
                          </TweetFormInputFlex>
                        </div>
                      </TweetFormInputContainer>
                    </div>
                    <LineBreak ref={breakline} />
                    <div>
                      <div>
                        <TweetFormBottomContainer>
                          <TweetFormBottomContent>
                            <FirstSVG>
                              <TweetFormIcon>
                                <FontAwesomeIcon icon={faImage} size='lg' />
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
                              <TweetFormBtn ref={button}>Tweet</TweetFormBtn>
                            </TextDiv>
                          </TweetFormBottomContent>
                        </TweetFormBottomContainer>
                      </div>
                    </div>
                  </TweetFormContentContainer>
                </TweetFormRow>
              </TweetFormSidePadding>
            </div>
          </div>
          <div></div>
        </TweetFormContent>
      </TweetFormPadding>
    </TweetFormContainer>
  )
}

export default TweetForm
