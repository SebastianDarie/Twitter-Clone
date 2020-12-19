import styled from 'styled-components'
import { MainBtn } from '../GlobalStyles'

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
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 10px;
  max-height: 39px;
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
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const FirstSVG = styled(TweetFormSVGContainer)`
  margin-left: -10px;
`

export const ImageInput = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;
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

export const TweetFormBtn = styled(MainBtn)`
  margin-bottom: 0px;
  opacity: 0.5;
  pointer-events: none;
`
