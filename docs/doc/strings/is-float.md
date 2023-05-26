<a name="isFloat"></a>

## `isFloat(str)`&nbsp;


**描述**：<p>判断给定字符串是否为浮点数。</p>

**参数**：


| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| str | <code>string</code> | <p>要判断的字符串。</p> |

**返回**: <code>boolean</code><br>

<p>如果字符串是浮点数，则返回 true，否则返回 false。</p>

**示例**

```javascript
isFloat('3.14'); // true
isFloat('-0.5'); // true
isFloat('10'); // false
isFloat('1a'); // false
```
