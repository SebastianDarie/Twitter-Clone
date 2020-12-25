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
  align-self: center;
  min-width: 79px;
  margin-left: 10px;
`

export const FollowBtn = styled.button`
  background-color: ${(props) =>
    props.followed ? 'rgb(29,161,242)' : 'rgb(0, 0, 0,0)'};
  border-color: ${(props) =>
    props.followed ? 'rgb(0,0,0,0)' : 'rgb(29, 161, 242)'};
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: ${(props) =>
    props.followed ? 'rgb(255,255,255)' : 'rgb(29, 161, 242)'};
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3125;
  height: 30px;
  min-width: ${(props) => (props.followed ? '101px' : '71px')};
  margin-bottom: 2px;
  padding-left: 1em;
  padding-right: 1em;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.followed ? 'rgb(202, 32,85)' : 'rgba(29, 161, 242, 0.1)'};
  }

  &::before {
    content: '${(props) => (props.followed ? 'Following' : 'Follow')}';
  }

  &:hover::before {
    content: '';
  }

  &:hover::after {
    content: '${(props) => (props.followed ? 'Unfollow' : 'Follow')}';
  }
`
