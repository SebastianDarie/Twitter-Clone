import { useEffect, useRef, useState, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useRouter } from '../../../hooks/useRouter'
import { Link } from 'react-router-dom'
import { actions as toastrActions } from 'react-redux-toastr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faComment,
  faEllipsisH,
  faHeart,
  faRetweet,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import {
  BackgroundHover,
  BackSvg,
  BlackOut,
  ColumnDiv,
  ImageLink,
  InnerDiv,
  GrowDiv,
  HashtagLink,
  LikeHover,
  LowerName,
  LowerText,
  MainContainer,
  MainDiv,
  MainFlexer,
  MainHeaderContainer,
  MainTweetContainer,
  PointerEnder,
  PointerFlexer,
  PointerTitle,
  PointerHeader,
  PointerHeight,
  PointerPadding,
  ProfileImage,
  ProfileImageDiv,
  ProfileText,
  RetweetHover,
  RowDiv,
  TweetImageContainer,
  TweetPaddingTop,
  UpperName,
  UpperText,
  DotIconContainer,
  NoHoverLink,
} from '../GlobalStyles'
import {
  CommentIconContainer,
  DescriptionDiv,
  DescriptionText,
  IconsFlexer,
  InitialTweet,
  LikesIconContainer,
  NumberStat,
  PaddingArticle,
  ReplyLink,
  ReplyText,
  RetweetIconContainer,
  RowMargin,
  StatMargin,
  StatProperty,
  StatsPadding,
  TextMargin,
  TextWrapper,
} from './TweetView'
import formatTime from '../../../utils/formatTime'
import highlightPattern from '../../../utils/highlightPattern'
import {
  replyHandler,
  retweetHandler,
  likeHandler,
} from '../../../utils/tweetHandlers'

const TweetTemplate = lazy(() => import('./TweetTemplate.jsx'))
const RightScreen = lazy(() => import('../../layout/RightScreen.jsx'))
const ReplyModal = lazy(() => import('./ReplyModal.jsx'))
const DeleteMenu = lazy(() => import('../global/DeleteMenu.jsx'))
//const HoverLink = lazy(() => import('../global/HoverLink'))

const TweetView = () => {
  const [mainTweet, setMainTweet] = useState(null)
  const button = useRef()

  const dispatch = useDispatch()
  const firebase = useFirebase()
  const router = useRouter()
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  const tweets = useSelector((state) => state.firestore.ordered.tweets)
  const users = useSelector((state) => state.firestore.ordered.users)
  const modalState = useSelector((state) => state.modal)
  const images = useSelector((state) => state.image.imgs)
  const previews = useSelector((state) => state.image.previewImgs)
  const tweetImages = useSelector((state) => state.image.tweetImgs)
  const type = useSelector((state) => state.image.type)

  const currTweet = tweets?.find((tweet) => tweet.id === router.query.id)
  const tweetCreator = users?.find((user) => user.id === currTweet.userID)

  const fullReplies = tweets?.filter((tweet) =>
    currTweet?.replies.includes(tweet.id)
  )

  const currLiked = currTweet?.likes.includes(auth.uid)
  const currRetweeted = currTweet?.retweets.includes(auth.uid)

  const hashedText = highlightPattern(currTweet?.text, /#\w+/gi, HashtagLink)

  useEffect(() => {
    if (currTweet.replyTo) {
      const mainTweet = tweets.find((tweet) => tweet.id === currTweet.replyTo)
      setMainTweet(mainTweet)
    }

    return () => setMainTweet(null)
  }, [currTweet?.replyTo, tweets])

  const menuOpener = async (e) => {
    e.stopPropagation()
    const { openMenu, closeMenu } = await import(
      '../../../actions/modalActions'
    )
    !modalState.menu ? dispatch(openMenu(currTweet.id)) : dispatch(closeMenu())
  }

  const outsideClickHandler = async () => {
    if (modalState.open) {
      const { removeAllImages } = await import('../../../actions/imageActions')
      const { closeModal } = await import('../../../actions/modalActions')

      dispatch(removeAllImages())
      dispatch(closeModal())
    }
  }
  return (
    <>
      <Suspense fallback={null}>
        {modalState.el === currTweet.id ? (
          <BlackOut modalState={modalState} onClick={outsideClickHandler} />
        ) : null}
        <div style={{ left: '27%' }}>
          <ReplyModal
            dispatch={dispatch}
            firebase={firebase}
            button={button}
            modalState={modalState}
            tweet={currTweet}
            tweetCreator={tweetCreator}
            profile={profile}
            userID={auth.uid}
            formatTime={formatTime}
            type={type}
            images={images}
            previews={previews}
            toastrActions={toastrActions}
          />
        </div>
        <DeleteMenu
          dispatch={dispatch}
          firebase={firebase}
          modalState={modalState}
          profile={profile}
          tweet={currTweet}
          userID={auth.uid}
          toastrActions={toastrActions}
        />
      </Suspense>
      <MainFlexer>
        <MainDiv>
          <GrowDiv>
            <MainContainer>
              <MainTweetContainer>
                <MainHeaderContainer>
                  <PointerHeader>
                    <PointerHeight>
                      <div>
                        <PointerPadding>
                          <PointerFlexer>
                            <Link
                              to={
                                router.location.state
                                  ? router.location.state.prev
                                  : '/'
                              }
                            >
                              <BackSvg>
                                <BackgroundHover>
                                  <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    size='1x'
                                    color='rgb(29,161,242)'
                                  />
                                </BackgroundHover>
                              </BackSvg>
                            </Link>
                            <PointerTitle>Tweet</PointerTitle>
                            <PointerEnder />
                          </PointerFlexer>
                        </PointerPadding>
                      </div>
                    </PointerHeight>
                  </PointerHeader>
                </MainHeaderContainer>

                <div>
                  <section>
                    <div style={{ position: 'relative' }}>
                      <InitialTweet>
                        <Suspense fallback={null}>
                          {mainTweet && (
                            <TweetTemplate
                              key={mainTweet.id}
                              dispatch={dispatch}
                              firebase={firebase}
                              replyView={true}
                              modalState={modalState}
                              users={users}
                              auth={auth}
                              profile={profile}
                              tweet={mainTweet}
                              tweetImages={tweetImages}
                              type={type}
                              images={images}
                              previews={previews}
                              toastrActions={toastrActions}
                            />
                          )}
                        </Suspense>
                        <PaddingArticle>
                          <ColumnDiv>
                            <RowDiv>
                              <TweetPaddingTop />
                            </RowDiv>

                            <RowMargin>
                              <ProfileImageDiv>
                                <div>
                                  <ImageLink to={`/${tweetCreator?.username}`}>
                                    <ProfileImage
                                      height='49px'
                                      width='49px'
                                      loading='lazy'
                                      imageURL={tweetCreator?.photoURL}
                                    />
                                  </ImageLink>
                                </div>
                              </ProfileImageDiv>

                              <InnerDiv>
                                <ProfileText>
                                  <NoHoverLink
                                    to={`/${tweetCreator?.username}`}
                                  >
                                    <div>
                                      <UpperName>
                                        <UpperText>
                                          {tweetCreator?.name}
                                        </UpperText>
                                      </UpperName>
                                      <LowerName>
                                        <LowerText>
                                          @{tweetCreator?.username}
                                        </LowerText>
                                      </LowerName>
                                    </div>
                                  </NoHoverLink>
                                </ProfileText>

                                <DotIconContainer
                                  style={{ marginBottom: '10px' }}
                                  onClick={menuOpener}
                                >
                                  <BackgroundHover>
                                    <FontAwesomeIcon
                                      icon={faEllipsisH}
                                      size='sm'
                                    />
                                  </BackgroundHover>
                                </DotIconContainer>
                              </InnerDiv>
                            </RowMargin>

                            <div>
                              {currTweet.replyTo && (
                                <TextMargin>
                                  <ReplyText>
                                    Replying to{' '}
                                    <ReplyLink to={`${mainTweet?.username}`}>
                                      @{mainTweet?.username}
                                    </ReplyLink>
                                  </ReplyText>
                                </TextMargin>
                              )}

                              <TextMargin>
                                <TextWrapper>
                                  {highlightPattern(
                                    hashedText,
                                    /@\w+/gi,
                                    HashtagLink
                                  )}
                                </TextWrapper>
                              </TextMargin>

                              {tweetImages &&
                                tweetImages.map((obj) =>
                                  obj.id === currTweet.id
                                    ? obj.images.map((img, idx) => (
                                        <TweetImageContainer key={idx}>
                                          <img
                                            height='285px'
                                            width='568px'
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

                              <DescriptionDiv>
                                <DescriptionText>
                                  {formatTime(currTweet?.timeStamp.seconds)}
                                </DescriptionText>
                              </DescriptionDiv>

                              <div
                                style={{
                                  display:
                                    currTweet?.retweets.length === 0 &&
                                    currTweet?.replies.length === 0 &&
                                    currTweet?.likes.length === 0
                                      ? 'none'
                                      : '',
                                }}
                              >
                                <StatsPadding>
                                  <StatMargin>
                                    <NumberStat>
                                      {currTweet?.retweets.length}{' '}
                                    </NumberStat>
                                    <StatProperty>Retweets</StatProperty>
                                  </StatMargin>
                                  <StatMargin>
                                    <NumberStat>
                                      {currTweet?.replies.length}{' '}
                                    </NumberStat>
                                    <StatProperty>Replies</StatProperty>
                                  </StatMargin>
                                  <div style={{ display: 'flex' }}>
                                    <NumberStat>
                                      {currTweet?.likes.length}{' '}
                                    </NumberStat>
                                    <StatProperty>Likes</StatProperty>
                                  </div>
                                </StatsPadding>
                              </div>

                              <IconsFlexer>
                                <CommentIconContainer
                                  onClick={() =>
                                    replyHandler(dispatch, currTweet)
                                  }
                                >
                                  <BackgroundHover>
                                    <FontAwesomeIcon
                                      icon={faComment}
                                      size='lg'
                                    />
                                  </BackgroundHover>
                                </CommentIconContainer>
                                <RetweetIconContainer
                                  currRetweeted={currRetweeted}
                                  onClick={(e) =>
                                    retweetHandler(
                                      e,
                                      currRetweeted,
                                      dispatch,
                                      currTweet,
                                      auth.uid,
                                      profile,
                                      firebase
                                    )
                                  }
                                >
                                  <RetweetHover>
                                    <FontAwesomeIcon
                                      icon={faRetweet}
                                      size='lg'
                                    />
                                  </RetweetHover>
                                </RetweetIconContainer>
                                <LikesIconContainer
                                  currLiked={currLiked}
                                  onClick={(e) =>
                                    likeHandler(
                                      e,
                                      currLiked,
                                      dispatch,
                                      currTweet,
                                      auth.uid,
                                      profile,
                                      firebase
                                    )
                                  }
                                >
                                  <LikeHover>
                                    <FontAwesomeIcon icon={faHeart} size='lg' />
                                  </LikeHover>
                                </LikesIconContainer>
                                <CommentIconContainer>
                                  <BackgroundHover>
                                    <FontAwesomeIcon
                                      icon={faUpload}
                                      size='lg'
                                    />
                                  </BackgroundHover>
                                </CommentIconContainer>
                              </IconsFlexer>
                            </div>
                          </ColumnDiv>
                        </PaddingArticle>

                        <Suspense fallback={null}>
                          {fullReplies &&
                            fullReplies.map((tweet) => (
                              <TweetTemplate
                                key={tweet.id}
                                dispatch={dispatch}
                                firebase={firebase}
                                replyView={false}
                                modalState={modalState}
                                users={users}
                                auth={auth}
                                profile={profile}
                                tweet={tweet}
                                tweetImages={tweetImages}
                                type={type}
                                images={images}
                                previews={previews}
                                toastrActions={toastrActions}
                              />
                            ))}
                        </Suspense>
                      </InitialTweet>
                    </div>
                  </section>
                </div>
              </MainTweetContainer>
              <RightScreen />
            </MainContainer>
          </GrowDiv>
        </MainDiv>
      </MainFlexer>
    </>
  )
}

export default TweetView
