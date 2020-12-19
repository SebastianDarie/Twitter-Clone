import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  BackgroundHover,
  BreakPoint,
  ImageLink,
  ProfileImage,
  TweetFormInputPadding,
  TweetFormInputText,
  TweetFormTextArea,
  TweetImageDiv,
} from '../GlobalStyles'
import {
  Article,
  AtSpan,
  BigFlexer,
  BigLineContainer,
  BoldName,
  CenteredName,
  ColumnFlexer,
  DoublePaddingDiv,
  FlavorDiv,
  GrayName,
  HeaderPadding,
  InitialTweetContainer,
  LeftContainer,
  NameContent,
  NameFlexer,
  NameUsr,
  PositionModalDiv,
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
  RightContainer,
  SidePaddingDiv,
  TimeDiv,
  TweetContent,
} from './ReplyModal'
import TweetCreator from './TweetCreator.jsx'

const ReplyModal = ({
  dispatch,
  firebase,
  tweet,
  users,
  profile,
  userID,
  formatTime,
}) => {
  const { name, username, text, timeStamp } = tweet

  const tweetCreator = users?.find((user) => user.id === tweet.userID)

  return (
    <PositionModalDiv>
      <FlavorDiv>
        <div></div>
        <div style={{ height: '53px' }}>
          <div>
            <HeaderPadding>
              <BigFlexer>
                <LeftContainer>
                  <BackgroundHover>
                    <FontAwesomeIcon
                      color='rgba(29, 161, 242, 1)'
                      icon={faTimes}
                    />
                  </BackgroundHover>
                </LeftContainer>
                <RightContainer>
                  <div></div>
                </RightContainer>
              </BigFlexer>
            </HeaderPadding>
          </div>
        </div>
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
                            <TweetFormTextArea
                            // ref={textarea}
                            // onFocus={focusHandler}
                            // onKeyUp={() =>
                            //   setHeight(textarea.current)
                            // }
                            />
                          </TweetFormInputPadding>
                        </TweetFormInputText>
                      </ReplyTextAreaContainer>
                      <TweetCreator text='Reply' />
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
