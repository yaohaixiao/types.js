import isBuffer from './isBuffer'
import isString from './isString'

const isBinary = (buffer) => {
  let i

  if (!isBuffer(buffer) && !isString(buffer)) {
    return false
  }

  for (i = 0; i < 24; i += 1) {
    const charCode = isBuffer(buffer) ? buffer[i] : buffer.charCodeAt(i)

    if (charCode === 65533 || charCode <= 8) {
      return true
    }
  }

  return false
}

export default isBinary
