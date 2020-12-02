import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        width: 100%;
    }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: inherit;
  margin-bottom: 15px;
  line-height: 1.3125;
  font-size: 15px;
  font-weight: 700;
  height: auto;
  min-height: 40px;
  min-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  text-decoration: none;
  transition-property: background-color;
  transition-duration: 0.2s;
`

export const BtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: inherit;
  margin-bottom: 15px;
  height: auto;
  min-height: 40px;
  min-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  text-decoration: none;
  transition-property: background-color;
  transition-duration: 0.2s;
`

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  text-align: center;
  max-width: 100%;
  width: 100%;
`

export default GlobalStyles
