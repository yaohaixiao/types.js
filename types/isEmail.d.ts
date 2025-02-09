export default isEmail;
/**
 * 检测是否为正确的 Email 邮箱地址格式
 * ========================================================================
 * @method isEmail
 * @since 0.2.0
 * @category String
 * @param {String} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Email 邮箱地址格式，返回 true，否则返回 false
 * @example
 *
 * isEmail('robert@gmail.com') // => true
 * isEmail('yaohaixiao@gmail.c') // => true
 * isEmail('haixiao-yao@gmail.com') // => true
 * isEmail('haixiao_yao@gmail.com') // => true
 * isEmail('haixiao&yao@gmail.com') // => true
 * isEmail('haixiao~yao@gmail.com') // => true
 * isEmail('haixiao+yao@gmail.com') // => true
 * isEmail('haixiao^yao@gmail.com') // => true
 * isEmail('haixiao%yao@gmail.com') // => true
 * isEmail('haixiao$yao@gmail.com') // => true
 * isEmail('haixiao.yao@gmail.com') // => true
 * isEmail('haixiao/yao@gmail.com') // => true
 * isEmail('haixiao#yao@gmail.com') // => true
 * isEmail('yao{haixiao@gmail.com') // => true
 * isEmail('yao|haixiao@gmail.com') // => true
 * isEmail('yao}haixiao@gmail.com') // => true
 *
 * isEmail('robert#gmail.com') // => false
 * isEmail('yao\haixiao@gmail.com') // => false
 * isEmail('yao[haixiao@gmail.com') // => false
 */
declare function isEmail(val: string): boolean;
