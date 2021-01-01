import styled from 'styled-components'

export const MarginContainer = styled.div`
  position: relative;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  margin-bottom: 5px;
`

export const RemoveBtnContainer = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.77);
  border-radius: 50%;
  min-height: 30px;
  min-width: 30px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: rgba(26, 26, 26, 0.77);
  }
`

export const IconStyler = styled.div`
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`
