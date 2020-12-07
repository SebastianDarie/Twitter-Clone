import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProfileInfoContainer = styled.div`
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const ImageLink = styled(Link).attrs({
  to: (props) => props.path,
})`
  border-radius: 999px;
  height: 49px;
  width: 100%;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
`

export const ProfileName = styled.div`
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  justify-content: center;
`

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ProfileText = styled.div`
  display: flex;
  flex-shrink: 1;
  max-width: 100%;
`

export const UpperName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
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

export const LowerName = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
`

export const LowerText = styled.div`
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
`

export const FollowBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-end;
  min-width: 79px;
  margin-left: 10px;
`

export const FollowBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(29, 161, 242);
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: rgb(29, 161, 242);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
  height: 30px;
  min-width: 100%;
  margin-bottom: 2px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`
