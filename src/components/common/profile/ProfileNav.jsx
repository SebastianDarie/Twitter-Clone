import React from 'react'
import { useRouter } from '../../../hooks/useRouter'
import { Nav, ProfileNavLink } from './ProfileNav'

const ProfileNav = ({ currProfile }) => {
  const router = useRouter()

  return (
    <Nav>
      <ProfileNavLink
        to={`/${currProfile?.username}`}
        selected={
          router.pathname.slice(1, router.pathname.length) ===
          currProfile?.username
            ? true
            : false
        }
      >
        Tweets
      </ProfileNavLink>
      <ProfileNavLink to={`/${currProfile?.username}/with_replies`}>
        Tweets & replies
      </ProfileNavLink>
      <ProfileNavLink to={`/${currProfile?.username}/media`}>
        Media{' '}
      </ProfileNavLink>
      <ProfileNavLink to={`/${currProfile?.username}/likes`}>
        Likes
      </ProfileNavLink>
    </Nav>
  )
}

export default ProfileNav
