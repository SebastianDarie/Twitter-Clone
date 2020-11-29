import styled from 'styled-components'

const Btn = styled.a`
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

export const SignupBtn = styled(Btn)`
  background-color: rgb(29, 161, 242);

  &:hover {
    background-color: rgb(26, 145, 218);
  }
`

export const LoginBtn = styled(Btn)`
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(29, 161, 242);
  color: rgb(29, 161, 242);

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  line-height: 1.3125;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  max-width: 100%;
`
