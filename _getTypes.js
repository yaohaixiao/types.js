const _getTypes = (METHODS) => {
  const keys = Object.keys(METHODS)

  const Types = function (val) {
    const methods = {}
    let value = val

    keys.forEach((prop) => {
      const fn = METHODS[prop]
      methods[prop] = () => {
        return fn(value)
      }
    })

    return methods
  }

  keys.forEach((prop) => {
    Types[prop] = METHODS[prop]
  })

  return Types
}

export default _getTypes
