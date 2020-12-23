import React, { useEffect, useRef } from 'react'
import {
  BreakPoint,
  DoublePreviewWrapper,
  FlavorDiv,
  ImageLink,
  PositionModalDiv,
  ProfileImage,
  ReplyFormTextArea,
  SinglePreviewWrapper,
  TweetFormInputContainer,
  TweetFormInputPadding,
  TweetFormInputText,
  TweetImageDiv,
} from '../GlobalStyles'
import {
  Article,
  AtSpan,
  BigLineContainer,
  BoldName,
  CenteredName,
  ColumnFlexer,
  DoublePaddingDiv,
  GrayName,
  InitialTweetContainer,
  NameContent,
  NameFlexer,
  NameUsr,
  ReplyAtDiv,
  ReplyAtFlexer,
  ReplyBigLine,
  ReplyImageContainer,
  ReplyImageDiv,
  ReplyingToDiv,
  ReplySectionContainer,
  ReplySectionCreator,
  ReplySmallLine,
  ReplyTextAreaContainer,
  SidePaddingDiv,
  TimeDiv,
  TweetContent,
} from './ReplyModal'
import CloseHeader from '../global/CloseHeader'
import PreviewImage from './PreviewImage.jsx'
import TweetCreator from './TweetCreator.jsx'
import { clearInput, imageInput } from '../../../utils/addImage'

const ReplyModal = ({
  dispatch,
  firebase,
  button,
  replyModal,
  modalState,
  closeModal,
  reply,
  tweet,
  tweetCreator,
  profile,
  userID,
  formatTime,
  type,
  images,
  previews,
  addImage,
  removeImage,
  removeAllImages,
  setPreviewImage,
  toastrActions,
}) => {
  const textarea = useRef()

  useEffect(() => {
    if (type === 'reply') {
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
    let text = textarea.current

    return () => (text.value = '')
  }, [images, type, modalState?.open])

  useEffect(() => {
    if (!modalState.open) {
      button.current.style.opacity = 0.5
      button.current.style.pointerEvents = 'none'
    }
  }, [button, modalState.open])

  const { id, name, username, text, timeStamp } = tweet

  const focusHandler = () => {
    button.current.style.opacity = 1
    button.current.style.pointerEvents = 'all'
  }

  const closeHandler = () => {
    button.current.style.opacity = 0.5
    button.current.style.pointerEvents = 'none'
    textarea.current.value = ''

    dispatch(removeAllImages())
    dispatch(closeModal())
  }

  const clickHandler = () => {
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
      dispatch(
        reply(
          tweet.id,
          tweetCreator.id,
          textarea.current.value,
          profile.name,
          profile.username,
          userID,
          profile.tweets,
          images,
          { firebase }
        )
      )
      dispatch(closeModal())
      textarea.current.value = ''
    }
  }

  return (
    <PositionModalDiv ref={replyModal} modalState={modalState} id={id}>
      <FlavorDiv>
        <CloseHeader closeHandler={closeHandler} />

        <ReplySectionContainer>
          <div style={{ paddingBottom: '5px', width: '100%' }}>
            <DoublePaddingDiv>
              <div>
                <div>
                  <Article>
                    <ColumnFlexer>
                      <div>
                        <div></div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <ReplyImageDiv>
                            <ReplyImageContainer>
                              <ProfileImage imageURL={tweetCreator?.photoURL} />
                              <ReplySmallLine />
                            </ReplyImageContainer>
                          </ReplyImageDiv>

                          <InitialTweetContainer>
                            <div>
                              <div style={{ marginBottom: '2px' }}>
                                <NameFlexer>
                                  <NameContent>
                                    <NameUsr>
                                      <CenteredName>
                                        <BoldName>{name}</BoldName>
                                        <GrayName>@{username}</GrayName>
                                      </CenteredName>
                                    </NameUsr>
                                    <BreakPoint>&#8901;</BreakPoint>
                                    <TimeDiv>
                                      <time
                                        dateTime={`${formatTime(
                                          timeStamp.seconds
                                        )}`}
                                      >
                                        {formatTime(timeStamp.seconds)}
                                      </time>
                                    </TimeDiv>
                                  </NameContent>
                                </NameFlexer>
                              </div>
                            </div>

                            <div>
                              <div>
                                <TweetContent>{text}</TweetContent>
                              </div>
                            </div>
                          </InitialTweetContainer>
                        </div>
                      </div>
                    </ColumnFlexer>
                  </Article>
                </div>

                <ReplyAtDiv>
                  <ReplyAtFlexer>
                    <BigLineContainer>
                      <ReplyBigLine />
                    </BigLineContainer>

                    <div>
                      <ReplyingToDiv>
                        Replying to <AtSpan>@{tweetCreator?.username}</AtSpan>
                      </ReplyingToDiv>
                    </div>
                  </ReplyAtFlexer>
                </ReplyAtDiv>
              </div>

              <div>
                <div>
                  <SidePaddingDiv>
                    <TweetImageDiv>
                      <ImageLink>
                        <ProfileImage imageURL={profile.photoURL} />
                      </ImageLink>
                    </TweetImageDiv>

                    <ReplySectionCreator>
                      <ReplyTextAreaContainer>
                        <TweetFormInputText>
                          <TweetFormInputPadding>
                            <ReplyFormTextArea
                              ref={textarea}
                              onFocus={focusHandler}
                              // onKeyUp={() =>
                              //   setHeight(textarea.current)
                              // }
                            />
                          </TweetFormInputPadding>
                        </TweetFormInputText>
                      </ReplyTextAreaContainer>

                      <TweetFormInputContainer>
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

                      <TweetCreator
                        input='reply-image'
                        text='Reply'
                        button={button}
                        imageInput={(e) =>
                          imageInput(e, dispatch, addImage, 'reply')
                        }
                        clearInput={clearInput}
                        clickHandler={clickHandler}
                      />
                    </ReplySectionCreator>
                  </SidePaddingDiv>
                </div>
              </div>
            </DoublePaddingDiv>
          </div>
        </ReplySectionContainer>
      </FlavorDiv>
    </PositionModalDiv>
  )
}

export default ReplyModal
