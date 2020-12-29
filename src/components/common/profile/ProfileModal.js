import styled from 'styled-components'

export const ProfilePicsPadding = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 188px;
  padding-bottom: 9px;
`

export const ProfileHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 59px; */
  margin-bottom: 59px;
  min-height: 135px;
  max-height: 9em;
  width: 100%;
`

export const BackgroundImage = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 135px;
  width: 100%;
`

export const HeaderInputContainer = styled.div`
  position: absolute;
  top: 23%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 39px;
  min-width: 39px;
  opacity: 0.75;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`

export const AddPhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  line-height: 1;
  font-size: 15px;
  font-weight: 700;
  min-height: 39px;
  max-width: 100%;
  cursor: pointer;
`

export const Input = styled.input.attrs({
  type: 'file',
})`
  position: absolute;
  opacity: 0;
  overflow: hidden;
  height: 39px;
  width: 39px;
  z-index: -1;
`

export const HeaderInput = styled(Input).attrs({
  id: 'header',
  name: 'header',
})``

export const ProfileInput = styled(Input).attrs({
  id: 'profile',
  name: 'profile',
})``

export const ProfilePicContainer = styled.div`
  position: relative;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 999px;
  margin-top: -25%;
  margin-left: 15px;
  max-height: 169px;
  height: 169px;
  width: 169px;
`

export const PicBlackout = styled.div`
  position: absolute;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 999px;
  height: 100%;
  width: 100%;
`

export const ProfileInputContainer = styled.div`
  position: absolute;
  top: 38%;
  left: 38%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 39px;
  min-width: 39px;
  opacity: 0.75;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`

export const BioPadding = styled.div`
  display: flex;
  padding: 10px 15px;
`

export const BioLabel = styled.label`
  display: flex;
  flex-direction: row;
  border: 1px solid rgb(196, 207, 214);
  border-radius: 4px;
  color: rgb(91, 112, 131);
  width: 100%;

  &:focus-within {
    box-shadow: rgb(29, 161, 242) 0px 0px 0px 1px;
    border-color: rgb(29, 161, 242);
    color: rgb(29, 161, 242);
  }
`

export const FlexGrowDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`

export const SmallText = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 19.6875px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
`

export const TextAreaPadding = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 2px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`

export const BioTextarea = styled.textarea`
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  box-sizing: border-box;
  color: rgb(15, 20, 25);
  font-family: 'Roboto', sans-serif;
  font-size: 19px;
  font-weight: 400;
  height: 92px;
  appearance: none;
  outline: none;
  overflow-wrap: break-word;
  overflow-y: hidden;
  resize: none;
  width: 100%;
`
