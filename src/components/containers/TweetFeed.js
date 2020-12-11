import styled from 'styled-components'

export const MainTweetContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-color: rgb(235, 238, 240);
  border-style: solid;
  border-top-width: 0px;
  border-left-width: 1px;
  border-right-width: 1px;
  max-width: 600px;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
  z-index: 1;
`

export const MainHeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  background-color: rgba(255, 255, 255, 1);
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  z-index: 3;
`

export const PointerHeader = styled.div`
  cursor: pointer;
  z-index: 2;
`

export const PointerHeight = styled.div`
  height: 53px;
  z-index: 2;
`

export const PointerPadding = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  height: 53px;
  padding-left: 15px;
  padding-right: 15px;
`

export const PointerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  color: rgb(15, 20, 25);
  font-size: 19px;
  font-weight: 800;
  line-height: 1.3125;
  height: 100%;
  text-align: left;
`

export const FeedLineBreak = styled.div`
  background-color: rgb(247, 249, 250);
  border-top-color: rgb(235, 238, 240);
  border-top-style: solid;
  border-top-width: 1px;
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  height: 10px;
`
