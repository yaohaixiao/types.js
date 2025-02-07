import isArguments from './isArguments'

const isEmptyArguments = (val) => {
  return isArguments(val) && val.length === 0
}

export default isEmptyArguments
