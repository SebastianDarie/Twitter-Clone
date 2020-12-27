import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useRouter } from '../../../hooks/useRouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  BackgroundHover,
  BackSvg,
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
} from '../GlobalStyles.js'
import { Nav, ProfileNavLink } from './ProfileNav'
import ProfileCard from './ProfileCard.jsx'

const FollowFeed = () => {
  const router = useRouter()
  //   const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  const users = useSelector((state) => state.firestore.ordered.users)

  const currName = router.pathname.slice(1, -10)

  const currProfile = users?.find((user) => user.username === currName)

  return (
    <ProfileContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MainHeaderContainer>
          <PointerHeader>
            <PointerHeight>
              <div>
                <PointerPadding>
                  <PointerFlexer>
                    <Link to={`/${router.match.params.profile}`}>
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
                      <PointerTitleBlack>{currProfile?.name}</PointerTitleBlack>
                      <PointerText>@{currProfile?.username} </PointerText>
                    </PointerColumn>
                    <PointerEnder />
                  </PointerFlexer>
                </PointerPadding>
              </div>
            </PointerHeight>
          </PointerHeader>
        </MainHeaderContainer>

        <Nav>
          <ProfileNavLink
            to={`/${currProfile?.username}/followers`}
            selected={
              `${router.match.url}` === `/${currProfile?.username}/followers`
                ? true
                : false
            }
          >
            Followers
          </ProfileNavLink>
          <ProfileNavLink
            to={`/${currProfile?.username}/following`}
            selected={
              `${router.match.url}` === `/${currProfile?.username}/following`
                ? true
                : false
            }
          >
            Following
          </ProfileNavLink>
        </Nav>

        {currProfile && router.match.url.includes('following')
          ? currProfile?.following.map((user) => (
              <ProfileCard key={user} profile={profile} userID={user} />
            ))
          : currProfile?.followers.map((user) => (
              <ProfileCard key={user} profile={profile} userID={user} />
            ))}
      </div>
    </ProfileContainer>
  )
}

export default FollowFeed
