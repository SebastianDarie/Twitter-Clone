import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { selectLink } from '../../actions/selectedActions'

const SideLinks = () => {
  const dispatch = useDispatch()

  const selected = useSelector((state) => state.selected)

  const selectHandler = (e) => {
    const arr = e.currentTarget.href.match(/\b(\w+)\b/g)
    dispatch(selectLink(arr[arr.length - 1]))
  }

  return (
    <>
      <LinkContainer>
        <Link
          to='/home'
          style={{ textDecoration: 'none' }}
          onClick={selectHandler}
        >
          <HoverDiv selected={selected.el === 'home' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faHome} />
            <IconText>Home</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/explore'
          style={{ textDecoration: 'none' }}
          onClick={selectHandler}
        >
          <HoverDiv selected={selected.el === 'explore' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faHashtag} />
            <IconText>Explore</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/notifications'
          style={{ textDecoration: 'none' }}
          onClick={selectHandler}
        >
          <HoverDiv selected={selected.el === 'notifications' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faBell} />
            <IconText>Notifications</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/messages'
          style={{ textDecoration: 'none' }}
          onClick={selectHandler}
        >
          <HoverDiv selected={selected.el === 'messages' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faEnvelope} />
            <IconText>Messages</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/bookmarks'
          style={{ textDecoration: 'none' }}
          onClick={selectHandler}
        >
          <HoverDiv selected={selected.el === 'bookmarks' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faBookmark} />
            <IconText>Bookmarks</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/lists'
          style={{ textDecoration: 'none' }}
          onClick={selectHandler}
        >
          <HoverDiv selected={selected.el === 'lists' ? true : false}>
            <FontAwesomeIcon size='lg' icon={faList} />
            <IconText>Lists</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/profile'
          style={{ textDecoration: 'none' }}
          onClick={selectHandler}
        >
          <HoverDiv selected={selected.el === 'profile' ? true : false}>
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
