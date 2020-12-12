import React from 'react'
import { ImageLink, ProfileImage, ProfileImageDiv } from '../GlobalStyles'
import {
  BorderDiv,
  ColumnDiv,
  PositionDiv,
  ProfileImageContainer,
  RowDiv,
  TweetArticle,
} from './TweetTemplate'

const TweetTemplate = ({ profile }) => {
  return (
    <PositionDiv>
      <BorderDiv>
        <div>
          <TweetArticle>
            <ColumnDiv>
              <div></div>
              <RowDiv>
                <ProfileImageContainer>
                  <ProfileImageDiv>
                    <div>
                      <ImageLink>
                        <ProfileImage imageURL={profile.photoURL} />
                      </ImageLink>
                    </div>
                  </ProfileImageDiv>
                </ProfileImageContainer>
              </RowDiv>
            </ColumnDiv>
          </TweetArticle>
        </div>
      </BorderDiv>
    </PositionDiv>
  )
}

export default TweetTemplate
