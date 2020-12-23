import styled from 'styled-components'

export const HeaderPadding = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-color: rgb(196, 207, 214);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  height: 53px;
  padding-left: 15px;
  padding-right: 15px;
`

export const BigFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 53px;
  max-width: 1000px;
  width: 100%;
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-height: 30px;
  min-width: 59px;
`

export const RightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  height: 100%;
`

export const ReplySectionContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 600px;
  width: 100%;
`

export const DoublePaddingDiv = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding-top: 10px;
  padding-bottom: 5px;
  width: 100%;
`

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  min-height: 64px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ColumnFlexer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`

export const ReplyImageDiv = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 0;
  align-items: center;
  margin-right: 10px;
`

export const ReplyImageContainer = styled.div`
  border-radius: 999px;
  height: 49px;
  width: 100%;
`

export const ReplySmallLine = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: rgb(196, 207, 214);
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  height: 15px;
  width: 2px;
`

export const InitialTweetContainer = styled.div`
  display: flex;
  flex-basis: 0px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding-bottom: 10px;
`

export const NameFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NameContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-items: baseline;
`

export const NameUsr = styled.div`
  display: flex;
  flex-shrink: 1;
  max-width: 100%;
`

export const CenteredName = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-items: center;
  max-width: 100%;
`

export const BoldName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
  max-width: 100%;
`

export const GrayName = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
  margin-left: 5px;
`

export const TimeDiv = styled.div`
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
`

export const TweetContent = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
`

export const ReplyAtDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ReplyAtFlexer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
`

export const BigLineContainer = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 0;
  align-items: center;
  margin-right: 10px;
`

export const ReplyBigLine = styled.div`
  display: flex;
  background-color: rgb(196, 207, 214);
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  min-height: 35px;
  width: 2px;
`

export const ReplyingToDiv = styled.div`
  display: flex;
  flex-grow: 1;
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
  padding-top: 5px;
  padding-bottom: 15px;
  white-space: pre;
`

export const AtSpan = styled.div`
  color: rgb(27, 149, 224);
  line-height: 1.3125;
  overflow-wrap: break-word;
`

export const SidePaddingDiv = styled.div`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
`

export const ReplySectionCreator = styled.div`
  display: flex;
  flex-basis: 0px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 157px;
  padding-top: 5px;
`

export const ReplyTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  margin-top: -5px;
  min-height: 99px;
`
