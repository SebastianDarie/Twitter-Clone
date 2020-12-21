import React from 'react'
import { Link } from 'react-router-dom'
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

const FollowProfile = ({ imageURL, name, username }) => {
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
              <FollowBtn>Follow</FollowBtn>
            </FollowBtnContainer>
          </InnerDiv>
        </ProfileName>
      </ProfileInfo>
    </ProfileInfoContainer>
  )
}

export default FollowProfile
