import { Circle, CircleSVG, Loader } from './Loading'

const Loading = () => {
  return (
    <Loader>
      <CircleSVG viewBox='25 25 50 50'>
        <Circle />
      </CircleSVG>
    </Loader>
  )
}

export default Loading
