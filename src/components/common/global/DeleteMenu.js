import styled from 'styled-components'

export const ShadowDiv = styled.div`
  display: ${(props) =>
    props.modalState.menu && props.modalState.el === props.tweetID
      ? ''
      : 'none'};
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
  max-width: 295px;
  width: fit-content;
  position: absolute;
  left: 65%;
  z-index: 3;
`

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(224, 36, 94);
  margin-right: 10px;
`

export const DeleteText = styled.div`
  color: rgb(224, 36, 94);
  font-size: 15px;
  font-weight: 400;
`
