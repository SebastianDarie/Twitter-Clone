import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PositionDiv = styled.div`
  position: relative;
  width: 100%;
  transition: opacity 0.3s ease-out 0s;
`

export const BorderDiv = styled.div`
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`

export const TweetArticle = styled.article`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  outline-style: none;
  overflow: hidden;
  cursor: pointer;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 0;
  margin-right: 10px;
  width: 49px;
`

export const SideContent = styled.div`
  display: flex;
  flex-basis: 0px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding-bottom: 10px;
`

export const UpperTextMargin = styled.div`
  margin-bottom: 2px;
`

export const UpperTextFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UpperLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-items: center;
`

export const UpperProfileName = styled.div`
  display: flex;
  flex-shrink: 1;
  max-width: 100%;
`

export const ProfileLink = styled(Link)`
  display: flex;
  flex-shrink: 1;
  max-width: 100%;
  text-decoration: none;
`

export const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
`

export const TimeLink = styled(Link)`
  color: rgb(91, 112, 131);
  display: flex;
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const UpperRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
`

export const TweetTextDiv = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
  overflow-wrap: break-word;
`

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: -10px;
  margin-bottom: -5px;
  max-width: 425px;
`

export const IconContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(91, 112, 131);
  font-weight: 400;
  line-height: 1.3125;
  transition-property: color;
  transition-duration: 0.2s;
`

export const CommentIconContainer = styled(IconContentContainer)`
  &:hover {
    color: rgba(29, 161, 242, 1);
  }
`

export const RetweetIconContainer = styled(IconContentContainer)`
  color: ${(props) => (props.retweeted ? 'rgb(23, 191, 99)' : '')};

  &:hover {
    color: rgb(23, 191, 99);
  }
`

export const LikesIconContainer = styled(IconContentContainer)`
  color: ${(props) => (props.liked ? 'rgb(224, 36, 94)' : '')};

  &:hover {
    color: rgb(224, 36, 94);
  }
`

export const TextSpan = styled.span`
  font-size: 13px;
  padding-left: 10px;
  padding-right: 10px;
`
