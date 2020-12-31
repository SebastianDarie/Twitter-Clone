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
} from '../GlobalStyles'
import {
  FollowBtn,
  FollowBtnContainer,
  ProfileInfo,
  ProfileName,
} from '../../containers/FollowProfile'
import {
  BackgroundDiv,
  BioContainer,
  BorderContainer,
  Column,
  PaddingContainer,
} from './ProfileCard'
import followHandler from '../../../utils/followHandler'

const ProfileCard = ({ profile, userID }) => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const auth = useSelector((state) => state.firebase.auth)
  const users = useSelector((state) => state.firestore.ordered.users)

  const currUser = users?.find((user) => user.id === userID)
  const followed = profile.following?.includes(currUser?.id)
  const following = profile.followers?.includes(currUser?.id)

  return (
    <BorderContainer>
      <PaddingContainer>
        <ProfileInfo style={{ width: '100%' }}>
          <ProfileImageDiv>
            <ImageLink>
              <ProfileImage imageURL={currUser?.photoURL} />
            </ImageLink>
          </ProfileImageDiv>
          <Column>
            <ProfileName>
              <InnerDiv>
                <ProfileText>
                  <NoHoverLink to={`/${currUser?.username}`}>
                    <UpperName>
                      <UpperText>{currUser?.name}</UpperText>
                    </UpperName>
                    <LowerName>
                      <LowerText>@{currUser?.username}</LowerText>
                      {following && (
                        <BackgroundDiv>
                          <span>Follows you</span>
                        </BackgroundDiv>
                      )}
                    </LowerName>
                  </NoHoverLink>
                </ProfileText>
                <FollowBtnContainer>
                  <FollowBtn
                    followed={followed}
                    onClick={() =>
                      followHandler(
                        followed,
                        dispatch,
                        userID,
                        auth,
                        profile,
                        firebase
                      )
                    }
                  ></FollowBtn>
                </FollowBtnContainer>
              </InnerDiv>
            </ProfileName>

            <BioContainer>{currUser?.bio}</BioContainer>
          </Column>
        </ProfileInfo>
      </PaddingContainer>
    </BorderContainer>
  )
}

export default ProfileCard
