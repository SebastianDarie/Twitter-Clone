import { useEffect, useRef } from 'react';
import {
  BigLineContainer,
  BreakPoint,
  DoublePreviewWrapper,
  FlavorDiv,
  ImageLink,
  PositionModalDiv,
  ProfileImage,
  ReplyBigLine,
  ReplyFormTextArea,
  ReplyImageContainer,
  ReplyImageDiv,
  ReplySmallLine,
  SinglePreviewWrapper,
  TweetFormInputContainer,
  TweetFormInputPadding,
  TweetFormInputText,
  TweetImageDiv,
} from '../GlobalStyles'
import {
  Article,
  AtSpan,
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
  ReplyingToDiv,
  ReplySectionContainer,
  ReplySectionCreator,
  ReplyTextAreaContainer,
  SidePaddingDiv,
  TimeDiv,
  TweetContent,
} from './ReplyModal'
import { ProfileImageContainer } from './TweetTemplate'
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
  reply,
  tweet,
  tweetCreator,
  profile,
  userID,
  formatTime,
  type,
  images,
  previews,
  toastrActions,
}) => {
  const textarea = useRef()

  useEffect(() => {
    ;(async () => {
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
  }, [images, type, modalState.open])

  useEffect(() => {
    if (!modalState.open) {
      button.current.style.opacity = 0.5
      button.current.style.pointerEvents = 'none'
      textarea.current.value = ''
    }
  }, [button, modalState.open])

  const { id, name, username, text, timeStamp } = tweet

  const focusHandler = () => {
    button.current.style.opacity = 1
    button.current.style.pointerEvents = 'all'
  }

  const closeHandler = async () => {
    button.current.style.opacity = 0.5
    button.current.style.pointerEvents = 'none'
    textarea.current.value = ''

    const { removeAllImages } = await import('../../../actions/imageActions')
    const { closeModal } = await import('../../../actions/modalActions')
    dispatch(removeAllImages())
    dispatch(closeModal())
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
      const { closeModal } = await import('../../../actions/modalActions')

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
                          <ProfileImageContainer>
                            <ReplyImageDiv>
                              <ReplyImageContainer>
                                <ProfileImage
                                  imageURL={tweetCreator?.photoURL}
                                />
                                <ReplySmallLine style={{ maxHeight: '50%' }} />
                              </ReplyImageContainer>
                            </ReplyImageDiv>
                          </ProfileImageContainer>

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
                        imageInput={(e) => imageInput(e, dispatch, 'reply')}
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
