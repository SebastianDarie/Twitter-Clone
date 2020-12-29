import React from 'react'
import {
  BlueDot,
  Circle,
  CircleSVG,
  Container,
  GreenDot,
  Loader,
  RedDot,
  YellowDot,
} from './Loading'

const Loading = ({ inner }) => {
  return (
    //<Container inner={inner}>
    <Loader>
      <CircleSVG viewBox='25 25 50 50'>
        <Circle />
      </CircleSVG>
      {/* <BlueDot></BlueDot>
        <RedDot></RedDot>
        <YellowDot></YellowDot>
        <GreenDot></GreenDot> */}
    </Loader>
    //</Container>
  )
}

export default Loading
