import React, { useEffect, useState } from 'react'
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
  GridSystem,
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
  likeTweet,
  unlikeTweet,
  profile,
  userID,
  tweet,
  tweetImages,
  setTweetImage,
}) => {
  const [tweetImgs, setTweetImgs] = useState([])

  useEffect(() => {
    let mounted = true
    const fetchImages = async () => {
      if (tweet.imageNum !== 0) {
        const pathRef = firebase.storage().ref('tweet pics/' + tweet.id + '/')

        const res = await pathRef.listAll()

        let tempArray = []
        res.items.forEach(async (imageRef, i) => {
          const url = await imageRef.getDownloadURL()

          tempArray.push(url)

          if (mounted && i === tweet.imageNum - 1) {
            //dispatch(setTweetImage(tweet.id, tempArray))
            setTweetImgs(tempArray)
          }
        })
      }
    }

    fetchImages()
  }, [firebase, tweet.imageNum, tweet.id, tweetImages])

  const formatTime = (seconds) => {
    let time = new Date(Date.UTC(1970, 0, 1))
    time.setUTCSeconds(seconds)
    return time.toLocaleDateString()
  }

  const liked = tweet.likes.includes(userID)

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
                        {/* {tweetImages &&
                          tweetImages.map((obj) =>
                            obj.id === tweet.id
                              ? obj.images.map((img, idx) => (
                                  <TweetImageContainer key={idx}>
                                    <img
                                      src={img}
                                      alt='tweet-img'
                                      style={{
                                        height: '100%',
                                        width: '100%',
                                      }}
                                    />
                                  </TweetImageContainer>
                                ))
                              : ''
                          )} */}
                        {tweetImgs &&
                          tweetImgs.map((img, idx) => (
                            <TweetImageContainer key={idx}>
                              <img
                                src={img}
                                alt='tweet-img'
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
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
                      <LikesIconContainer
                        liked={liked}
                        onClick={
                          liked
                            ? () =>
                                dispatch(
                                  unlikeTweet(tweet, userID, profile.likes, {
                                    firebase,
                                  })
                                )
                            : () =>
                                dispatch(
                                  likeTweet(tweet, userID, profile.likes, {
                                    firebase,
                                  })
                                )
                        }
                      >
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
