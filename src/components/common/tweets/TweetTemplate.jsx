import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from '../../../hooks/useRouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faEllipsisH,
  faHeart,
  faRetweet,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import {
  BackgroundHover,
  BlackOut,
  BreakPoint,
  ColumnDiv,
  DotIconContainer,
  //DoublePreviewWrapper,
  ImageLink,
  LowerText,
  ProfileImage,
  RowDiv,
  TweetImageDiv,
  TweetPaddingTop,
  UpperText,
} from '../GlobalStyles'
import {
  BorderDiv,
  BottomIconsContainer,
  CommentIconContainer,
  LikeHover,
  LikesIconContainer,
  NameDiv,
  PositionDiv,
  ProfileImageContainer,
  ProfileLink,
  RetweetHover,
  RetweetIconContainer,
  SideContent,
  TextSpan,
  TimeLink,
  TweetArticle,
  TweetImageContainer,
  TweetTextDiv,
  UpperLeftContainer,
  UpperProfileName,
  UpperRightContainer,
  UpperTextFlexer,
  UpperTextMargin,
} from './TweetTemplate'
import ReplyModal from './ReplyModal.jsx'

const TweetTemplate = ({
  dispatch,
  firebase,
  likeTweet,
  unlikeTweet,
  retweet,
  unretweet,
  reply,
  modalState,
  closeModal,
  openModal,
  users,
  profile,
  userID,
  tweet,
  tweetImages,
  setTweetImage,
  type,
  images,
  previews,
  addImage,
  removeImage,
  removeAllImages,
  setPreviewImage,
  toastrActions,
}) => {
  const [tweetImgs, setTweetImgs] = useState([])

  const replyModal = useRef()
  const button = useRef()

  const router = useRouter()

  useEffect(() => {
    let mounted = true
    const fetchImages = async () => {
      if (tweet.imageNum !== 0 && tweetImgs.length !== tweet.imageNum) {
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
    return () => (mounted = false)
  }, [firebase, tweet.imageNum, tweet.id])

  const formatTime = (seconds) => {
    let time = new Date(Date.UTC(1970, 0, 1))
    time.setUTCSeconds(seconds)
    return time.toLocaleDateString()
  }

  const redirectClick = () => {
    router.push({
      pathname: `/tweet/${tweet.id}`,
      state: { prev: router.location.pathname },
    })
  }

  const replyClick = () => {
    dispatch(removeAllImages())
    dispatch(openModal(tweet.id))
  }

  const outsideClickHandler = (e) => {
    if (modalState.open) {
      if (e.target !== replyModal.current) {
        button.current.style.opacity = 0.5
        button.current.style.pointerEvents = 'none'

        dispatch(removeAllImages())
        dispatch(closeModal())
      }
    }
  }

  const liked = tweet.likes.includes(userID)
  const retweeted = tweet.retweets.includes(userID)

  const tweetCreator = users?.find((user) => user.id === tweet.userID)

  // TODO: tweet letter count svg circle, autoresize textarea, fetch images only once, single tweet view, implement hashtags and @, tweet side button handle create, follow users, filter followed users on the right ...
  return (
    <>
      <BlackOut modalState={modalState} onClick={outsideClickHandler} />
      <ReplyModal
        dispatch={dispatch}
        firebase={firebase}
        button={button}
        replyModal={replyModal}
        modalState={modalState}
        closeModal={closeModal}
        reply={reply}
        tweet={tweet}
        tweetCreator={tweetCreator}
        profile={profile}
        userID={userID}
        formatTime={formatTime}
        type={type}
        images={images}
        previews={previews}
        addImage={addImage}
        removeImage={removeImage}
        removeAllImages={removeAllImages}
        setPreviewImage={setPreviewImage}
        toastrActions={toastrActions}
      />
      <PositionDiv onClick={redirectClick}>
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
                      <ImageLink>
                        <ProfileImage imageURL={tweetCreator?.photoURL} />
                      </ImageLink>
                    </TweetImageDiv>
                  </ProfileImageContainer>
                  <SideContent>
                    <div>
                      <UpperTextMargin>
                        <UpperTextFlexer>
                          <UpperLeftContainer>
                            <UpperProfileName>
                              <ProfileLink to={`/${tweetCreator?.username}`}>
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
                          {/* {tweetImgs.length > 1 && (
                          <TweetImageContainer>
                            <DoublePreviewWrapper>
                              {tweetImgs.slice(
                                0,
                                Math.floor(tweetImgs.length / 2)
                              )}
                            </DoublePreviewWrapper>
                            <DoublePreviewWrapper>
                              {tweetImgs.slice(
                                Math.floor(tweetImgs.length / 2),
                                tweetImgs.length
                              )}
                            </DoublePreviewWrapper>
                          </TweetImageContainer>
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
                        <CommentIconContainer onClick={replyClick}>
                          <div>
                            <BackgroundHover>
                              <FontAwesomeIcon icon={faComment} size='1x' />
                            </BackgroundHover>
                          </div>
                          <div>
                            <TextSpan>{tweet.replies.length}</TextSpan>
                          </div>
                        </CommentIconContainer>
                        <RetweetIconContainer
                          retweeted={retweeted}
                          onClick={
                            retweeted
                              ? () =>
                                  dispatch(
                                    unretweet(
                                      tweet.id,
                                      userID,
                                      profile.retweets,
                                      {
                                        firebase,
                                      }
                                    )
                                  )
                              : () =>
                                  dispatch(
                                    retweet(
                                      tweet.id,
                                      userID,
                                      profile.retweets,
                                      {
                                        firebase,
                                      }
                                    )
                                  )
                          }
                        >
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
                                    unlikeTweet(
                                      tweet.id,
                                      userID,
                                      profile.likes,
                                      {
                                        firebase,
                                      }
                                    )
                                  )
                              : () =>
                                  dispatch(
                                    likeTweet(tweet.id, userID, profile.likes, {
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
    </>
  )
}

export default TweetTemplate
