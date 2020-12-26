import styled from 'styled-components'

export const BorderContainer = styled.div`
  display: flex;
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-width: 1px;
  width: 100%;
`

export const PaddingContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(235, 238, 240);
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BioContainer = styled.div`
  display: flex;
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  overflow-wrap: break-word;
  padding-top: 5px;
`
