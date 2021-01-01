import { useEffect, useRef } from 'react'
import { useRouter } from '../../../hooks/useRouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {
  DeleteContainer,
  DeleteText,
  SelectionContainer,
  ShadowDiv,
} from './DeleteMenu'

const DeleteMenu = ({
  dispatch,
  firebase,
  modalState,
  profile,
  tweet,
  userID,
  toastrActions,
}) => {
  const router = useRouter()
  const menu = useRef()

  useEffect(() => {
    const outsideClick = async (e) => {
      if (menu.current && !menu.current.contains(e.target)) {
        const { closeMenu } = await import('../../../actions/modalActions')
        dispatch(closeMenu())
      }
    }

    document.addEventListener('click', outsideClick)

    return () => document.removeEventListener('click', outsideClick)
  }, [])

  const deleteClick = async (e) => {
    const { deleteHandler } = await import('../../../utils/tweetHandlers')

    if (tweet.userID === userID) {
      deleteHandler(
        e,
        dispatch,
        tweet.id,
        userID,
        profile.tweets,
        tweet.replyTo,
        firebase
      )
      router.history.push('/')
    } else {
      dispatch(
        toastrActions.add({
          type: 'error',
          title: 'Delete Error',
          position: 'top-right',
          message: "You're not the author of the tweet",
          options: {
            showCloseButton: true,
            timeOut: 3000,
          },
        })
      )
    }
  }

  return (
    <ShadowDiv
      ref={menu}
      modalState={modalState}
      tweetID={tweet.id}
      onClick={deleteClick}
    >
      <SelectionContainer>
        <DeleteContainer>
          <FontAwesomeIcon icon={faTrashAlt} />
        </DeleteContainer>
        <DeleteText>Delete</DeleteText>
      </SelectionContainer>
    </ShadowDiv>
  )
}

export default DeleteMenu
