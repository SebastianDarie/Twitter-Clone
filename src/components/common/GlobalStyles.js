import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/twitter.svg'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar{
      display: none;
    }

    textarea::-webkit-input-placeholder {
      color: #5B7083;
      font-family: 'Roboto', sans-serif;
    }

    textarea:-moz-placeholder { 
      color: #5B7083;  
      font-family: 'Roboto', sans-serif;
    }

    textarea::-moz-placeholder {  
      color: #5B7083;  
      font-family: 'Roboto', sans-serif;
    }

    textarea:-ms-input-placeholder {
      color: #5B7083;  
      font-family: 'Roboto', sans-serif;
    }

    textarea::placeholder {
      color: #5B7083;  
      font-family: 'Roboto', sans-serif;
    }

    body{
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        width: 100%;
        overflow: auto;
    }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: inherit;
  margin-bottom: 15px;
  line-height: 1.3125;
  font-size: 15px;
  font-weight: 700;
  height: auto;
  min-height: 40px;
  min-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  text-decoration: none;
  transition-property: background-color;
  transition-duration: 0.2s;
`

export const MainBtn = styled(Button)`
  background-color: rgb(29, 161, 242);
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(26, 145, 218);
  }
`

export const BtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: inherit;
  margin-bottom: 15px;
  height: auto;
  min-height: 40px;
  min-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  text-decoration: none;
  transition-property: background-color;
  transition-duration: 0.2s;
`

export const LoginBtn = styled(BtnLink)`
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(29, 161, 242);
  color: rgb(29, 161, 242);
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  text-align: center;
  max-width: 100%;
  width: 100%;
`

export const SmallLogo = styled(Logo)`
  align-self: start;
  height: 2.75rem;
  color: rgba(29, 161, 242, 1);
  fill: currentColor;
`

export const HoverDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => (props.selected ? 'rgb(29,161,242)' : 'rgb(15, 20, 25)')};
  border-radius: 999px;
  max-width: min-content;
  padding: 10px;
  transition-property: background-color, box-shadow;
  transition: 0.2s;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    color: rgba(29, 161, 242, 1);
  }
`

export const ModalForm = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(15, 20, 25);
  font-size: 19px;
  font-weight: 800;
  line-height: 1.3125;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ProfileImageDiv = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  max-width: 49px;
`

export const TweetImageDiv = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 1;
  justify-content: center;
  margin-right: 10px;
  max-width: 49px;
`

export const ImageLink = styled(Link).attrs({
  to: (props) => props.path,
})`
  border-radius: 999px;
  height: 49px;
  width: 100%;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
`

export const ProfileImage = styled.img.attrs((props) => ({
  src: props.imageURL,
  alt: 'profile',
}))`
  border-radius: 999px;
  height: 49px;
  width: 49px;
  overflow: hidden;
`

export const BlackOut = styled.div`
  display: ${(props) =>
    props.modalState.open && props.modalState.el !== 'logout' ? '' : 'none'};
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`

export const BreakPoint = styled.span`
  color: rgb(91, 112, 131);
  padding-left: 5px;
  padding-right: 5px;
`

export const UpperText = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;

  &:hover {
    text-decoration: underline;
  }
`

export const LowerText = styled.div`
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
`

export const TweetFormInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  min-height: fit-content;
  max-height: 38.0625em;
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

export const DoublePreviewWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 285px;
`

export const BackgroundHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  height: 39px;
  width: 39px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    color: rgba(29, 161, 242, 1);
  }
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
  overflow: hidden;
`

export const TweetFormInputPadding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  padding-left: 0px;
  padding-right: 0px;
  overflow-y: hidden;
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
  font-family: 'Roboto', sans-serif;
  font-size: 19px;
  font-weight: 400;
  min-height: 1.3125em;
  max-height: 38.0625em;
  resize: none;
  outline: none;
  overflow-wrap: break-word;
  overflow-y: hidden;
  width: 100%;
`

export const ReplyFormTextArea = styled.textarea.attrs({
  placeholder: 'Tweet your reply',
})`
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 19px;
  font-weight: 400;
  min-height: 99px;
  max-height: 38.0625em;
  resize: none;
  outline: none;
  overflow-wrap: break-word;
  overflow-y: hidden;
  width: 100%;
`

export default GlobalStyles
