import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useRouter } from '../hooks/useRouter'
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
} from '../components/common/GlobalStyles.js'
import ProfileView from '../components/common/profile/ProfileView.jsx'

const Profile = () => {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const router = useRouter()
  const auth = useSelector((state) => state.firebase.auth)
  const profile = useSelector((state) => state.firebase.profile)
  const users = useSelector((state) => state.firestore.ordered.users)
  const modalState = useSelector((state) => state.modal)

  const currName = router.pathname
    .slice(1, router.pathname.length)
    .replace(/\/[^/]*$/gi, '')

  const currProfile = users?.find((user) => user.username === currName)

  return (
    <ProfileContainer>
      <MainHeaderContainer>
        <PointerHeader>
          <PointerHeight>
            <div>
              <PointerPadding>
                <PointerFlexer>
                  <Link to='/'>
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
                    <PointerText>
                      {currProfile?.tweets.length} Tweets
                    </PointerText>
                  </PointerColumn>
                  <PointerEnder />
                </PointerFlexer>
              </PointerPadding>
            </div>
          </PointerHeight>
        </PointerHeader>
      </MainHeaderContainer>

      <ProfileView
        auth={auth}
        currProfile={currProfile}
        dispatch={dispatch}
        firebase={firebase}
        profile={profile}
        modalState={modalState}
      />
    </ProfileContainer>
  )
}

export default Profile
