import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import {
  DefaultCover,
  FollowingLink,
  FollowingMargin,
  FollowStats,
  ImageBox,
  JoinedContainer,
  JoinedDiv,
  JoinSpan,
  Name,
  NameContainer,
  ProfileDetailsBox,
  ProfileViewContainer,
  TopContainer,
  Username,
} from './ProfileView'
import { FollowBtn, FollowBtnContainer } from '../../containers/FollowProfile'
import ProfileNav from './ProfileNav.jsx'
import followHandler from '../../../utils/followHandler'

const ProfileView = ({ auth, currProfile, dispatch, firebase, profile }) => {
  const followed = profile.following?.includes(currProfile?.id)

  const formatTime = (seconds) => {
    let time = new Date(Date.UTC(1970, 0, 1))
    time.setUTCSeconds(seconds)
    return time.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <ProfileViewContainer>
      <div style={{ width: '100%' }}>
        <DefaultCover />
        <ProfileDetailsBox>
          <TopContainer>
            <ImageBox>
              <img
                src={currProfile?.photoURL}
                alt='profile'
                style={{
                  borderRadius: 999,
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
            </ImageBox>

            <FollowBtnContainer style={{ marginBottom: 10 }}>
              <FollowBtn
                followed={followed}
                onClick={() =>
                  followHandler(
                    followed,
                    dispatch,
                    currProfile.id,
                    auth,
                    profile,
                    firebase
                  )
                }
              ></FollowBtn>
            </FollowBtnContainer>
          </TopContainer>
          <NameContainer>
            <Name>{currProfile?.name}</Name>
            <Username>@{currProfile?.username}</Username>
          </NameContainer>
          <JoinedContainer>
            <JoinedDiv>
              <JoinSpan>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ marginRight: 5 }}
                />
                Joined {formatTime(currProfile?.joined.seconds)}
              </JoinSpan>
            </JoinedDiv>
          </JoinedContainer>
          <FollowStats>
            <FollowingMargin>
              <FollowingLink to={`${currProfile?.username}/following`}>
                <span>
                  {currProfile?.following.length}
                  <span style={{ color: 'rgb(91,112,131)', whiteSpace: 'pre' }}>
                    {' '}
                    Following
                  </span>
                </span>
              </FollowingLink>
            </FollowingMargin>
            <div>
              <FollowingLink to={`${currProfile?.username}/followers`}>
                <span>
                  {currProfile?.followers.length}
                  <span style={{ color: 'rgb(91,112,131)', whiteSpace: 'pre' }}>
                    {' '}
                    Followers
                  </span>
                </span>
              </FollowingLink>
            </div>
          </FollowStats>
        </ProfileDetailsBox>

        <ProfileNav currProfile={currProfile} />
      </div>
    </ProfileViewContainer>
  )
}

export default ProfileView
