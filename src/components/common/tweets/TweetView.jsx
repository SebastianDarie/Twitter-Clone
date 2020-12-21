import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from '../../../hooks/useRouter'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import {
  BackgroundHover,
  ColumnDiv,
  ImageLink,
  InnerDiv,
  GrowDiv,
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
  RowDiv,
  TweetPaddingTop,
  UpperName,
  UpperText,
  DotIconContainer,
} from '../GlobalStyles'
import {
  BackSvg,
  InitialTweet,
  PaddingArticle,
  PointerEnder,
  PointerFlexer,
  PointerTitle,
  RowMargin,
} from './TweetView'
import RightScreen from '../../layout/RightScreen.jsx'

const TweetView = () => {
  const router = useRouter()
  const tweets = useSelector((state) => state.firestore.ordered.tweets)
  const users = useSelector((state) => state.firestore.ordered.users)

  const currTweet = tweets?.find((tweet) => tweet.id === router.query.id)
  const tweetCreator = users?.find((user) => user.id === currTweet.userID)
  console.log(currTweet, tweetCreator)
  return (
    <MainFlexer>
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
                          </ColumnDiv>
                        </PaddingArticle>
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
