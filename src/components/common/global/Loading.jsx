import React from 'react'
import { BlueDot, GreenDot, Loader, RedDot, YellowDot } from './Loading'

const Loading = () => {
  return (
    <Loader className='google-loader'>
      <BlueDot className='dot blue'></BlueDot>
      <RedDot className='dot red'></RedDot>
      <YellowDot className='dot yellow'></YellowDot>
      <GreenDot className='dot green'></GreenDot>
    </Loader>
  )
}

export default Loading
