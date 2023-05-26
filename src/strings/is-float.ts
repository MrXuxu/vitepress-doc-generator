const regRule = /^[+-]?([1-9]\d*\.\d*[1-9]|0\.\d*[1-9]|0)$/;

/**
 * 判断给定字符串是否为浮点数。
 *
 * @param {string} str - 要判断的字符串。
 * @returns {boolean} 如果字符串是浮点数，则返回 true，否则返回 false。
 * @example
 * isFloat('3.14'); // true
 * isFloat('-0.5'); // true
 * isFloat('10'); // false
 * isFloat('1a'); // false
 */
export function isFloat(str: string) {
  return regRule.test(str);
}
