import styled from 'styled-components'

export const ModalPositioner = styled.div`
  position: fixed;
  bottom: 79px;
  display: ${(props) => (props.modalState.open ? '' : 'none')};
`

export const FlexDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  align-self: stretch;
`

export const ColorDiv = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
`

export const ModalContent = styled.div`
  min-height: 30px;
  max-height: 480px;
  min-width: 260px;
  max-width: 320px;
  width: 300px;
`

export const EdgesDiv = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`

export const TopDiv = styled.div`
  display: flex;
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ProfilePicContainer = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 0;
`

export const NestedImgDiv = styled.div`
  border-radius: 999px;
  height: 49px;
  width: 100%;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const LogoutBtn = styled.button`
  background-color: rgba(255, 255, 255, 1);
  border: none;
  display: flex;
  flex-direction: row;
  padding: 15px;
  outline: none;
  width: 100%;
  cursor: pointer;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(247, 249, 250);
  }
`

export const LogoutText = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
`
