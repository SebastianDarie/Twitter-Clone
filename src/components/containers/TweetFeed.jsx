import React from 'react'
import {
  FeedLineBreak,
  MainHeaderContainer,
  MainTweetContainer,
  PointerHeader,
  PointerHeight,
  PointerPadding,
  PointerText,
  TweetFormContainer,
  TweetFormContent,
  TweetFormImageContainer,
  TweetFormPadding,
  TweetFormRow,
  TweetFormSidePadding,
  TweetFormTopLine,
} from './TweetFeed'

const TweetFeed = () => {
  return (
    <MainTweetContainer>
      <div>
        <MainHeaderContainer>
          <PointerHeader>
            <PointerHeight>
              <div>
                <PointerPadding>
                  <PointerText>Home</PointerText>
                </PointerPadding>
              </div>
            </PointerHeight>
          </PointerHeader>
        </MainHeaderContainer>
        <TweetFormContainer>
          <TweetFormPadding>
            <TweetFormTopLine />
            <TweetFormContent>
              <div>
                <div>
                  <TweetFormSidePadding>
                    <TweetFormRow>
                      <TweetFormImageContainer></TweetFormImageContainer>
                    </TweetFormRow>
                  </TweetFormSidePadding>
                </div>
              </div>
              <div></div>
            </TweetFormContent>
          </TweetFormPadding>
        </TweetFormContainer>
        <FeedLineBreak />
      </div>
    </MainTweetContainer>
  )
}

export default TweetFeed
