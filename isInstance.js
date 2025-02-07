/**
 * 检测对象是否为另一个对象的实例
 * ========================================================================
 * @method isInstance
 * @param {Object} val
 * @param {Object} constructor
 * @return {Boolean}
 */
const isInstance = (val, constructor) => {
  return val instanceof constructor;
}

export default isInstance
