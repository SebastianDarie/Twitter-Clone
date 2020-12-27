import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from '../../hooks/useRouter'
import { Link } from 'react-router-dom'
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
import { HoverDiv } from './GlobalStyles'
import { IconText, LinkContainer } from './SideLinks'
//import { selectLink } from '../../actions/selectedActions'

const SideLinks = () => {
  //  const dispatch = useDispatch()
  const router = useRouter()

  const profile = useSelector((state) => state.firebase.profile)
  const selected = useSelector((state) => state.selected)

  // const selectHandler = (e) => {
  //   const arr = e.currentTarget.href.match(/\b(\w+)\b/g)
  //   dispatch(selectLink(arr[arr.length - 1]))
  // }

  return (
    <>
      <LinkContainer>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <HoverDiv selected={router.pathname === '/' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faHome} />
            <IconText>Home</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to='/explore' style={{ textDecoration: 'none' }}>
          <HoverDiv selected={router.pathname === '/explore' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faHashtag} />
            <IconText>Explore</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to='/notifications' style={{ textDecoration: 'none' }}>
          <HoverDiv
            selected={router.pathname === '/notifications' ? true : false}
          >
            <FontAwesomeIcon size='lg' icon={faBell} />
            <IconText>Notifications</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to='/messages' style={{ textDecoration: 'none' }}>
          <HoverDiv selected={router.pathname === '/messages' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faEnvelope} />
            <IconText>Messages</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to='/bookmarks' style={{ textDecoration: 'none' }}>
          <HoverDiv selected={router.pathname === '/bookmarks' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faBookmark} />
            <IconText>Bookmarks</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to='/lists' style={{ textDecoration: 'none' }}>
          <HoverDiv selected={router.pathname === '/lists' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faList} />
            <IconText>Lists</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to={`/${profile.username}`} style={{ textDecoration: 'none' }}>
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
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to='/#' style={{ textDecoration: 'none' }}>
          <HoverDiv>
            <FontAwesomeIcon size='lg' icon={faEllipsisH} />
            <IconText>More</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
    </>
  )
}

export default SideLinks
