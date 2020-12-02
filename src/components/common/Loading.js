import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    to {
        transform: translateY(1rem);
    }
`

export const Loader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  transform: translateY(-50%);
  font-size: 5rem;
`

const Dot = styled.div`
  background-color: grey;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  animation: ${animate} 0.5s ease-in-out infinite alternate forwards;
`

export const BlueDot = styled(Dot)`
  background-color: #4284f4;
  animation-delay: 0.1s;
`

export const RedDot = styled(Dot)`
  background-color: #eb4236;
  animation-delay: 0.2s;
`

export const YellowDot = styled(Dot)`
  background-color: #fcbc05;
  animation-delay: 0.3s;
`

export const GreenDot = styled(Dot)`
  background-color: #34a854;
  animation-delay: 0.4s;
`
