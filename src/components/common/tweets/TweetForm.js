import styled from 'styled-components'

export const TweetFormContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  z-index: 1;
`

export const TweetFormPadding = styled.div`
  padding-bottom: 5px;
`

export const TweetFormTopLine = styled.div`
  position: absolute;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 0.2rem;
  width: 100%;
  z-index: 0;
`

export const TweetFormContent = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding-top: 5px;
  padding-bottom: 5px;
`

export const TweetFormSidePadding = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`

export const TweetFormRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const TweetFormImageContainer = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 0;
  margin-right: 10px;
  padding-top: 5px;
`

export const TweetFormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 0px;
  flex-grow: 1;
  justify-content: center;
  min-height: fit-content;
  padding-top: 5px;
`

export const TweetFormInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  /* height: 50px; */
  min-height: fit-content;
  max-height: 38.0625em;
  overflow: hidden;
`

export const TweetFormInputFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
`

export const TweetFormInputBorder = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  overflow: hidden;
`

export const SinglePreviewWrapper = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  align-items: stretch;
  min-height: fit-content;
  max-height: 285px;
`

export const PaddingLine = styled.div`
  display: none;
  flex-direction: row;
  padding-bottom: 10px;
`

export const HoverGlobe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  border-radius: 999px;
  border-style: solid;
  border-width: 1px;
  min-height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const GlobeFlexer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: rgba(29, 161, 242, 1);
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`

export const LineBreak = styled.div`
  display: none;
  background-color: rgb(235, 238, 240);
  height: 1px;
  width: 100%;
`
