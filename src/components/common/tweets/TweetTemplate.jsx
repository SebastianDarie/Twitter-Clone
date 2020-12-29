import React, { useCallback, useEffect, useMemo, useRef } from 'react'
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
  LikeHover,
  LowerText,
  ProfileImage,
  ReplyImageContainer,
  ReplyImageDiv,
  ReplySmallLine,
  RetweetHover,
  RowDiv,
  TweetImageContainer,
  TweetImageDiv,
  TweetPaddingTop,
  UpperText,
} from '../GlobalStyles'
import {
  BorderDiv,
  BottomIconsContainer,
  CommentIconContainer,
  LikesIconContainer,
  NameDiv,
  PositionDiv,
  ProfileImageContainer,
  ProfileLink,
  RetweetedIcon,
  RetweetedLink,
  RetweetedMargin,
  RetweetedText,
  RetweetIconContainer,
  SideContent,
  TextSpan,
  TimeLink,
  TweetArticle,
  TweetTextDiv,
  UpperLeftContainer,
  UpperProfileName,
  UpperRightContainer,
  UpperTextFlexer,
  UpperTextMargin,
} from './TweetTemplate'
import ReplyModal from './ReplyModal.jsx'
import formatTime from '../../../utils/formatTime'
import {
  deleteHandler,
  replyHandler,
  retweetHandler,
  likeHandler,
} from '../../../utils/tweetHandlers'

const TweetTemplate = ({
  dispatch,
  firebase,
  reply,
  replyView,
  profileView,
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
  const replyModal = useRef()
  const button = useRef()

  const router = useRouter()

  useEffect(() => {
    let download = true
    const fetchImages = async () => {
      const found = tweetImages.some((obj) => obj.id === tweet.id)

      if (tweet.imageNum !== 0 && !found) {
        const pathRef = firebase.storage().ref('tweet pics/' + tweet.id + '/')

        const res = await pathRef.listAll()

        let tempArray = []
        res.items.forEach(async (imageRef, i) => {
          const url = await imageRef.getDownloadURL()

          tempArray.push(url)

          if (download && i === tweet.imageNum - 1) {
            dispatch(setTweetImage(tweet.id, tempArray))
          }
        })
      }
    }

    fetchImages()

    return () => (download = false)
  }, [firebase, tweet.imageNum, tweet.id, tweetImages])

  const redirectClick = () => {
    router.push({
      pathname: `/tweet/${tweet.id}`,
      state: { prev: router.location.pathname },
    })
  }

  const outsideClickHandler = (e) => {
    if (modalState.open) {
      if (e.target !== replyModal.current) {
        dispatch(removeAllImages())
        dispatch(closeModal())
      }
    }
  }

  const liked = tweet.likes.includes(userID)
  const retweeted = tweet.retweets.includes(userID)

  const tweetCreator = users?.find((user) => user.id === tweet.userID)

  // TODO: properly resize images, reply modal for tweet view, get images for prev tweet view, follow users, filter followed users on the right
  // tweet view determine if tweet is a reply, implement hashtags and @,
  // use twitter modal for follow, logout, others (search its use on twitter), delete dropdown & modal
  // tweet letter count svg circle, autoresize textarea
  // Performance: integrate React lazy and Suspense in code, fetch tweet & profile images only once, memoization, caching, service workers
  // link does not go to user profile, image not rendered on tweet creation, outside click logout
  // Completed(might benefit from refactoring later): tweet side btn modal + form = modalform,
  // make searchbar work, single tweet view, create and reply tweets
  // Possible Improvement: dispatch images with redux once on load and then check if the redux images contain the currTweet id then don't fetch
  // Remove useState: signup input, tweet template(images), tweet view
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
        <BorderDiv replyView={replyView}>
          <div>
            <TweetArticle>
              <ColumnDiv>
                <div>
                  <RowDiv>
                    <TweetPaddingTop>
                      {profileView === 'retweets' &&
                      tweet.retweets &&
                      tweet.retweets.includes(userID) ? (
                        <RetweetedMargin>
                          <RetweetedIcon>
                            <FontAwesomeIcon icon={faRetweet} />
                          </RetweetedIcon>
                          <RetweetedText>
                            <RetweetedLink
                              to={`/${profile.username}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              You retweeted
                            </RetweetedLink>
                          </RetweetedText>
                        </RetweetedMargin>
                      ) : null}
                    </TweetPaddingTop>
                  </RowDiv>
                </div>
                <RowDiv>
                  <ProfileImageContainer>
                    {/* tweet.replyTo && */}
                    {replyView ? (
                      <ReplyImageDiv>
                        <ReplyImageContainer>
                          <ProfileImage imageURL={tweetCreator?.photoURL} />
                          <ReplySmallLine />
                        </ReplyImageContainer>
                      </ReplyImageDiv>
                    ) : (
                      <TweetImageDiv>
                        <ImageLink>
                          <ProfileImage imageURL={tweetCreator?.photoURL} />
                        </ImageLink>
                      </TweetImageDiv>
                    )}
                  </ProfileImageContainer>

                  <SideContent>
                    <div>
                      <UpperTextMargin>
                        <UpperTextFlexer>
                          <UpperLeftContainer>
                            <UpperProfileName>
                              <ProfileLink
                                to={`/${tweetCreator?.username}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <NameDiv>
                                  <UpperText>{tweet.name}</UpperText>

                                  <LowerText style={{ marginLeft: 4 }}>
                                    @{tweet.username}
                                  </LowerText>
                                </NameDiv>
                              </ProfileLink>
                            </UpperProfileName>
                            <BreakPoint>&#8901;</BreakPoint>
                            <TimeLink to={`/tweet/${tweet.id}`}>
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
                            <DotIconContainer
                              onClick={(e) =>
                                tweet.userID === userID
                                  ? deleteHandler(
                                      e,
                                      dispatch,
                                      tweet.id,
                                      userID,
                                      profile.tweets,
                                      tweet.replyTo,
                                      firebase
                                    )
                                  : dispatch(
                                      toastrActions.add({
                                        type: 'error',
                                        title: 'Delete Error',
                                        position: 'top-right',
                                        message:
                                          "You're not the author of the tweet",
                                        options: {
                                          showCloseButton: true,
                                          timeOut: 3000,
                                        },
                                      })
                                    )
                              }
                            >
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
                            )}
                        </div>
                      </div>
                      <BottomIconsContainer>
                        <CommentIconContainer
                          onClick={(e) =>
                            replyHandler(
                              e,
                              dispatch,
                              openModal,
                              removeAllImages,
                              tweet
                            )
                          }
                        >
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
                          onClick={(e) =>
                            retweetHandler(
                              e,
                              retweeted,
                              dispatch,
                              tweet,
                              userID,
                              profile,
                              firebase
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
                          onClick={(e) =>
                            likeHandler(
                              e,
                              liked,
                              dispatch,
                              tweet,
                              userID,
                              profile,
                              firebase
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
