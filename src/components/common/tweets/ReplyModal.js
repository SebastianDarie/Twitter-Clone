import styled from 'styled-components'

export const PositionModalDiv = styled.div`
  display: flex;
  flex-shrink: 1;
  border-radius: 16px;
  top: 5%;
  max-height: 90vh;
  min-width: 600px;
  max-width: 80vw;
`

export const FlavorDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
`

export const HeaderPadding = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-color: rgb(196, 207, 214);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  height: 53px;
  padding-left: 15px;
  padding-right: 15px;
`

export const BigFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 53px;
  max-width: 1000px;
  width: 100%;
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-height: 30px;
  min-width: 59px;
`

export const RightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  height: 100%;
`

export const ReplySectionContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 600px;
  width: 100%;
`

export const DoublePaddingDiv = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding-top: 5px;
  padding-bottom: 5px;
`
