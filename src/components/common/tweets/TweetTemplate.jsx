import { useEffect, useRef, Suspense, lazy } from 'react';
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
  HashtagLink,
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
import formatTime from '../../../utils/formatTime'
import highlightPattern from '../../../utils/highlightPattern'
import {
  replyHandler,
  retweetHandler,
  likeHandler,
} from '../../../utils/tweetHandlers'

const ReplyModal = lazy(() => import('./ReplyModal.jsx'))
const DeleteMenu = lazy(() => import('../global/DeleteMenu.jsx'))
const HoverLink = lazy(() => import('../global/HoverLink'))

const TweetTemplate = ({
  dispatch,
  firebase,
  reply,
  replyView,
  profileView,
  modalState,
  users,
  auth,
  profile,
  userID,
  tweet,
  tweetImages,
  type,
  images,
  previews,
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
            const { setTweetImage } = await import(
              '../../../actions/imageActions'
            )
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

  const menuOpener = async (e) => {
    e.stopPropagation()
    const { openMenu, closeMenu } = await import(
      '../../../actions/modalActions'
    )
    !modalState.menu ? dispatch(openMenu(tweet.id)) : dispatch(closeMenu())
  }

  const replyOpener = async (e) => {
    e.stopPropagation()

    const { closeMenu } = await import('../../../actions/modalActions')
    replyHandler(dispatch, tweet)
    dispatch(closeMenu())
  }

  const outsideClickHandler = async (e) => {
    if (modalState.open) {
      if (e.target !== replyModal.current) {
        const { removeAllImages } = await import(
          '../../../actions/imageActions'
        )
        const { closeModal } = await import('../../../actions/modalActions')

        dispatch(removeAllImages())
        dispatch(closeModal())
      }
    }
  }

  const liked = tweet.likes.includes(userID)
  const retweeted = tweet.retweets.includes(userID)

  const tweetCreator = users?.find((user) => user.id === tweet.userID)

  const hashedText = highlightPattern(tweet.text, /#\w+/gi, HashtagLink)

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
      <Suspense fallback={null}>
        <ReplyModal
          dispatch={dispatch}
          firebase={firebase}
          button={button}
          replyModal={replyModal}
          modalState={modalState}
          reply={reply}
          tweet={tweet}
          tweetCreator={tweetCreator}
          profile={profile}
          userID={userID}
          formatTime={formatTime}
          type={type}
          images={images}
          previews={previews}
          toastrActions={toastrActions}
        />
        <DeleteMenu
          dispatch={dispatch}
          firebase={firebase}
          modalState={modalState}
          profile={profile}
          tweet={tweet}
          userID={userID}
          toastrActions={toastrActions}
        />
        <PositionDiv onClick={redirectClick}>
          <BorderDiv replyView={replyView}>
            <TweetArticle>
              <ColumnDiv>
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

                <RowDiv>
                  <HoverLink
                    auth={auth}
                    currProfile={tweetCreator}
                    profile={profile}
                  >
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
                          <ImageLink
                            to={`/${tweetCreator?.username}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ProfileImage imageURL={tweetCreator?.photoURL} />
                          </ImageLink>
                        </TweetImageDiv>
                      )}
                    </ProfileImageContainer>
                  </HoverLink>

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
                            <DotIconContainer onClick={menuOpener}>
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
                        <TweetTextDiv>
                          {highlightPattern(hashedText, /@\w+/gi, HashtagLink)}
                        </TweetTextDiv>
                      </div>
                      <div>
                        <div>
                          {tweetImages &&
                            tweetImages.map((obj) =>
                              obj.id === tweet.id
                                ? obj.images.map((img, idx) => (
                                    <TweetImageContainer key={idx}>
                                      <img
                                        loading='lazy'
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
                        <CommentIconContainer onClick={replyOpener}>
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
          </BorderDiv>
        </PositionDiv>
      </Suspense>
    </>
  )
}

export default TweetTemplate
