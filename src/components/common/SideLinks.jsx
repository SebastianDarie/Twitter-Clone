import { useSelector } from 'react-redux'
import { useRouter } from '../../hooks/useRouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faBookmark,
  faEllipsisH,
  faEnvelope,
  faHashtag,
  faHome,
  faList,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { HoverDiv, NoHoverLink } from './GlobalStyles'
import { IconText, LinkContainer } from './SideLinks'

const SideLinks = () => {
  const router = useRouter()

  const profile = useSelector((state) => state.firebase.profile)

  return (
    <>
      <LinkContainer>
        <NoHoverLink to='/'>
          <HoverDiv selected={router.pathname === '/' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faHome} />
            <IconText>Home</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
      <LinkContainer>
        <NoHoverLink to='/explore'>
          <HoverDiv selected={router.pathname === '/explore' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faHashtag} />
            <IconText>Explore</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
      <LinkContainer>
        <NoHoverLink to='/notifications'>
          <HoverDiv
            selected={router.pathname === '/notifications' ? true : false}
          >
            <FontAwesomeIcon size='lg' icon={faBell} />
            <IconText>Notifications</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
      <LinkContainer>
        <NoHoverLink to='/messages'>
          <HoverDiv selected={router.pathname === '/messages' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faEnvelope} />
            <IconText>Messages</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
      <LinkContainer>
        <NoHoverLink to='/bookmarks'>
          <HoverDiv selected={router.pathname === '/bookmarks' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faBookmark} />
            <IconText>Bookmarks</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
      <LinkContainer>
        <NoHoverLink to='/lists'>
          <HoverDiv selected={router.pathname === '/lists' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faList} />
            <IconText>Lists</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
      <LinkContainer>
        <NoHoverLink to={`/${profile.username}`}>
          <HoverDiv
            selected={
              router.pathname === `/${profile.username}`
                ? true
                : router.pathname === `/${profile.username}/with_replies`
                ? true
                : router.pathname === `/${profile.username}/media`
                ? true
                : router.pathname === `/${profile.username}/likes`
                ? true
                : false
            }
          >
            <FontAwesomeIcon size='lg' icon={faUser} />
            <IconText>Profile</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
      <LinkContainer>
        <NoHoverLink to='/'>
          <HoverDiv>
            <FontAwesomeIcon size='lg' icon={faEllipsisH} />
            <IconText>More</IconText>
          </HoverDiv>
        </NoHoverLink>
      </LinkContainer>
    </>
  )
}

export default SideLinks
