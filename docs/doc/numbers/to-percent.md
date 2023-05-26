<a name="toPercent"></a>

## `toPercent(value, decimal)`&nbsp;


**描述**：<p>将数字转换为百分比形式的字符串</p>

**参数**：


| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| value | <code>number</code> |  | <p>要进行转换的数值。</p> |
| decimal | <code>number</code> | <code>2</code> | <p>保留的小数位数，默认为2位。</p> |

**返回**: <code>string</code><br>

<ul>
<li>转换后的百分比字符串，包含百分号。</li>
</ul>

**示例**

```javascript
// 基本用法
const result = toPercent(0.5678);
console.log(result); // 输出: "56.78%"

// 指定小数位数
const result = toPercent(0.7523, 3);
console.log(result); // 输出: "75.230%"
```
