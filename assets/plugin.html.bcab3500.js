import{_ as i,r as o,o as r,c as t,b as n,d as s,a,w as e,e as p}from"./app.0c7ba070.js";const D={},d=n("h1",{id:"\u5F00\u53D1\u63D2\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F00\u53D1\u63D2\u4EF6","aria-hidden":"true"},"#"),s(" \u5F00\u53D1\u63D2\u4EF6")],-1),u={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),v=n("h2",{id:"\u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6","aria-hidden":"true"},"#"),s(" \u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6")],-1),m=n("em",null,"\u63D2\u4EF6\u5BF9\u8C61",-1),h=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">fooPlugin</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=n("em",null,"\u63D2\u4EF6\u5BF9\u8C61",-1),b=n("em",null,"\u63D2\u4EF6\u51FD\u6570",-1),C=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u4EF6\u901A\u5E38\u9700\u8981\u5141\u8BB8\u7528\u6237\u4F20\u5165\u914D\u7F6E\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E00\u822C\u90FD\u4F1A\u63D0\u4F9B\u7ED9\u7528\u6237\u4E00\u4E2A\u51FD\u6570\u6765\u63A5\u6536\u914D\u7F6E\uFF0C\u7136\u540E\u5C06 <em>\u63D2\u4EF6\u5BF9\u8C61</em> \u6216\u8005 <em>\u63D2\u4EF6\u51FD\u6570</em> \u4F5C\u4E3A\u8FD4\u56DE\u503C\u3002\u4E8E\u662F\uFF0C\u4F60\u7684\u63D2\u4EF6\u5E94\u8BE5\u8F6C\u6362\u6210\u8FD9\u6837\u7684\u5F62\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">fooPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u5E03\u5230-npm" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u5230-npm" aria-hidden="true">#</a> \u53D1\u5E03\u5230 NPM</h2>`,4),g={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},E=p(`<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-plugin-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;vuepress-plugin&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f=n("code",null,"name",-1),x=n("code",null,"vuepress-plugin-xxx",-1),k=n("code",null,"@org/vuepress-plugin-xxx",-1),F=n("em",null,"\u63D2\u4EF6\u5BF9\u8C61",-1),A=n("li",null,[s("\u5728 "),n("code",null,"keywords"),s(" \u4E2D\u5305\u542B "),n("code",null,"vuepress-plugin"),s(" \uFF0C\u8FD9\u6837\u7528\u6237\u53EF\u4EE5\u5728 NPM \u4E0A\u641C\u7D22\u5230\u4F60\u7684\u63D2\u4EF6\u3002")],-1);function P(q,N){const l=o("RouterLink"),c=o("ExternalLinkIcon");return r(),t("div",null,[d,n("div",u,[y,n("p",null,[s("\u5728\u9605\u8BFB\u8BE5\u6307\u5357\u4E4B\u524D\uFF0C\u4F60\u6700\u597D\u5148\u4E86\u89E3\u4E00\u4E0B VuePress \u7684 "),a(l,{to:"/zh/advanced/architecture.html"},{default:e(()=>[s("\u67B6\u6784")]),_:1}),s(" \u3002")])]),v,n("p",null,[s("\u63D2\u4EF6\u662F\u4E00\u4E2A\u7B26\u5408 "),a(l,{to:"/zh/reference/plugin-api.html"},{default:e(()=>[s("\u63D2\u4EF6 API")]),_:1}),s(" \u7684\u666E\u901A JavaScript \u5BF9\u8C61\uFF0C\u79F0\u4E4B\u4E3A "),m,s(" \uFF1A")]),h,n("p",null,[s("\u63D2\u4EF6\u8FD8\u53EF\u4EE5\u662F\u4E00\u4E2A\u63A5\u6536 "),a(l,{to:"/zh/reference/node-api.html#app"},{default:e(()=>[s("App \u5B9E\u4F8B")]),_:1}),s(" \u4F5C\u4E3A\u53C2\u6570\uFF0C\u4E14\u8FD4\u56DE\u503C\u4E3A "),_,s(" \u7684\u51FD\u6570\uFF0C\u79F0\u4E4B\u4E3A "),b,s(" \uFF1A")]),C,n("p",null,[s("\u5728\u521B\u5EFA\u4E86\u63D2\u4EF6\u4E4B\u540E\uFF0C\u4F60\u9700\u8981\u5728 "),n("a",g,[s("package.json"),a(c)]),s(" \u6587\u4EF6\u4E2D\u9075\u5FAA\u4E00\u5B9A\u7684\u7EA6\u5B9A\uFF0C\u7136\u540E\u518D\u5C06\u5176\u53D1\u5E03\u5230 NPM \u4E0A\uFF1A")]),E,n("ul",null,[n("li",null,[s("\u5C06 "),f,s(" \u6309\u7167\u7EA6\u5B9A\u547D\u540D\uFF0C\u5373 "),x,s(" \u6216 "),k,s(" \uFF0C\u5B83\u5E94\u8BE5\u548C "),F,s(" \u7684 "),a(l,{to:"/zh/reference/plugin-api.html#name"},{default:e(()=>[s("name")]),_:1}),s(" \u5B57\u6BB5\u4FDD\u6301\u4E00\u81F4\u3002")]),A])])}const V=i(D,[["render",P],["__file","plugin.html.vue"]]);export{V as default};
