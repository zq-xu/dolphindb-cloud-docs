import{_ as o,r as c,o as i,c as r,b as n,d as s,a as l,w as e,e as p}from"./app.8a07091a.js";const D={},t=p(`<h1 id="\u591A\u8BED\u8A00\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u652F\u6301" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u652F\u6301</h1><h2 id="\u7AD9\u70B9\u591A\u8BED\u8A00\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7AD9\u70B9\u591A\u8BED\u8A00\u914D\u7F6E" aria-hidden="true">#</a> \u7AD9\u70B9\u591A\u8BED\u8A00\u914D\u7F6E</h2><p>\u8981\u542F\u7528 VuePress \u7684\u591A\u8BED\u8A00\u652F\u6301\uFF0C\u9996\u5148\u9700\u8981\u4F7F\u7528\u5982\u4E0B\u7684\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">docs</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 foo.md</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 nested</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502\xA0\xA0\u2514\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2514\u2500 zh</span></span>
<span class="line"><span style="color:#D4D4D4;">   \u251C\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   \u251C\u2500 foo.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   \u2514\u2500 nested</span></span>
<span class="line"><span style="color:#D4D4D4;">  \xA0\xA0  \u2514\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=n("code",null,"locales",-1),y=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// \u952E\u540D\u662F\u8BE5\u8BED\u8A00\u6240\u5C5E\u7684\u5B50\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// \u4F5C\u4E3A\u7279\u4F8B\uFF0C\u9ED8\u8BA4\u8BED\u8A00\u53EF\u4EE5\u4F7F\u7528 &#39;/&#39; \u4F5C\u4E3A\u5176\u8DEF\u5F84\u3002</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue-powered Static Site Generator&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue \u9A71\u52A8\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u4E2A\u8BED\u8A00\u6CA1\u6709\u58F0\u660E <code>lang</code>, <code>title</code>, <code>description</code> \u6216\u8005 <code>head</code> \uFF0CVuePress \u5C06\u4F1A\u5C1D\u8BD5\u4F7F\u7528\u9876\u5C42\u914D\u7F6E\u7684\u5BF9\u5E94\u503C\u3002\u5982\u679C\u6BCF\u4E2A\u8BED\u8A00\u90FD\u58F0\u660E\u4E86\u8FD9\u4E9B\u503C\uFF0C\u90A3\u4E48\u9876\u5C42\u914D\u7F6E\u4E2D\u7684\u5BF9\u5E94\u503C\u53EF\u4EE5\u88AB\u7701\u7565\u3002</p>`,2),v={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),m=p(`<h2 id="\u4E3B\u9898\u591A\u8BED\u8A00\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u591A\u8BED\u8A00\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u591A\u8BED\u8A00\u914D\u7F6E</h2><p>VuePress \u6CA1\u6709\u9650\u5236\u4E3B\u9898\u5982\u4F55\u63D0\u4F9B\u591A\u8BED\u8A00\u652F\u6301\uFF0C\u56E0\u6B64\u6BCF\u4E2A\u4E3B\u9898\u53EF\u80FD\u4F1A\u6709\u4E0D\u540C\u7684\u591A\u8BED\u8A00\u914D\u7F6E\u65B9\u5F0F\uFF0C\u800C\u4E14\u90E8\u5206\u4E3B\u9898\u53EF\u80FD\u4E0D\u4F1A\u63D0\u4F9B\u591A\u8BED\u8A00\u652F\u6301\u3002\u5EFA\u8BAE\u4F60\u67E5\u770B\u4E3B\u9898\u672C\u8EAB\u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u8BE6\u7EC6\u7684\u6307\u5F15\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u4E3B\u9898\uFF0C\u90A3\u4E48\u5B83\u63D0\u4F9B\u591A\u8BED\u8A00\u652F\u6301\u7684\u65B9\u5F0F\u548C\u4E0A\u8FF0\u662F\u4E00\u81F4\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;English&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u7B80\u4F53\u4E2D\u6587&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),C={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1);function E(h,_){const a=c("RouterLink");return i(),r("div",null,[t,n("p",null,[s("\u7136\u540E\uFF0C\u5728\u4F60\u7684 "),l(a,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:e(()=>[s("\u914D\u7F6E\u6587\u4EF6")]),_:1}),s(" \u4E2D\u8BBE\u7F6E "),d,s(" \u9009\u9879\uFF1A")]),y,n("div",v,[u,n("p",null,[s("\u914D\u7F6E\u53C2\u8003\uFF1A "),l(a,{to:"/zh/reference/config.html#locales"},{default:e(()=>[s("locales")]),_:1})])]),m,n("div",C,[b,n("p",null,[s("\u914D\u7F6E\u53C2\u8003\uFF1A "),l(a,{to:"/zh/reference/default-theme/config.html#locales"},{default:e(()=>[s("\u9ED8\u8BA4\u4E3B\u9898 > locales")]),_:1})])])])}const g=o(D,[["render",E],["__file","i18n.html.vue"]]);export{g as default};