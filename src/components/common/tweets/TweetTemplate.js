import styled from 'styled-components'

export const PositionDiv = styled.div`
  position: absolute;
  width: 100%;
  transition: opacity 0.3s ease-out 0s;
`

export const BorderDiv = styled.div`
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-width: 1px;
`

export const TweetArticle = styled.article`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  outline-style: none;
  overflow: hidden;
  cursor: pointer;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-basis: 49px;
  flex-grow: 0;
  margin-right: 10px;
`
