import isString from './isString'

const isGuid = (str) => {
  const pattern =
    /^{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}}?$/gi
  let guid

  if (!isString(str)) {
    return false
  }

  guid = str.replace(/^(?:[{}])$/i, '')

  return pattern.test(guid)
}

export default isGuid
