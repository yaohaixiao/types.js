const trim = (str) => {
  /* istanbul ignore else */
  if (str.trim) {
    return str.trim()
  }

  return str.replace(/^\s+|\s+$/g, '')
}

export default trim
