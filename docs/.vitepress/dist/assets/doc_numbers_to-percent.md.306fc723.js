import{_ as s,o as t,c as a,O as n}from"./chunks/framework.4afe7240.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"doc/numbers/to-percent.md","filePath":"doc/numbers/to-percent.md"}'),o={name:"doc/numbers/to-percent.md"},e=n(`<p><a name="toPercent"></a></p><h2 id="topercent-value-decimal" tabindex="-1"><code>toPercent(value, decimal)</code>  <a class="header-anchor" href="#topercent-value-decimal" aria-label="Permalink to &quot;\`toPercent(value, decimal)\`&amp;nbsp;&quot;">​</a></h2><p><strong>描述</strong>：<p>将数字转换为百分比形式的字符串</p></p><p><strong>参数</strong>：</p><table><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>value</td><td><code>number</code></td><td></td><td><p>要进行转换的数值。</p></td></tr><tr><td>decimal</td><td><code>number</code></td><td><code>2</code></td><td><p>保留的小数位数，默认为2位。</p></td></tr></tbody></table><p><strong>返回</strong>: <code>string</code><br></p><ul><li>转换后的百分比字符串，包含百分号。</li></ul><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 基本用法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toPercent</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.5678</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: &quot;56.78%&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 指定小数位数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toPercent</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.7523</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: &quot;75.230%&quot;</span></span></code></pre></div>`,9),l=[e];function p(c,r,d,i,y,A){return t(),a("div",null,l)}const u=s(o,[["render",p]]);export{D as __pageData,u as default};
