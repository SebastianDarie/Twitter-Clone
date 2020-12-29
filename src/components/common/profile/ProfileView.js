import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProfileBlackout = styled.div`
  display: ${(props) => (props.modalState.profile ? '' : 'none')};
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`

export const ProfileViewContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  width: 100%;
`

export const DefaultCover = styled.div`
  background-color: rgb(196, 207, 214);
  min-height: 199.33px;
  overflow: hidden;
`

export const ProfileDetailsBox = styled.div`
  margin-bottom: 15px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`

export const ImageBox = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 4px solid rgb(255, 255, 255);
  border-radius: 999px;
  margin-top: -16%;
  margin-left: -4px;
  margin-bottom: -4px;
  min-width: 49px;
  height: 142px;
  width: 25%;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const SetupBtn = styled.button`
  background-color: rgb(0, 0, 0, 0);
  border-color: rgb(29, 161, 242);
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: rgb(29, 161, 242);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
  height: 30px;
  min-width: 101px;
  margin-bottom: 2px;
  padding-left: 1em;
  padding-right: 1em;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 15px;
`

export const Name = styled.div`
  display: flex;
  align-items: center;
  color: rgb(15, 20, 25);
  font-size: 19px;
  font-weight: 800;
  max-width: 100%;
`

export const Username = styled.div`
  display: flex;
  flex-shrink: 1;
  color: rgb(91, 112, 131);
  font-size: 15px;
  font-weight: 400;
`

export const BioContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const JoinedContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const JoinedDiv = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  line-height: 10px;
`

export const JoinSpan = styled.span`
  color: rgb(91, 112, 131);
  margin-right: 10px;
`

export const FollowStats = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: 1;
`

export const FollowingMargin = styled.div`
  margin-right: 20px;
`

export const FollowingLink = styled(Link)`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
