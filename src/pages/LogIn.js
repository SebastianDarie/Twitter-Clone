import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 600px;
  width: 100%;
`

export const SVGContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Header = styled.h1`
  color: rgb(15, 20, 25);
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 700;
`

export const BtnContainer = styled.div`
  margin-top: 10px;
  max-width: 100%;
  width: 100%;
`

export const LinkContainer = styled.div`
  color: rgb(15, 20, 25);
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
`

export const LinkDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
`

export const BreakPoint = styled.span`
  color: rgb(91, 112, 131);
  padding-left: 5px;
  padding-right: 5px;
`

export const BlueLink = styled(Link)`
  color: rgb(27, 149, 224);
  text-decoration: none;
`
