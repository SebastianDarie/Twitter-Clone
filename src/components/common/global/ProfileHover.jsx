import { useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useRouter } from '../../../hooks/useRouter'
import {
  Blueish,
  LowerName,
  LowerText,
  ProfileImage,
  ProfileImageDiv,
  UpperName,
  UpperText,
} from '../GlobalStyles'
import { FollowBtn, FollowBtnContainer } from '../../containers/FollowProfile'
import { FollowingMargin } from '../profile/ProfileView'
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
  const router = useRouter()

  let followed = profile.following?.includes(currProfile?.id)
  let following = profile.followers?.includes(currProfile?.id)
  return (
    <HoverPosition>
      <Box>
        <DimensionsDiv>
          <TopFlexer>
            <ProfileImageDiv>
              <ProfileImage imageURL={currProfile?.photoURL} />
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
          </NameMargin>

          <ContentMargin>
            <Blueish>{currProfile?.bio}</Blueish>
          </ContentMargin>
          <ContentMargin>
            <FollowingMargin>
              <Blueish hover='hover'>
                <span
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    router.history.push(`/${currProfile?.username}/following`)
                  }}
                >
                  {currProfile?.following.length}
                  <span style={{ color: 'rgb(91,112,131)', whiteSpace: 'pre' }}>
                    {' '}
                    Following
                  </span>
                </span>
              </Blueish>
            </FollowingMargin>
            <Blueish hover='hover'>
              <span
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  router.history.push(`/${currProfile?.username}/followers`)
                }}
              >
                {currProfile?.followers.length}
                <span style={{ color: 'rgb(91,112,131)', whiteSpace: 'pre' }}>
                  {' '}
                  Followers
                </span>
              </span>
            </Blueish>
          </ContentMargin>
        </DimensionsDiv>
      </Box>
    </HoverPosition>
  )
}

export default ProfileHover
