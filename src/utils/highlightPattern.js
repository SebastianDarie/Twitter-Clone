const highlightPattern = (text, pattern, Component) => {
  if (text.constructor === Array) {
    return text.map((word) =>
      typeof word === 'string'
        ? highlightPattern(word, pattern, Component)
        : word
    )
  } else {
    const splitText = text.split(pattern)
    const matches = text.match(pattern)

    if (splitText.length <= 1) {
      return text
    }

    return splitText.reduce(
      (arr, el, idx) =>
        matches[idx]
          ? [
              ...arr,
              el,
              <Component
                to={`/${matches[idx].replace(/@/, '')}`}
                key={idx}
                onClick={(e) => e.stopPropagation()}
              >
                {matches[idx]}
              </Component>,
            ]
          : [...arr, el],
      []
    )
  }
}

export default highlightPattern
