import styled, { keyframes } from 'styled-components'

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
