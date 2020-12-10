import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import FollowSection from '../containers/FollowSection.jsx'
import { TextContainer } from '../common/GlobalStyles'
import {
  BottomContainer,
  ElementContainer,
  HeightDiv,
  PaddingDiv,
  RightScreenContainer,
  TransparentDiv,
  TrendsContainer,
} from './RightScreen'

const RightScreen = () => {
  return (
    <RightScreenContainer>
      <HeightDiv>
        <div style={{ marginTop: 0 }}></div>
        <ElementContainer>
          <div>
            <div>
              <PaddingDiv>
                <SearchBar />
                <TransparentDiv />
                <TrendsContainer>
                  <div>
                    <div>
                      <section>
                        <div>
                          <div>
                            <BottomContainer>
                              <TextContainer>Trends for you</TextContainer>
                            </BottomContainer>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </TrendsContainer>
                <FollowSection />
              </PaddingDiv>
            </div>
          </div>
        </ElementContainer>
      </HeightDiv>
    </RightScreenContainer>
  )
}

export default RightScreen
