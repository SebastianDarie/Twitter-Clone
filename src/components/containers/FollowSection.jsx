import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import {
  AsideDiv,
  FollowSectionContainer,
  ShowMore,
  TextHeading,
} from './FollowSection'
import FollowProfile from './FollowProfile.jsx'

const FollowSection = () => {
  useFirestoreConnect([{ collection: 'users' }])
  const users = useSelector((state) => state.firestore.ordered.users)

  return (
    <FollowSectionContainer>
      <aside>
        <AsideDiv>
          <h2>
            <TextHeading>Who to follow</TextHeading>
          </h2>
        </AsideDiv>
        <div>
          {users
            ? users
                .slice(0, 3)
                .map((user) => (
                  <FollowProfile
                    key={user.id}
                    imageURL={user.photoURL}
                    name={user.name}
                    profile={user.username}
                  />
                ))
            : null}
        </div>
        <ShowMore>Show more</ShowMore>
      </aside>
    </FollowSectionContainer>
  )
}

export default FollowSection
