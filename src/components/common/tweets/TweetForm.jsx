import { useEffect, useRef } from 'react'
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
  button,
  textarea,
  images,
  previews,
  type,
  profile,
  userID,
  toastrActions,
}) => {
  const container = useRef()
  const globe = useRef()
  const breakline = useRef()
  const fallBacktextarea = useRef()
  const fallBackBtn = useRef()
  button = button || fallBackBtn
  textarea = textarea || fallBacktextarea

  useEffect(() => {
    ;(async () => {
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
              />
            )

            tempArr.push(component)
          }
          const { setPreviewImage } = await import(
            '../../../actions/imageActions'
          )
          dispatch(setPreviewImage(tempArr))
        } else {
          const { setPreviewImage } = await import(
            '../../../actions/imageActions'
          )
          dispatch(setPreviewImage([]))
        }
      }
    })()
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

  const clickHandler = async () => {
    if (textarea.current.value === '' && images.length === 0) {
      dispatch(
        toastrActions.add({
          type: 'warning',
          title: 'Tweet Creation Error',
          position: 'top-right',
          message: 'Please enter some text or an image',
          options: {
            showCloseButton: true,
            timeOut: 3000,
          },
        })
      )
    } else {
      const { createTweet } = await import('../../../actions/tweetActions')

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
      textarea.current.value = ''
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
                      <ImageLink to={`/${profile?.username}`}>
                        <ProfileImage
                          height='49px'
                          width='49px'
                          loading='lazy'
                          imageURL={profile.photoURL}
                        />
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
                          input={userID}
                          text='Tweet'
                          button={button}
                          imageInput={(e) => imageInput(e, dispatch, 'form')}
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
