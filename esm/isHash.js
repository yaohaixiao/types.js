import isPlainObject from './isPlainObject'

const isHash = (obj) => {
  return isPlainObject(obj)
}

export default isHash
