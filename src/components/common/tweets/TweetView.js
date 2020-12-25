import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const InitialTweet = styled.div`
  position: absolute;
  width: 100%;
`

export const PaddingArticle = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`

export const RowMargin = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`

export const TextMargin = styled.div`
  display: flex;
  margin-top: 10px;
`

export const TextWrapper = styled.div`
  color: rgb(15, 20, 25);
  font-size: 23px;
  font-weight: 400;
  line-height: 1.3125;
  overflow-wrap: break-word;
`

export const DescriptionDiv = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const DescriptionText = styled.div`
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
  margin-right: 10px;
`

export const ReplyText = styled(DescriptionText)`
  margin-right: 0px;
`

export const ReplyLink = styled(Link)`
  color: rgb(27, 149, 224);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const StatsPadding = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  border-top-color: rgb(235, 238, 240);
  border-top-style: solid;
  border-top-width: 1px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
`

export const StatMargin = styled.div`
  display: flex;
  margin-right: 20px;
`

export const NumberStat = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
  white-space: pre;
`

export const StatProperty = styled.span`
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
`

export const IconsFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgb(235, 238, 240);
  height: 49px;
`

export const IconContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  color: rgb(91, 112, 131);
  min-height: 1.875rem;
  padding-left: 5px;
  padding-right: 5px;
  transition-property: color;
  transition-duration: 0.2s;
  cursor: pointer;
`

export const CommentIconContainer = styled(IconContainer)`
  &:hover {
    color: rgba(29, 161, 242, 1);
  }
`

export const RetweetIconContainer = styled(IconContainer)`
  color: ${(props) => (props.retweeted ? 'rgb(23, 191, 99)' : '')};

  &:hover {
    color: rgb(23, 191, 99);
  }
`

export const LikesIconContainer = styled(IconContainer)`
  color: ${(props) => (props.liked ? 'rgb(224, 36, 94)' : '')};

  &:hover {
    color: rgb(224, 36, 94);
  }
`
