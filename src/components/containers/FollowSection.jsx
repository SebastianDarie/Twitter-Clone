import React from 'react'
import { useSelector } from 'react-redux'
import {
  AsideDiv,
  FollowSectionContainer,
  ShowMore,
  TextHeading,
} from './FollowSection'
import FollowProfile from './FollowProfile.jsx'

const FollowSection = () => {
  const auth = useSelector((state) => state.firebase.auth)
  const users = useSelector((state) => state.firestore.ordered.users)
  const filteredUsers = users?.filter(
    (user) => !user.followers.includes(auth.uid)
  )

  return (
    <FollowSectionContainer>
      <aside>
        <AsideDiv>
          <h2>
            <TextHeading>Who to follow</TextHeading>
          </h2>
        </AsideDiv>
        <div>
          {filteredUsers
            ? filteredUsers
                .slice(0, 3)
                .map((user) => (
                  <FollowProfile
                    key={user.id}
                    imageURL={user.photoURL}
                    name={user.name}
                    username={user.username}
                    followID={user.id}
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
