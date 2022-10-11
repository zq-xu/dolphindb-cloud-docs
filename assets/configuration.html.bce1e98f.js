import{_ as c,r as i,o as p,c as r,b as n,d as s,a as l,w as a,e as o}from"./app.d8efe043.js";const t={},d=o(`<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u914D\u7F6E\uFF0C\u4F60\u7684 VuePress \u7AD9\u70B9\u4EC5\u6709\u4E00\u4E9B\u6700\u57FA\u7840\u7684\u529F\u80FD\u3002\u4E3A\u4E86\u66F4\u597D\u5730\u81EA\u5B9A\u4E49\u4F60\u7684\u7F51\u7AD9\uFF0C\u8BA9\u6211\u4EEC\u9996\u5148\u5728\u4F60\u7684\u6587\u6863\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>.vuepress</code> \u76EE\u5F55\uFF0C\u6240\u6709 VuePress \u76F8\u5173\u7684\u6587\u4EF6\u90FD\u5C06\u4F1A\u88AB\u653E\u5728\u8FD9\u91CC\u3002\u4F60\u7684\u9879\u76EE\u7ED3\u6784\u53EF\u80FD\u662F\u8FD9\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u251C\u2500 .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2514\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 .gitignore</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress \u7AD9\u70B9\u7684\u57FA\u672C\u914D\u7F6E\u6587\u4EF6\u662F <code>.vuepress/config.js</code> \uFF0C\u4F46\u4E5F\u540C\u6837\u652F\u6301 TypeScript \u914D\u7F6E\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>.vuepress/config.ts</code> \u6765\u5F97\u5230\u66F4\u597D\u7684\u7C7B\u578B\u63D0\u793A\u3002</p><p>\u5177\u4F53\u800C\u8A00\uFF0C\u6211\u4EEC\u5BF9\u4E8E\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\u6709\u7740\u7EA6\u5B9A\uFF08\u6309\u7167\u4F18\u5148\u987A\u5E8F\uFF09\uFF1A</p><ul><li>\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55 <code>cwd</code> \u4E0B\uFF1A <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>\u6E90\u6587\u4EF6\u76EE\u5F55 <code>sourceDir</code> \u4E0B\uFF1A <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>`,7),D=n("code",null,"--config",-1),u=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">vuepress dev docs --config my-config.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E00\u4E2A\u57FA\u7840\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u4F60\u597D\uFF0C VuePress \uFF01&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A VuePress \u7AD9\u70B9&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),m=o(`<h2 id="\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6</h2><p>\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u914D\u7F6E\u6587\u4EF6\u5DF2\u7ECF\u8DB3\u591F\u5E2E\u52A9\u4F60\u914D\u7F6E\u597D\u4F60\u7684 VuePress \u7AD9\u70B9\u3002\u4E0D\u8FC7\uFF0C\u6709\u4E9B\u65F6\u5019\u7528\u6237\u4EEC\u53EF\u80FD\u5E0C\u671B\u76F4\u63A5\u6DFB\u52A0\u4E00\u4E9B\u5BA2\u6237\u7AEF\u4EE3\u7801\u3002 VuePress \u901A\u8FC7\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6\u6765\u652F\u6301\u8FD9\u79CD\u9700\u6C42\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u251C\u2500 .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2502  \u251C\u2500 client.js   &lt;--- \u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2502  \u2514\u2500 config.js   &lt;--- \u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2514\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 .gitignore</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u7684\uFF0C\u6211\u4EEC\u4E5F\u6709\u5173\u4E8E\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\u7EA6\u5B9A\uFF08\u6309\u7167\u4F18\u5148\u987A\u5E8F\uFF09\uFF1A</p><ul><li>\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55 <code>cwd</code> \u4E0B\uFF1A <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>\u6E90\u6587\u4EF6\u76EE\u5F55 <code>sourceDir</code> \u4E0B\uFF1A <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>\u4E00\u4E2A\u57FA\u7840\u7684\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),C={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),b=n("p",null,"\u548C\u914D\u7F6E\u6587\u4EF6\u4E0D\u540C\uFF0C\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6\u4E0D\u80FD\u901A\u8FC7\u547D\u4EE4\u884C\u63A5\u53E3\u7684\u9009\u9879\u6765\u6307\u5B9A\u3002",-1);function g(f,_){const e=i("RouterLink");return p(),r("div",null,[d,n("p",null,[s("\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),l(e,{to:"/zh/guide/cli.html"},{default:a(()=>[s("\u547D\u4EE4\u884C\u63A5\u53E3")]),_:1}),s(" \u7684 "),D,s(" \u9009\u9879\u6765\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\uFF1A")]),u,n("div",v,[y,n("p",null,[s("\u524D\u5F80 "),l(e,{to:"/zh/reference/config.html"},{default:a(()=>[s("\u914D\u7F6E\u53C2\u8003")]),_:1}),s(" \u67E5\u770B\u6240\u6709 VuePress \u914D\u7F6E\u3002")])]),m,n("div",C,[h,b,n("p",null,[s("\u53EF\u4EE5\u524D\u5F80 "),l(e,{to:"/zh/advanced/cookbook/usage-of-client-config.html"},{default:a(()=>[s("\u6DF1\u5165 > Cookbook > \u5BA2\u6237\u7AEF\u914D\u7F6E\u7684\u4F7F\u7528\u65B9\u6CD5")]),_:1}),s(" \u6765\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002")])])])}const k=c(t,[["render",g],["__file","configuration.html.vue"]]);export{k as default};