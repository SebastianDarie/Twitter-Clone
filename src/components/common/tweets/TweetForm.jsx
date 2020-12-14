import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChartBar,
  faGlobeAmericas,
  faImage,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import {
  ImageLink,
  ProfileImage,
  TextDiv,
  TweetImageDiv,
} from '../GlobalStyles'
import { ReactComponent as Gif } from '../../../assets/img/gif.svg'
import {
  FirstSVG,
  GlobeFlexer,
  HoverGlobe,
  ImageInput,
  LineBreak,
  PaddingLine,
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
import resizeImage from '../../../utils/resizeImage'

const TweetForm = ({ profile }) => {
  const container = useRef()
  const globe = useRef()
  const textarea = useRef()
  const breakline = useRef()
  const button = useRef()

  const blurHandler = () => {
    breakline.current.style.display = 'none'
    globe.current.style.display = 'none'
    if (textarea.current.value === '') {
      container.current.style.height = '50px'
    }
  }

  const focusHandler = () => {
    breakline.current.style.display = 'block'
    globe.current.style.display = 'flex'
    button.current.style.opacity = 1
    button.current.style.pointerEvents = 'all'
    container.current.style.height =
      parseInt(textarea.current.style.height.slice(0, -2)) + 15 + 'px'
  }

  const setHeight = (txarea) => {
    txarea.style.height = 'auto'
    txarea.style.height = txarea.scrollHeight + 10 + 'px'
    container.current.style.height = 'auto'
    container.current.style.height = txarea.scrollHeight + 15 + 'px'
  }

  for (let i = 0; i < textarea.current?.length || 0; i++) {
    textarea[i].setAttribute(
      'style',
      'height:' + textarea[i].scrollHeight + 'px;'
    )
    textarea[i].addEventListener('input', setHeight(textarea[i]), false)
  }

  const imageInput = async (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0]

      const blob = await resizeImage(image, 1200, 675)
      console.log(blob)
    }
  }

  const clickHandler = (e) => {
    console.log(e.currentTarget, textarea.current.value)
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
                    <TweetImageDiv>
                      <div>
                        <ImageLink>
                          <ProfileImage imageURL={profile.photoURL} />
                        </ImageLink>
                      </div>
                    </TweetImageDiv>
                  </TweetFormImageContainer>
                  <TweetFormContentContainer>
                    <div style={{ width: '100%' }}>
                      <TweetFormInputContainer ref={container}>
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
                    <PaddingLine ref={globe}>
                      <div>
                        <HoverGlobe>
                          <GlobeFlexer>
                            <FontAwesomeIcon
                              icon={faGlobeAmericas}
                              size='lg'
                              style={{
                                marginRight: '0.5em',
                              }}
                            />
                            <span>Everyone can reply</span>
                          </GlobeFlexer>
                        </HoverGlobe>
                      </div>
                    </PaddingLine>
                    <LineBreak ref={breakline} />
                    <div>
                      <div>
                        <TweetFormBottomContainer>
                          <TweetFormBottomContent>
                            <FirstSVG>
                              <TweetFormIcon>
                                <label
                                  htmlFor='image-input'
                                  style={{ cursor: 'pointer' }}
                                >
                                  <FontAwesomeIcon icon={faImage} size='lg' />
                                </label>
                                <ImageInput
                                  id='image-input'
                                  onChange={imageInput}
                                />
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
                                Tweet
                              </TweetFormBtn>
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
