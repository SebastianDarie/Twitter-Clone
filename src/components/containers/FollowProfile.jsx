import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileImage } from '../common/GlobalStyles'
import {
  FollowBtn,
  FollowBtnContainer,
  ImageLink,
  InnerDiv,
  LowerName,
  LowerText,
  ProfileImageDiv,
  ProfileInfo,
  ProfileInfoContainer,
  ProfileName,
  ProfileText,
  UpperName,
  UpperText,
} from './FollowProfile'

const FollowProfile = ({ imageURL, name, profile }) => {
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
              <Link to={`/${profile}`} style={{ textDecoration: 'none' }}>
                <div>
                  <UpperName>
                    <UpperText>{name}</UpperText>
                  </UpperName>
                  <LowerName>
                    <LowerText>@{profile}</LowerText>
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
