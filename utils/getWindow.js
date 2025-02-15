import isWindow from '../isWindow'

const getWindow = (node) => {
  if (node == null) {
    return window
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument
    return ownerDocument ? ownerDocument.defaultView || window : window
  }

  return node
}

export default getWindow
