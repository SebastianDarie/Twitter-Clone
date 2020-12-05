import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import {
  BottomContainer,
  ElementContainer,
  HeightDiv,
  PaddingDiv,
  RightScreenContainer,
  TextContainer,
  TransparentDiv,
  TrendsContainer,
} from './RightScreen'

const RightScreen = () => {
  return (
    <RightScreenContainer>
      <HeightDiv>
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
              </PaddingDiv>
            </div>
          </div>
        </ElementContainer>
      </HeightDiv>
    </RightScreenContainer>
  )
}

export default RightScreen
