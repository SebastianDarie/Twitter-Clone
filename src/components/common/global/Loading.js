import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    to {
        transform: translateY(1rem);
    }
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`

const color = keyframes`
  100%,
  0% {
    stroke: #d62d20;
  }

  40% {
    stroke: #0057e7;
  }

  66% {
    stroke: #008744;
  }

  80%,
  90% {
    stroke: #ffa700;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (!props.inner ? '350px' : '')};
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

// export const Loader = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 1rem;
//   transform: translateY(-50%);
//   font-size: 5rem;
// `

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 100px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

export const CircleSVG = styled.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  transform-origin: center center;
  animation: ${rotate} 2s linear infinite;
`

export const Circle = styled.circle.attrs({
  cx: '50',
  cy: '50',
  r: '20',
  fill: 'none',
  strokeWidth: '2',
  strokeMiterlimit: '10',
})`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite, ${color} 3s ease-in-out infinite;
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
