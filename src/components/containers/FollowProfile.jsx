import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import {
  ImageLink,
  InnerDiv,
  LowerName,
  LowerText,
  NoHoverLink,
  ProfileImageDiv,
  ProfileImage,
  ProfileText,
  UpperName,
  UpperText,
} from '../common/GlobalStyles'
import {
  FollowBtn,
  FollowBtnContainer,
  ProfileInfo,
  ProfileInfoContainer,
  ProfileName,
} from './FollowProfile'
import HoverLink from '../common/global/HoverLink'
import followHandler from '../../utils/followHandler'

const FollowProfile = ({ user }) => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)

  const followed = profile.following?.includes(user.id)

  return (
    <ProfileInfoContainer>
      <ProfileInfo>
        <HoverLink
          auth={auth}
          currProfile={user}
          profile={profile}
          position='relative'
        >
          <ProfileImageDiv>
            <div>
              <ImageLink to={`/${user.username}`}>
                <ProfileImage imageURL={user.photoURL} />
              </ImageLink>
            </div>
          </ProfileImageDiv>
        </HoverLink>
        <ProfileName>
          <InnerDiv>
            <ProfileText>
              <NoHoverLink to={`/${user.username}`}>
                <div>
                  <UpperName>
                    <UpperText>{user.name}</UpperText>
                  </UpperName>
                  <LowerName>
                    <LowerText>@{user.username}</LowerText>
                  </LowerName>
                </div>
              </NoHoverLink>
            </ProfileText>
            <FollowBtnContainer>
              <FollowBtn
                followed={followed}
                onClick={() =>
                  followHandler(
                    followed,
                    dispatch,
                    user.id,
                    auth,
                    profile,
                    firebase
                  )
                }
              ></FollowBtn>
            </FollowBtnContainer>
          </InnerDiv>
        </ProfileName>
      </ProfileInfo>
    </ProfileInfoContainer>
  )
}

export default FollowProfile
