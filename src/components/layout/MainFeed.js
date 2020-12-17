import styled from 'styled-components'

export const MainFlexer = styled.main`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
  height: 100vh;
`

export const MainDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  max-width: 990px;
  width: 990px;
`

export const GrowDiv = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`

export const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100%;
  width: 100%;
`
