import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faEllipsisH,
  faHeart,
  faRetweet,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import {
  BreakPoint,
  ImageLink,
  LowerText,
  ProfileImage,
  TweetImageDiv,
  UpperText,
} from '../GlobalStyles'
import {
  BackgroundHover,
  BorderDiv,
  BottomIconsContainer,
  ColumnDiv,
  CommentIconContainer,
  DotIconContainer,
  LikesIconContainer,
  NameDiv,
  PositionDiv,
  ProfileImageContainer,
  ProfileLink,
  RetweetIconContainer,
  RowDiv,
  SideContent,
  TextSpan,
  TimeLink,
  TweetArticle,
  TweetPaddingTop,
  TweetTextDiv,
  UpperLeftContainer,
  UpperProfileName,
  UpperRightContainer,
  UpperTextFlexer,
  UpperTextMargin,
} from './TweetTemplate'

const TweetTemplate = ({ profile, tweet }) => {
  const formatTime = (seconds) => {
    let time = new Date(Date.UTC(1970, 0, 1))
    time.setUTCSeconds(seconds)
    return time.toLocaleDateString()
  }

  return (
    <PositionDiv>
      <BorderDiv>
        <div>
          <TweetArticle>
            <ColumnDiv>
              <div>
                <RowDiv>
                  <TweetPaddingTop />
                </RowDiv>
              </div>
              <RowDiv>
                <ProfileImageContainer>
                  <TweetImageDiv>
                    <div>
                      <ImageLink>
                        <ProfileImage imageURL={profile.photoURL} />
                      </ImageLink>
                    </div>
                  </TweetImageDiv>
                </ProfileImageContainer>
                <SideContent>
                  <div>
                    <UpperTextMargin>
                      <UpperTextFlexer>
                        <UpperLeftContainer>
                          <UpperProfileName>
                            <ProfileLink to={`/${tweet.profile}`}>
                              <NameDiv>
                                <UpperText>{tweet.name}</UpperText>

                                <LowerText style={{ marginLeft: 4 }}>
                                  @{tweet.username}
                                </LowerText>
                              </NameDiv>
                            </ProfileLink>
                          </UpperProfileName>
                          <BreakPoint>&#8901;</BreakPoint>
                          <TimeLink to={`${tweet.id}`}>
                            <time
                              dateTime={`${formatTime(
                                tweet.timeStamp.seconds
                              )}`}
                            >
                              {formatTime(tweet.timeStamp.seconds)}
                            </time>
                          </TimeLink>
                        </UpperLeftContainer>
                        <UpperRightContainer>
                          <DotIconContainer>
                            <FontAwesomeIcon icon={faEllipsisH} size='sm' />
                          </DotIconContainer>
                        </UpperRightContainer>
                      </UpperTextFlexer>
                    </UpperTextMargin>
                  </div>

                  <div>
                    <div>
                      <TweetTextDiv>{tweet.text}</TweetTextDiv>
                    </div>
                    <div></div>
                    <BottomIconsContainer>
                      <CommentIconContainer>
                        <div>
                          <FontAwesomeIcon icon={faComment} size='1x' />
                        </div>
                        <div>
                          <TextSpan>{tweet.replies.length}</TextSpan>
                        </div>
                      </CommentIconContainer>
                      <RetweetIconContainer>
                        <div>
                          {/* <BackgroundHover /> */}
                          <FontAwesomeIcon icon={faRetweet} size='1x' />
                        </div>
                        <div>
                          <TextSpan>{tweet.retweets.length}</TextSpan>
                        </div>
                      </RetweetIconContainer>
                      <LikesIconContainer>
                        <div>
                          {/* <BackgroundHover /> */}
                          <FontAwesomeIcon icon={faHeart} size='1x' />
                        </div>
                        <div>
                          <TextSpan>{tweet.likes.length}</TextSpan>
                        </div>
                      </LikesIconContainer>
                      <CommentIconContainer>
                        <div>
                          {/* <BackgroundHover /> */}
                          <FontAwesomeIcon icon={faUpload} size='1x' />
                        </div>
                      </CommentIconContainer>
                    </BottomIconsContainer>
                  </div>
                </SideContent>
              </RowDiv>
            </ColumnDiv>
          </TweetArticle>
        </div>
      </BorderDiv>
    </PositionDiv>
  )
}

export default TweetTemplate
