import styled from 'styled-components'

export const BioPadding = styled.div`
  display: flex;
  padding: 10px 15px;
`

export const BioLabel = styled.label`
  display: flex;
  flex-direction: row;
  border-color: rgb(196, 207, 214);
  border-radius: 4px;
  border-width: 1px;

  &:focus {
    box-shadow: rgb(29, 161, 242) 0px 0px 0px 1px;
    border-color: rgb(29, 161, 242);
  }
`

export const FlexGrowDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
`

export const SmallText = styled.div`
  color: rgb(91, 112, 131);
  font-size: 13px;
  font-weight: 400;
  line-height: 19.6875px;
  padding-top: 5px;
`

export const TextAreaPadding = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 2px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`
