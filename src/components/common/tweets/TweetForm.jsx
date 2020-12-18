import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChartBar,
  faGlobeAmericas,
  faImage,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import {
  DoublePreviewWrapper,
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
  SinglePreviewWrapper,
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
import PreviewImage from './PreviewImage.jsx'
import resizeImage from '../../../utils/resizeImage'

const TweetForm = ({
  dispatch,
  firebase,
  createTweet,
  addImage,
  removeImage,
  setPreviewImage,
  images,
  previews,
  profile,
  userID,
}) => {
  const container = useRef()
  const globe = useRef()
  const textarea = useRef()
  const breakline = useRef()
  const button = useRef()

  useEffect(() => {
    if (images.length) {
      let tempArr = []
      for (const img of images) {
        const fileURL = URL.createObjectURL(img)

        const component = (
          <PreviewImage
            key={img.name}
            image={img}
            src={fileURL}
            dispatch={dispatch}
            removeImage={removeImage}
          />
        )

        tempArr.push(component)
      }
      dispatch(setPreviewImage(tempArr))
    } else {
      dispatch(setPreviewImage([]))
    }
  }, [images])

  const focusHandler = () => {
    breakline.current.style.display = 'block'
    globe.current.style.display = 'flex'
    button.current.style.opacity = 1
    button.current.style.pointerEvents = 'all'
  }

  const setHeight = (txarea) => {
    txarea.style.height = 'auto'
    txarea.style.height = txarea.scrollHeight + 10 + 'px'
  }

  for (let i = 0; i < textarea.current?.length || 0; i++) {
    textarea[i].setAttribute(
      'style',
      'height:' + textarea[i].scrollHeight + 'px;'
    )
    textarea[i].addEventListener('input', setHeight(textarea[i]), false)
  }

  const clearInput = (e) => {
    e.target.value = null
  }

  const imageInput = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0]
      const blob = await resizeImage(file, 1200, 675)

      const image = new File([blob], file.name, {
        lastModified: new Date().getTime(),
        type: blob.type,
      })
      dispatch(addImage(image))
    } else {
      console.log('smth went wrong')
    }
  }

  const clickHandler = () => {
    dispatch(
      createTweet(
        textarea.current.value,
        profile.name,
        profile.username,
        userID,
        profile.tweets,
        images,
        { firebase }
      )
    )
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
                        {previews.length > 1 ? (
                          <SinglePreviewWrapper>
                            <DoublePreviewWrapper>
                              {previews.slice(
                                0,
                                Math.floor(previews.length / 2)
                              )}
                            </DoublePreviewWrapper>
                            <DoublePreviewWrapper style={{ marginLeft: '5px' }}>
                              {previews.slice(
                                Math.floor(previews.length / 2),
                                previews.length
                              )}
                            </DoublePreviewWrapper>
                          </SinglePreviewWrapper>
                        ) : (
                          previews.length > 0 && (
                            <SinglePreviewWrapper>
                              {previews}
                            </SinglePreviewWrapper>
                          )
                        )}
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
                                  onClick={clearInput}
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
