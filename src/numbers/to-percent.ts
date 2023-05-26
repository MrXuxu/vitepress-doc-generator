/**
 将数字转换为百分比形式的字符串
 * @param {number} value - 要进行转换的数值。
 * @param {number} decimal=2 - 保留的小数位数，默认为2位。
 * @returns {string} - 转换后的百分比字符串，包含百分号。
 *
 * @example
 * // 基本用法
 * const result = toPercent(0.5678);
 * console.log(result); // 输出: "56.78%"
 *
 * // 指定小数位数
 * const result = toPercent(0.7523, 3);
 * console.log(result); // 输出: "75.230%"
 */
export function toPercent(value: number, decimal: number = 2) {
  if (!isNaN(value)) {
    let percent = value * 100;
    percent = Number(percent.toFixed(decimal));

    return `${percent}%`;
  }
}
