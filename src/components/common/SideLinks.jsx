import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
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
    dispatch(selectLink(arr[arr.length - 1], true))
  }

  return (
    <>
      <LinkContainer>
        <Link
          to='/home'
          style={{ textDecoration: 'none' }}
          id={uuidv4()}
          onClick={selectHandler}
        >
          <HoverDiv
            selected={selected.el === 'home' ? selected.selected : false}
          >
            <FontAwesomeIcon size='lg' icon={faHome} />
            <IconText>Home</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/explore'
          style={{ textDecoration: 'none' }}
          id={uuidv4()}
          onClick={selectHandler}
        >
          <HoverDiv
            selected={selected.el === 'explore' ? selected.selected : false}
          >
            <FontAwesomeIcon size='lg' icon={faHashtag} />
            <IconText>Explore</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/notifications'
          style={{ textDecoration: 'none' }}
          id={uuidv4()}
          onClick={selectHandler}
        >
          <HoverDiv
            selected={
              selected.el === 'notifications' ? selected.selected : false
            }
          >
            <FontAwesomeIcon size='lg' icon={faBell} />
            <IconText>Notifications</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/messages'
          style={{ textDecoration: 'none' }}
          id={uuidv4()}
          onClick={selectHandler}
        >
          <HoverDiv
            selected={selected.el === 'messages' ? selected.selected : false}
          >
            <FontAwesomeIcon size='lg' icon={faEnvelope} />
            <IconText>Messages</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/bookmarks'
          style={{ textDecoration: 'none' }}
          id={uuidv4()}
          onClick={selectHandler}
        >
          <HoverDiv
            selected={selected.el === 'bookmarks' ? selected.selected : false}
          >
            <FontAwesomeIcon size='lg' icon={faBookmark} />
            <IconText>Bookmarks</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/lists'
          style={{ textDecoration: 'none' }}
          id={uuidv4()}
          onClick={selectHandler}
        >
          <HoverDiv
            selected={selected.el === 'lists' ? selected.selected : false}
          >
            <FontAwesomeIcon size='lg' icon={faList} />
            <IconText>Lists</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to='/profile'
          style={{ textDecoration: 'none' }}
          id={uuidv4()}
          onClick={selectHandler}
        >
          <HoverDiv
            selected={selected.el === 'profile' ? selected.selected : false}
          >
            <FontAwesomeIcon size='lg' icon={faUser} />
            <IconText>Profile</IconText>
          </HoverDiv>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to='/#' style={{ textDecoration: 'none' }} id={uuidv4()}>
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
