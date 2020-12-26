import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import {
  ImageLink,
  InnerDiv,
  LowerName,
  LowerText,
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
import followHandler from '../../utils/followHandler'

const FollowProfile = ({ imageURL, name, username, followID }) => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)

  const followed = profile.following?.includes(followID)

  return (
    <ProfileInfoContainer>
      <ProfileInfo>
        <ProfileImageDiv>
          <div>
            <ImageLink>
              <ProfileImage imageURL={imageURL} />
            </ImageLink>
          </div>
        </ProfileImageDiv>
        <ProfileName>
          <InnerDiv>
            <ProfileText>
              <Link to={`/${username}`} style={{ textDecoration: 'none' }}>
                <div>
                  <UpperName>
                    <UpperText>{name}</UpperText>
                  </UpperName>
                  <LowerName>
                    <LowerText>@{username}</LowerText>
                  </LowerName>
                </div>
              </Link>
            </ProfileText>
            <FollowBtnContainer>
              <FollowBtn
                followed={followed}
                onClick={() =>
                  followHandler(
                    followed,
                    dispatch,
                    followID,
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
