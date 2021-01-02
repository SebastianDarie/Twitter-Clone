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

const RightScreen = ({ page }) => {
  return (
    <RightScreenContainer>
      <HeightDiv>
        <ElementContainer>
          <PaddingDiv>
            {page !== 'explore' ? (
              <>
                <SearchBar />
                <TransparentDiv />
              </>
            ) : null}
            <TrendsContainer>
              <BottomContainer>
                <TextContainer>Trends for you</TextContainer>
              </BottomContainer>
            </TrendsContainer>
            <FollowSection />
          </PaddingDiv>
        </ElementContainer>
      </HeightDiv>
    </RightScreenContainer>
  )
}

export default RightScreen
