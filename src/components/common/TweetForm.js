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
  padding-top: 5px;
`

export const TweetFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  height: 49px;
`

export const TweetFormInputFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`

export const TweetFormInputBorder = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
`

export const TweetFormInputText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: rgb(15, 20, 25);
  font-size: 19px;
  font-weight: 400;
  line-height: 1.3125;
`

export const TweetFormInputPadding = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
  width: 100%;
`

export const TweetFormTextArea = styled.textarea.attrs({
  placeholder: "What's happening?",
})`
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: 19px;
  font-weight: 400;
  resize: none;
  outline: none;
  overflow-wrap: break-word;
  width: 100%;
`

export const TweetFormBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  height: 49px;
  margin-left: 2px;
  margin-right: 2px;
`

export const TweetFormBottomContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

export const TweetFormSVGContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  border-radius: 999px;
  border-style: solid;
  border-width: 1px;
  margin: -10px;
  margin-left: 0px;
  margin-right: 0px;
  min-height: 39px;
  min-width: 39px;
  padding-left: 0px;
  padding-right: 0px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const FirstSVG = styled(TweetFormSVGContainer)`
  margin-left: -10px;
`

export const TweetFormIcon = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: rgba(19, 161, 242, 1);
  fill: currentColor;
  max-width: 100%;
  text-align: center;
`
