import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useRouter } from '../../../hooks/useRouter'
import { Link } from 'react-router-dom'
import { actions as toastrActions } from 'react-redux-toastr'
import { closeModal, openModal } from '../../../actions/modalActions'
import {
  addImage,
  removeImage,
  removeAllImages,
  setPreviewImage,
  setTweetImage,
} from '../../../actions/imageActions'
import { reply } from '../../../actions/tweetActions'
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
import ReplyModal from './ReplyModal.jsx'
import RightScreen from '../../layout/RightScreen.jsx'
import TweetTemplate from './TweetTemplate.jsx'
import formatTime from '../../../utils/formatTime'
import {
  replyHandler,
  retweetHandler,
  likeHandler,
} from '../../../utils/tweetHandlers'

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

  useEffect(() => {
    if (currTweet.replyTo) {
      const mainTweet = tweets.find((tweet) => tweet.id === currTweet.replyTo)
      setMainTweet(mainTweet)
    }

    return () => setMainTweet(null)
  }, [currTweet.replyTo, tweets])

  const outsideClickHandler = () => {
    if (modalState.open) {
      dispatch(removeAllImages())
      dispatch(closeModal())
    }
  }
  return (
    <>
      {modalState.el === currTweet.id ? (
        <BlackOut modalState={modalState} onClick={outsideClickHandler} />
      ) : null}
      <div style={{ left: '27%' }}>
        <ReplyModal
          dispatch={dispatch}
          firebase={firebase}
          button={button}
          modalState={modalState}
          closeModal={closeModal}
          reply={reply}
          tweet={currTweet}
          tweetCreator={tweetCreator}
          profile={profile}
          userID={auth.uid}
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
      </div>
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
                        {mainTweet && (
                          <TweetTemplate
                            key={mainTweet.id}
                            dispatch={dispatch}
                            firebase={firebase}
                            reply={reply}
                            replyView={true}
                            modalState={modalState}
                            closeModal={closeModal}
                            openModal={openModal}
                            users={users}
                            profile={profile}
                            userID={auth.uid}
                            tweet={mainTweet}
                            tweetImages={tweetImages}
                            setTweetImage={setTweetImage}
                            type={type}
                            images={images}
                            previews={previews}
                            addImage={addImage}
                            removeImage={removeImage}
                            removeAllImages={removeAllImages}
                            setPreviewImage={setPreviewImage}
                            toastrActions={toastrActions}
                          />
                        )}
                        <PaddingArticle>
                          <ColumnDiv>
                            <RowDiv>
                              <TweetPaddingTop />
                            </RowDiv>

                            <RowMargin>
                              <ProfileImageDiv>
                                <div>
                                  <ImageLink>
                                    <ProfileImage
                                      imageURL={tweetCreator?.photoURL}
                                    />
                                  </ImageLink>
                                </div>
                              </ProfileImageDiv>

                              <InnerDiv>
                                <ProfileText>
                                  <Link
                                    to={`/${tweetCreator?.username}`}
                                    style={{ textDecoration: 'none' }}
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
                                  </Link>
                                </ProfileText>

                                <DotIconContainer
                                  style={{ marginBottom: '10px' }}
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
                                <TextWrapper>{currTweet?.text}</TextWrapper>
                              </TextMargin>

                              {tweetImages &&
                                tweetImages.map((obj) =>
                                  obj.id === currTweet.id
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
                                  onClick={(e) =>
                                    replyHandler(
                                      e,
                                      dispatch,
                                      openModal,
                                      removeAllImages,
                                      currTweet
                                    )
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

                        {fullReplies &&
                          fullReplies.map((tweet) => (
                            <TweetTemplate
                              key={tweet.id}
                              dispatch={dispatch}
                              firebase={firebase}
                              reply={reply}
                              replyView={false}
                              modalState={modalState}
                              closeModal={closeModal}
                              openModal={openModal}
                              users={users}
                              profile={profile}
                              userID={auth.uid}
                              tweet={tweet}
                              tweetImages={tweetImages}
                              setTweetImage={setTweetImage}
                              type={type}
                              images={images}
                              previews={previews}
                              addImage={addImage}
                              removeImage={removeImage}
                              removeAllImages={removeAllImages}
                              setPreviewImage={setPreviewImage}
                              toastrActions={toastrActions}
                            />
                          ))}
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
