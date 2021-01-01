import { useRef, Suspense, lazy } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from '../GlobalStyles'
import {
  BioContainer,
  DefaultCover,
  FollowingLink,
  FollowingMargin,
  FollowStats,
  HeaderImageContainer,
  ImageBox,
  JoinedContainer,
  JoinedDiv,
  JoinSpan,
  Name,
  NameContainer,
  ProfileBlackout,
  ProfileDetailsBox,
  ProfileViewContainer,
  SetupBtn,
  TopContainer,
  Username,
} from './ProfileView'
import { FollowBtn, FollowBtnContainer } from '../../containers/FollowProfile'
import followHandler from '../../../utils/followHandler'

const ProfileModal = lazy(() => import('./ProfileModal.jsx'))
const ProfileNav = lazy(() => import('./ProfileNav.jsx'))

const ProfileView = ({
  auth,
  currProfile,
  dispatch,
  firebase,
  profile,
  modalState,
}) => {
  const background = useRef()
  const profileModal = useRef()
  const headerInput = useRef()
  const profileInput = useRef()

  const followed = profile.following?.includes(currProfile?.id)

  const formatTime = (seconds) => {
    let time = new Date(Date.UTC(1970, 0, 1))
    time.setUTCSeconds(seconds)
    return time.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  }

  const outsideClickHandler = async (e) => {
    if (modalState.profile) {
      if (
        e.target !== profileModal.current &&
        e.target === background.current
      ) {
        const { profileClose } = await import('../../../actions/modalActions')
        const { removePreviews } = await import('../../../actions/imageActions')

        dispatch(profileClose())
        dispatch(removePreviews())
        headerInput.current.value = null
        profileInput.current.value = null
      }
    }
  }

  return (
    <div onClick={outsideClickHandler}>
      <ProfileBlackout modalState={modalState} ref={background} />
      <Suspense fallback={null}>
        <ProfileModal
          currProfile={currProfile}
          firebase={firebase}
          modalState={modalState}
          profileModal={profileModal}
          headerInput={headerInput}
          profileInput={profileInput}
        />
      </Suspense>
      <ProfileViewContainer>
        <div style={{ width: '100%' }}>
          <HeaderImageContainer>
            {currProfile?.headerURL ? (
              <img
                height='199px'
                width='598px'
                loading='lazy'
                src={currProfile?.headerURL}
                alt='header'
                style={{ maxHeight: '100%', width: '100%' }}
              />
            ) : (
              <DefaultCover />
            )}
          </HeaderImageContainer>
          <ProfileDetailsBox>
            <TopContainer>
              <ImageBox>
                <ProfilePicture
                  height='142px'
                  width='142px'
                  loading='lazy'
                  currProfile={currProfile}
                />
              </ImageBox>

              <FollowBtnContainer style={{ marginBottom: 10 }}>
                {auth.uid !== currProfile?.id ? (
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
                ) : (
                  <SetupBtn
                    onClick={async () => {
                      const { profileOpen } = await import(
                        '../../../actions/modalActions'
                      )
                      dispatch(profileOpen('profile'))
                    }}
                  >
                    Set up profile
                  </SetupBtn>
                )}
              </FollowBtnContainer>
            </TopContainer>
            <NameContainer>
              <Name>{currProfile?.name}</Name>
              <Username>@{currProfile?.username}</Username>
            </NameContainer>
            <BioContainer>
              <JoinedDiv>{currProfile?.bio}</JoinedDiv>
            </BioContainer>
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
                    <span
                      style={{ color: 'rgb(91,112,131)', whiteSpace: 'pre' }}
                    >
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
                    <span
                      style={{ color: 'rgb(91,112,131)', whiteSpace: 'pre' }}
                    >
                      {' '}
                      Followers
                    </span>
                  </span>
                </FollowingLink>
              </div>
            </FollowStats>
          </ProfileDetailsBox>

          <Suspense fallback={null}>
            <ProfileNav currProfile={currProfile} />
          </Suspense>
        </div>
      </ProfileViewContainer>
    </div>
  )
}

export default ProfileView
