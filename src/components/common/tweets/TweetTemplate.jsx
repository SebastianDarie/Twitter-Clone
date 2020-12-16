import React, { useEffect } from 'react'
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
  LikeHover,
  LikesIconContainer,
  NameDiv,
  PositionDiv,
  ProfileImageContainer,
  ProfileLink,
  RetweetHover,
  RetweetIconContainer,
  RowDiv,
  SideContent,
  TextSpan,
  TimeLink,
  TweetArticle,
  TweetImageContainer,
  TweetPaddingTop,
  TweetTextDiv,
  UpperLeftContainer,
  UpperProfileName,
  UpperRightContainer,
  UpperTextFlexer,
  UpperTextMargin,
} from './TweetTemplate'

const TweetTemplate = ({
  dispatch,
  firebase,
  profile,
  tweet,
  tweetImages,
  setTweetImage,
}) => {
  useEffect(() => {
    ;(async () => {
      const pathRef = firebase.storage().ref('tweet pics/' + tweet.id + '/')

      const res = await pathRef.listAll()

      res.items.forEach(async (imageRef) => {
        const url = await imageRef.getDownloadURL()
        dispatch(setTweetImage(tweet.id, url))
      })
    })()
  }, [])

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
                            <BackgroundHover>
                              <FontAwesomeIcon icon={faEllipsisH} size='sm' />
                            </BackgroundHover>
                          </DotIconContainer>
                        </UpperRightContainer>
                      </UpperTextFlexer>
                    </UpperTextMargin>
                  </div>

                  <div>
                    <div>
                      <TweetTextDiv>{tweet.text}</TweetTextDiv>
                    </div>
                    <div>
                      <div>
                        {tweetImages &&
                          tweetImages.map((obj, idx) => (
                            <TweetImageContainer key={idx}>
                              <img
                                src={obj.image}
                                alt='tweet-img'
                                style={{ height: '100%', width: '100%' }}
                              />
                            </TweetImageContainer>
                          ))}
                      </div>
                    </div>
                    <BottomIconsContainer>
                      <CommentIconContainer>
                        <div>
                          <BackgroundHover>
                            <FontAwesomeIcon icon={faComment} size='1x' />
                          </BackgroundHover>
                        </div>
                        <div>
                          <TextSpan>{tweet.replies.length}</TextSpan>
                        </div>
                      </CommentIconContainer>
                      <RetweetIconContainer>
                        <div>
                          <RetweetHover>
                            <FontAwesomeIcon icon={faRetweet} size='1x' />
                          </RetweetHover>
                        </div>
                        <div>
                          <TextSpan>{tweet.retweets.length}</TextSpan>
                        </div>
                      </RetweetIconContainer>
                      <LikesIconContainer>
                        <div>
                          <LikeHover>
                            <FontAwesomeIcon icon={faHeart} size='1x' />
                          </LikeHover>
                        </div>
                        <div>
                          <TextSpan>{tweet.likes.length}</TextSpan>
                        </div>
                      </LikesIconContainer>
                      <CommentIconContainer>
                        <div>
                          <BackgroundHover>
                            <FontAwesomeIcon icon={faUpload} size='1x' />
                          </BackgroundHover>
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
