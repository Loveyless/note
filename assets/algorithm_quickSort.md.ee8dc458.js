import{_ as s,c as n,o as a,d as l}from"./app.dbe692b8.js";const C=JSON.parse('{"title":"\u601D\u8DEF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"},{"level":3,"title":"1. \u9996\u5148\uFF0C\u5B9A\u4E49\u4E00\u4E2AquickSort\u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002","slug":"_1-\u9996\u5148\uFF0C\u5B9A\u4E49\u4E00\u4E2Aquicksort\u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002"},{"level":3,"title":"2. \u7136\u540E\uFF0C\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E1\uFF0C\u5C31\u8FD4\u56DE\u3002","slug":"_2-\u7136\u540E\uFF0C\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E1\uFF0C\u5C31\u8FD4\u56DE\u3002"},{"level":3,"title":"3. \u63A5\u7740\uFF0C\u9009\u62E9\\"\u57FA\u51C6\\"\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","slug":"_3-\u63A5\u7740\uFF0C\u9009\u62E9-\u57FA\u51C6-\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002"},{"level":3,"title":"4. \u63A5\u7740\uFF0C\u9009\u62E9\\"\u57FA\u51C6\\"\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002","slug":"_4-\u63A5\u7740\uFF0C\u9009\u62E9-\u57FA\u51C6-\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002"},{"level":3,"title":"5. \u6700\u540E\uFF0C\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002","slug":"_5-\u6700\u540E\uFF0C\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002"},{"level":2,"title":"\u5B66\u5230\u4E86\u4EC0\u4E48","slug":"\u5B66\u5230\u4E86\u4EC0\u4E48"},{"level":2,"title":"more","slug":"more"}],"relativePath":"algorithm/quickSort.md","lastUpdated":1655779191000}'),p={name:"algorithm/quickSort.md"},o=l(`<h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p><a href="https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html" target="_blank" rel="noopener noreferrer">\u962E\u4E00\u5CF0 \u5FEB\u901F\u6392\u5E8F</a></p><ol><li><p>\u5728\u6570\u636E\u96C6\u4E4B\u4E2D\uFF0C\u9009\u62E9\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A&quot;\u57FA\u51C6&quot;\uFF08pivot\uFF09\u3002</p></li><li><p>\u6240\u6709\u5C0F\u4E8E&quot;\u57FA\u51C6&quot;\u7684\u5143\u7D20\uFF0C\u90FD\u79FB\u5230&quot;\u57FA\u51C6&quot;\u7684\u5DE6\u8FB9\uFF1B\u6240\u6709\u5927\u4E8E&quot;\u57FA\u51C6&quot;\u7684\u5143\u7D20\uFF0C\u90FD\u79FB\u5230&quot;\u57FA\u51C6&quot;\u7684\u53F3\u8FB9\u3002</p></li><li><p>\u5BF9&quot;\u57FA\u51C6&quot;\u5DE6\u8FB9\u548C\u53F3\u8FB9\u7684\u4E24\u4E2A\u5B50\u96C6\uFF0C\u4E0D\u65AD\u91CD\u590D\u7B2C\u4E00\u6B65\u548C\u7B2C\u4E8C\u6B65\uFF0C\u76F4\u5230\u6240\u6709\u5B50\u96C6\u53EA\u5269\u4E0B\u4E00\u4E2A\u5143\u7D20\u4E3A\u6B62\u3002</p></li></ol><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><h3 id="_1-\u9996\u5148\uFF0C\u5B9A\u4E49\u4E00\u4E2Aquicksort\u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002" tabindex="-1">1. \u9996\u5148\uFF0C\u5B9A\u4E49\u4E00\u4E2AquickSort\u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002 <a class="header-anchor" href="#_1-\u9996\u5148\uFF0C\u5B9A\u4E49\u4E00\u4E2Aquicksort\u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\u3002" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> quickSort </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-\u7136\u540E\uFF0C\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E1\uFF0C\u5C31\u8FD4\u56DE\u3002" tabindex="-1">2. \u7136\u540E\uFF0C\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E1\uFF0C\u5C31\u8FD4\u56DE\u3002 <a class="header-anchor" href="#_2-\u7136\u540E\uFF0C\u68C0\u67E5\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E1\uFF0C\u5C31\u8FD4\u56DE\u3002" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> quickSort </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5982\u679C\u4F20\u8FDB\u6765\u7684\u6570\u5C0F\u4E8E1\u5C31\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-\u63A5\u7740\uFF0C\u9009\u62E9-\u57FA\u51C6-\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002" tabindex="-1">3. \u63A5\u7740\uFF0C\u9009\u62E9&quot;\u57FA\u51C6&quot;\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002 <a class="header-anchor" href="#_3-\u63A5\u7740\uFF0C\u9009\u62E9-\u57FA\u51C6-\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> quickSort </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5982\u679C\u4F20\u8FDB\u6765\u7684\u6570\u5C0F\u4E8E1\u5C31\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u627E\u5230\u6570\u7EC4item\u4E2D\u95F4\u7684\u4E0B\u6807</span></span>
<span class="line"><span style="color:#F07178;">\u3000  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivotIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//Math.floor \u5411\u4E0B\u53D6\u6574</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u628A\u4E2D\u95F4\u4E0B\u6807\u7684\u503C\u622A\u53D6\u51FA\u6765 arr.splice\u4E3A\u53D8\u5F02\u6570\u7EC4 \u4F1A\u4FEE\u6539\u539F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pivotIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-\u63A5\u7740\uFF0C\u9009\u62E9-\u57FA\u51C6-\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002" tabindex="-1">4. \u63A5\u7740\uFF0C\u9009\u62E9&quot;\u57FA\u51C6&quot;\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002 <a class="header-anchor" href="#_4-\u63A5\u7740\uFF0C\u9009\u62E9-\u57FA\u51C6-\uFF08pivot\uFF09\uFF0C\u5E76\u5C06\u5176\u4E0E\u539F\u6570\u7EC4\u5206\u79BB\uFF0C\u518D\u5B9A\u4E49\u4E24\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u4E00\u5DE6\u4E00\u53F3\u7684\u4E24\u4E2A\u5B50\u96C6\u3002" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> quickSort </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5982\u679C\u4F20\u8FDB\u6765\u7684\u6570\u5C0F\u4E8E1\u5C31\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u627E\u5230\u6570\u7EC4item\u4E2D\u95F4\u7684\u4E0B\u6807</span></span>
<span class="line"><span style="color:#F07178;">\u3000  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivotIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//Math.floor \u53D6\u8FD1\u4F3C\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u628A\u4E2D\u95F4\u4E0B\u6807\u7684\u503C\u622A\u53D6\u51FA\u6765\u4F5C\u4E3A&#39;\u57FA\u51C6&#39; arr.splice\u4E3A\u53D8\u5F02\u6570\u7EC4 \u4F1A\u4FEE\u6539\u539F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pivotIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5F00\u59CB\u904D\u5386\u6570\u7EC4\uFF0C\u5C0F\u4E8E&quot;\u57FA\u51C6&quot;\u7684\u5143\u7D20\u653E\u5165\u5DE6\u8FB9\u7684\u5B50\u96C6\uFF0C\u5927\u4E8E\u57FA\u51C6\u7684\u5143\u7D20\u653E\u5165\u53F3\u8FB9\u7684\u5B50\u96C6\u3002</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5C0F\u4E8E\u57FA\u51C6\u5C31\u53D6left</span></span>
<span class="line"><span style="color:#F07178;">  \u3000\u3000\u3000\u3000\u3000\u3000</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5927\u4E8E\u57FA\u51C6\u5C31\u53D6right</span></span>
<span class="line"><span style="color:#F07178;">  \u3000\u3000\u3000\u3000\u3000\u3000</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u6216\u8005</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5C0F\u4E8E\u57FA\u51C6\u5C31\u53D6left</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5927\u4E8E\u57FA\u51C6\u5C31\u53D6right</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-\u6700\u540E\uFF0C\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002" tabindex="-1">5. \u6700\u540E\uFF0C\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002 <a class="header-anchor" href="#_5-\u6700\u540E\uFF0C\u4F7F\u7528\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> quickSort </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5982\u679C\u4F20\u8FDB\u6765\u7684\u6570\u5C0F\u4E8E1\u5C31\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u627E\u5230\u6570\u7EC4item\u4E2D\u95F4\u7684\u4E0B\u6807</span></span>
<span class="line"><span style="color:#F07178;">\u3000  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivotIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//Math.floor \u53D6\u8FD1\u4F3C\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u628A\u4E2D\u95F4\u4E0B\u6807\u7684\u503C\u622A\u53D6\u51FA\u6765\u4F5C\u4E3A&#39;\u57FA\u51C6&#39; arr.splice\u4E3A\u53D8\u5F02\u6570\u7EC4 \u4F1A\u4FEE\u6539\u539F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pivotIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u7136\u540E\uFF0C\u5F00\u59CB\u904D\u5386\u6570\u7EC4\uFF0C\u5C0F\u4E8E&quot;\u57FA\u51C6&quot;\u7684\u5143\u7D20\u653E\u5165\u5DE6\u8FB9\u7684\u5B50\u96C6\uFF0C\u5927\u4E8E\u57FA\u51C6\u7684\u5143\u7D20\u653E\u5165\u53F3\u8FB9\u7684\u5B50\u96C6\u3002</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5C0F\u4E8E\u57FA\u51C6\u5C31\u53D6left</span></span>
<span class="line"><span style="color:#F07178;">  \u3000\u3000\u3000\u3000\u3000\u3000</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5927\u4E8E\u57FA\u51C6\u5C31\u53D6right</span></span>
<span class="line"><span style="color:#F07178;">  \u3000\u3000\u3000\u3000\u3000\u3000</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">quickSort</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">pivot</span><span style="color:#89DDFF;">,...</span><span style="color:#82AAFF;">quickSort</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)]</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u6216\u8005 Array.concat() \u5408\u5E76\u4E24\u4E2A\u6216\u591A\u4E2A \u4E0D\u4F20\u5219\u6D45\u62F7\u8D1D</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">quickSort</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#F07178;">([</span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">quickSort</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B66\u5230\u4E86\u4EC0\u4E48" tabindex="-1">\u5B66\u5230\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#\u5B66\u5230\u4E86\u4EC0\u4E48" aria-hidden="true">#</a></h2><ol><li>Math.floor() \u4E3A\u5411\u4E0B\u53D6\u6574 \u5982\u679C\u60F3\u5B9E\u73B0\u56DB\u820D\u4E94\u5165</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4EFB\u4F55\u6570 + 0.5</span></span>
<span class="line"><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#A6ACCD;">(any </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Array.concat() \u5408\u5E76\u4E24\u4E2A\u6216\u591A\u4E2A <strong>\u4E0D\u4F20\u5219\u6D45\u62F7\u8D1D</strong></li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4EE5\u540E\u6570\u7EC4\u6D45\u62F7\u8D1D\u5C31\u8FD9\u6837\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="more" tabindex="-1">more <a class="header-anchor" href="#more" aria-hidden="true">#</a></h2><p>\u6D4B\u8BD5\u53D1\u73B0\u4E0D\u5149\u6392\u5E8F\u8FD8<strong>\u53BB\u91CD</strong>\u4E86 \u4E3A\u4EC0\u4E48\u5462?</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(item </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5C0F\u4E8E\u57FA\u51C6\u5C31\u53D6left</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//\u6BCF\u4E00\u9879\u5927\u4E8E\u57FA\u51C6\u5C31\u53D6right</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pivot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u5BF9\u6BD4item\u4E0E\u57FA\u51C6\u503C\u7684\u65F6\u5019\u5E76\u6CA1\u6709\u5BF9<strong>item\u7B49\u4E8E\u57FA\u51C6</strong>\u65F6\u7684\u64CD\u4F5C \u6240\u4EE5\u5F53\u6570\u7EC4\u91CC\u4E24\u4E2A\u503C\u76F8\u540C \u6BD4\u5BF9\u57FA\u51C6 \u4F1A\u65E0\u4EFB\u4F55\u64CD\u4F5C \u53EA\u628A\u57FA\u51C6\u8FD4\u56DE <code>return [...quickSort(left),pivot,...quickSort(right)]</code></p>`,23),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}var h=s(p,[["render",t]]);export{C as __pageData,h as default};