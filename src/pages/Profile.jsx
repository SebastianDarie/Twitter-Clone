import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from '../hooks/useRouter'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  BackgroundHover,
  BackSvg,
  GrowDiv,
  MainContainer,
  MainDiv,
  MainFlexer,
  MainHeaderContainer,
  PointerColumn,
  PointerEnder,
  PointerFlexer,
  PointerHeader,
  PointerHeight,
  PointerPadding,
  PointerText,
  PointerTitleBlack,
  ProfileContainer,
} from '../components/common/GlobalStyles.js'
import ProfileView from '../components/common/profile/ProfileView.jsx'
import RightScreen from '../components/layout/RightScreen.jsx'

const Profile = () => {
  const router = useRouter()
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  const users = useSelector((state) => state.firestore.ordered.users)

  const currName = router.pathname.slice(1, router.pathname.length)

  const currProfile = users?.find((user) => user.username === currName)

  return (
    <MainFlexer>
      <MainDiv>
        <GrowDiv>
          <MainContainer>
            <ProfileContainer>
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
                          <PointerColumn>
                            <PointerTitleBlack>
                              {currProfile?.name}
                            </PointerTitleBlack>
                            <PointerText>
                              {currProfile?.tweets.length} Tweets
                            </PointerText>
                          </PointerColumn>
                          <PointerEnder />
                        </PointerFlexer>
                      </PointerPadding>
                    </div>
                  </PointerHeight>
                </PointerHeader>
              </MainHeaderContainer>

              <ProfileView
                auth={auth}
                currProfile={currProfile}
                profile={profile}
              />
            </ProfileContainer>

            <RightScreen />
          </MainContainer>
        </GrowDiv>
      </MainDiv>
    </MainFlexer>
  )
}

export default Profile
