import { useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import {
  Blueish,
  ImageLink,
  LowerName,
  LowerText,
  NoHoverLink,
  ProfileImage,
  ProfileImageDiv,
  UpperName,
  UpperText,
} from '../GlobalStyles'
import { FollowBtn, FollowBtnContainer } from '../../containers/FollowProfile'
import { FollowingLink, FollowingMargin } from '../profile/ProfileView'
import { BackgroundDiv } from '../profile/ProfileCard'
import {
  Box,
  ContentMargin,
  DimensionsDiv,
  HoverPosition,
  NameMargin,
  TopFlexer,
} from './ProfileHover'

const ProfileHover = ({ auth, currProfile, profile }) => {
  const dispatch = useDispatch()
  const firebase = useFirebase()

  let followed = profile.following?.includes(currProfile?.id)
  let following = profile.followers?.includes(currProfile?.id)
  return (
    <HoverPosition>
      <Box>
        <DimensionsDiv>
          <TopFlexer>
            <ProfileImageDiv>
              <ImageLink to={`/${currProfile?.username}`}>
                <ProfileImage imageURL={currProfile?.photoURL} />
              </ImageLink>
            </ProfileImageDiv>
            <FollowBtnContainer>
              <FollowBtn
                followed={followed}
                onClick={async (e) => {
                  e.preventDefault()
                  e.stopPropagation()

                  const followHandler = await import(
                    '../../../utils/followHandler'
                  )
                  followHandler.default(
                    followed,
                    dispatch,
                    currProfile?.id,
                    auth,
                    profile,
                    firebase
                  )
                }}
              ></FollowBtn>
            </FollowBtnContainer>
          </TopFlexer>

          <NameMargin>
            <NoHoverLink to={`/${currProfile?.username}`}>
              <div>
                <UpperName>
                  <UpperText>{currProfile?.name}</UpperText>
                </UpperName>
                <LowerName>
                  <LowerText>@{currProfile?.username}</LowerText>
                  {following && (
                    <BackgroundDiv>
                      <span>Follows you</span>
                    </BackgroundDiv>
                  )}
                </LowerName>
              </div>
            </NoHoverLink>
          </NameMargin>

          <ContentMargin>
            <Blueish>{currProfile?.bio}</Blueish>
          </ContentMargin>
          <ContentMargin>
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
          </ContentMargin>
        </DimensionsDiv>
      </Box>
    </HoverPosition>
  )
}

export default ProfileHover
