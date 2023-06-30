import isUndefined from './isUndefined'

/**
 * 检测对象自身属性中是否具有指定的属性。
 * ========================================================================
 * @method hasOwn
 * @param {Object} obj - （必须）检测的目标对象
 * @param {String} prop - （必须）属性名
 * @returns {Boolean}
 */
const hasOwn = (obj, prop) => {
  const hasOwnProperty = Object.prototype.hasOwnProperty

  if (hasOwnProperty) {
    // 不建议直接实用对象从原型链继承的 hasOwnProperty() 方法
    // 所以采用直接调用 Object.prototype.hasOwnProperty() 方法
    return hasOwnProperty.call(obj, prop)
  }

  return (
    // 从对象构造函数的原型链继承的同名属性不算 obj 自身的属性
    !isUndefined(obj[prop]) && obj.constructor.prototype[prop] !== obj[prop]
  )
}

export default hasOwn
