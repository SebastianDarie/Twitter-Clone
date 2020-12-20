import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import {
  DoublePreviewWrapper,
  ImageLink,
  ProfileImage,
  SinglePreviewWrapper,
  TweetFormInputContainer,
  TweetFormInputPadding,
  TweetFormInputText,
  TweetFormTextArea,
  TweetImageDiv,
} from '../GlobalStyles'
import {
  GlobeFlexer,
  HoverGlobe,
  LineBreak,
  PaddingLine,
  TweetFormContainer,
  TweetFormContent,
  TweetFormContentContainer,
  TweetFormImageContainer,
  TweetFormInputBorder,
  TweetFormInputFlex,
  TweetFormPadding,
  TweetFormRow,
  TweetFormSidePadding,
  TweetFormTopLine,
} from './TweetForm'
import PreviewImage from './PreviewImage.jsx'
import TweetCreator from './TweetCreator.jsx'
import { clearInput, imageInput } from '../../../utils/addImage'

const TweetForm = ({
  dispatch,
  firebase,
  createTweet,
  addImage,
  removeImage,
  setPreviewImage,
  images,
  previews,
  type,
  profile,
  userID,
}) => {
  const container = useRef()
  const globe = useRef()
  const textarea = useRef()
  const breakline = useRef()
  const button = useRef()

  useEffect(() => {
    if (type === 'form') {
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
    }
  }, [images, type])

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

  const clickHandler = () => {
    if (textarea.current.value === '' && images.length === 0) {
      console.log('test')
    } else {
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
                      <ImageLink>
                        <ProfileImage imageURL={profile.photoURL} />
                      </ImageLink>
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
                        <TweetCreator
                          input='image-input'
                          text='Tweet'
                          button={button}
                          imageInput={(e) =>
                            imageInput(e, dispatch, addImage, 'form')
                          }
                          clearInput={clearInput}
                          clickHandler={clickHandler}
                        />
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
