import { useState } from 'react';
import { Link } from 'react-router-dom'
import ProfileHover from './ProfileHover.jsx'

const HoverLink = (props) => {
  const [appear, setAppear] = useState(false)

  return (
    <Link
      style={{
        position: props.position === 'relative' ? 'relative' : '',
        height: 'fit-content',
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
        <ProfileHover
          auth={props.auth}
          currProfile={props.currProfile}
          profile={props.profile}
        />
      )}
    </Link>
  )
}

export default HoverLink
