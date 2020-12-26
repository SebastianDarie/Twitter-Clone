import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FollowSectionContainer = styled.div`
  background-color: rgb(247, 249, 250);
  border-color: rgb(247, 249, 250);
  border-radius: 16px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 15px;
  min-height: 15rem;
`

export const AsideDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
`

export const TextHeading = styled.div`
  color: rgb(15, 20, 25);
  font-size: 19px;
  font-weight: 800;
  line-height: 1.3125;
`

export const ShowMore = styled(Link).attrs({ to: '/' })`
  display: block;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: rgba(29, 161, 242, 1);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3125;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`
