import styled from 'styled-components'

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

export const ProfileName = styled.div`
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  justify-content: center;
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
