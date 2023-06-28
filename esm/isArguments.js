import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 arguments 对象
 * ========================================================================
 * @method isArguments
 * @param {*} val
 * @return {Boolean}
 */
function isArguments(val) {
  return _type(val) === TYPES.ARGUMENTS
}

export default isArguments
