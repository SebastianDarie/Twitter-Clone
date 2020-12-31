import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import { useRouter } from '../../../hooks/useRouter'
import { Nav, ProfileNavLink } from './ProfileNav'
import PrivateRoute from '../../containers/auth/PrivateRoute'

const ProfileFeed = lazy(() => import('./ProfileFeed'))

const ProfileNav = ({ currProfile }) => {
  const router = useRouter()

  return (
    <>
      <Nav>
        <ProfileNavLink
          to={`${router.match.url}`}
          selected={
            router.pathname.slice(1, router.pathname.length) ===
            currProfile?.username
              ? true
              : false
          }
        >
          Tweets
        </ProfileNavLink>
        <ProfileNavLink
          to={`${router.match.url}/with_replies`}
          selected={
            `/${router.pathname.slice(1, router.pathname.length)}` ===
            `${router.match.url}/with_replies`
              ? true
              : false
          }
        >
          Tweets & replies
        </ProfileNavLink>
        <ProfileNavLink
          to={`${router.match.url}/media`}
          selected={
            `/${router.pathname.slice(1, router.pathname.length)}` ===
            `${router.match.url}/media`
              ? true
              : false
          }
        >
          Media{' '}
        </ProfileNavLink>
        <ProfileNavLink
          to={`${router.match.url}/likes`}
          selected={
            `/${router.pathname.slice(1, router.pathname.length)}` ===
            `${router.match.url}/likes`
              ? true
              : false
          }
        >
          Likes
        </ProfileNavLink>
      </Nav>

      <Suspense fallback={null}>
        <Switch>
          <PrivateRoute exact path={`${router.match.path}/likes`}>
            <ProfileFeed currProfile={currProfile} profileView='likes' />
          </PrivateRoute>
          <PrivateRoute exact path={`${router.match.path}/media`}>
            <ProfileFeed currProfile={currProfile} profileView='media' />
          </PrivateRoute>
          <PrivateRoute exact path={`${router.match.path}/with_replies`}>
            <ProfileFeed currProfile={currProfile} profileView='replies' />
          </PrivateRoute>
          <PrivateRoute exact path={`${router.match.path}`}>
            <ProfileFeed currProfile={currProfile} profileView='retweets' />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  )
}

export default ProfileNav
