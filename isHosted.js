import _type from './utils/_type'

const isHosted = (val, host) => {
  const NON_HOST_TYPES = {
    boolean: 1,
    number: 1,
    string: 1,
    undefined: 1
  }
  let type = ''
  let result

  if (!host || host[val]) {
    return false
  }

  result = host[val]
  type = _type(result)

  return type === 'object' ? !!result : !NON_HOST_TYPES[type]
}

export default isHosted
