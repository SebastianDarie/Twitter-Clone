const formatTime = (seconds) => {
  let time = new Date(Date.UTC(1970, 0, 1))
  time.setUTCSeconds(seconds)
  return time.toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour12: true,
  })
}

export default formatTime
