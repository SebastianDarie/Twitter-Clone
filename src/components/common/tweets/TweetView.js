import styled from 'styled-components'

export const PointerFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 53px;
  max-width: 1000px;
  width: 100%;
`

export const BackSvg = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 30px;
  min-width: 59px;
`

export const PointerTitle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  align-self: flex-start;
  color: rgb(15, 20, 25);
  font-size: 21px;
  font-weight: 800;
  line-height: 1.3125;
  height: 100%;
  text-align: left;
`

export const PointerEnder = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  margin-left: 20px;
  min-height: 30px;
  min-width: 30px;
`

export const InitialTweet = styled.div`
  position: absolute;
  width: 100%;
`

export const PaddingArticle = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`

export const RowMargin = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`
