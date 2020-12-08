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
  const currUser = useSelector((state) => state.firebase.profile)
  //console.log(users, currUser)
  // if (users && users.length > 0) {
  //   let array = []
  //   for (let i = 0; i < users.length; i++) {
  //     for (let j = 0; j < currUser.following.length; j++) {
  //       if (users[i].id !== currUser.following[j]) {
  //         array.push(users[i])
  //       }
  //     }
  //     console.log(array)
  //   }
  // }
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
            ? users.map((user) => (
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
