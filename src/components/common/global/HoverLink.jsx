import { useState, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

const ProfileHover = lazy(() => import('./ProfileHover.jsx'))

const HoverLink = (props) => {
  const [appear, setAppear] = useState(false)

  return (
    <Link
      style={{
        position: props.position === 'relative' ? 'relative' : '',
        textDecoration: 'none',
        zIndex: appear ? 99 : 1,
      }}
      to={`/${props.currProfile?.username}` || '/'}
      onMouseOver={() => setAppear(true)}
      onMouseLeave={() => setAppear(false)}
      onClick={(e) => e.stopPropagation()}
    >
      {props.children}
      {appear && (
        <Suspense fallback={null}>
          <ProfileHover
            auth={props.auth}
            currProfile={props.currProfile}
            profile={props.profile}
          />
        </Suspense>
      )}
    </Link>
  )
}

export default HoverLink
