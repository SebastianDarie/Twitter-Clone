import styled from 'styled-components'

export const ModalPositioner = styled.div`
  position: fixed;
  bottom: 79px;
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
  margin-right: 10px;
`

export const NestedImgDiv = styled.div`
  border-radius: 999px;
  height: 49px;
  width: 100%;
`
