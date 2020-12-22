import React, { useEffect } from 'react'
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
  BackSvg,
  CommentIconContainer,
  DescriptionDiv,
  DescriptionText,
  IconsFlexer,
  InitialTweet,
  LikesIconContainer,
  NumberStat,
  PaddingArticle,
  PointerEnder,
  PointerFlexer,
  PointerTitle,
  RetweetIconContainer,
  RowMargin,
  StatMargin,
  StatProperty,
  StatsPadding,
  TextMargin,
  TextWrapper,
} from './TweetView'
import RightScreen from '../../layout/RightScreen.jsx'
import TweetTemplate from './TweetTemplate.jsx'
import formatTime from '../../../utils/formatTime'
import {
  replyHandler,
  retweetHandler,
  likeHandler,
} from '../../../utils/tweetHandlers'

const TweetView = () => {
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
  const type = useSelector((state) => state.image.type)

  const currTweet = tweets?.find((tweet) => tweet.id === router.query.id)
  const tweetCreator = users?.find((user) => user.id === currTweet.userID)

  const fullReplies = tweets?.filter((tweet) =>
    currTweet?.replies.includes(tweet.id)
  )

  const liked = currTweet?.likes.includes(auth.uid)
  const retweeted = currTweet?.retweets.includes(auth.uid)

  useEffect(() => {
    if (currTweet.replyTo) {
      const mainTweet = tweets.find((tweet) => tweet.id === currTweet.replyTo)
      console.log(mainTweet)
    }
  }, [currTweet.replyTo])
  return (
    <MainFlexer style={{ height: '100vh' }}>
      <MainDiv>
        <GrowDiv>
          <MainContainer>
            <MainTweetContainer>
              <div>
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
                              <TextMargin>
                                <TextWrapper>{currTweet?.text}</TextWrapper>
                              </TextMargin>

                              {router.location.state
                                ? router.location.state.images.map(
                                    (image, idx) => (
                                      <TweetImageContainer key={idx}>
                                        <img
                                          src={image}
                                          alt='tweet-img'
                                          style={{
                                            height: '100%',
                                            width: '100%',
                                          }}
                                        />
                                      </TweetImageContainer>
                                    )
                                  )
                                : null}

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
                                  retweeted={retweeted}
                                  onClick={(e) =>
                                    retweetHandler(
                                      e,
                                      retweeted,
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
                                  liked={liked}
                                  onClick={(e) =>
                                    likeHandler(
                                      e,
                                      liked,
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
                              modalState={modalState}
                              closeModal={closeModal}
                              openModal={openModal}
                              users={users}
                              profile={profile}
                              userID={auth.uid}
                              tweet={tweet}
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
              </div>
            </MainTweetContainer>
            <RightScreen />
          </MainContainer>
        </GrowDiv>
      </MainDiv>
    </MainFlexer>
  )
}

export default TweetView
