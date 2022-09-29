import{_ as o,r as t,o as i,c as r,a as s,b as e,d as l,w as a,e as c}from"./app.0c7ba070.js";const d={},u=e("h1",{id:"\u4E3B\u9898-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E3B\u9898-api","aria-hidden":"true"},"#"),l(" \u4E3B\u9898 API")],-1),h=c(`<h2 id="\u57FA\u7840\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u57FA\u7840\u914D\u7F6E\u9879</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>string</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E3B\u9898\u7684\u540D\u79F0\u3002</p><p>\u5B83\u5E94\u9075\u4ECE\u5982\u4E0B\u547D\u540D\u7EA6\u5B9A\uFF0C\u5E76\u4E14\u5728\u53D1\u5E03\u5230 NPM \u65F6\u5E94\u786E\u4FDD\u548C\u5305\u540D\u4FDD\u6301\u4E00\u81F4\uFF1A</p><ul><li>\u975E Scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E3B\u9898\u6C38\u8FDC\u4E0D\u80FD\u88AB\u591A\u6B21\u4F7F\u7528\uFF0C\u56E0\u6B64\u4E3B\u9898 API \u4E0D\u652F\u6301\u8BE5\u914D\u7F6E\u9879\u3002</p></li></ul><h2 id="\u4E3B\u9898\u7279\u5B9A\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u7279\u5B9A\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u4E3B\u9898\u7279\u5B9A\u914D\u7F6E\u9879</h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>Theme</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u8981\u7EE7\u627F\u7684\u4E3B\u9898\u3002</p><p>\u7236\u4E3B\u9898\u7684\u6240\u6709\u4E3B\u9898 API \u90FD\u4F1A\u88AB\u7EE7\u627F\uFF0C\u4F46\u662F\u5B50\u4E3B\u9898\u4E0D\u4F1A\u76F4\u63A5\u8986\u76D6\u7236\u4E3B\u9898\u3002\u4E3B\u9898\u7279\u5B9A\u7684\u914D\u7F6E\u9879\u4F1A\u6839\u636E\u4EE5\u4E0B\u89C4\u5219\u8FDB\u884C\u8986\u76D6\uFF1A</p><ul><li><a href="#plugins">plugins</a>\uFF1A \u5F53\u540C\u4E00\u4E2A\u63D2\u4EF6\u5728\u5B50\u4E3B\u9898\u548C\u7236\u4E3B\u9898\u4E2D\u90FD\u88AB\u4F7F\u7528\u65F6\uFF0C\u5982\u679C\u8BE5\u63D2\u4EF6\u4E0D\u652F\u6301\u88AB\u591A\u6B21\u4F7F\u7528\uFF0C\u90A3\u4E48\u53EA\u6709\u5728\u5B50\u4E3B\u9898\u4E2D\u4F7F\u7528\u7684\u63D2\u4EF6\u4F1A\u751F\u6548\u3002</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>\uFF1A \u5B50\u4E3B\u9898\u7684\u6A21\u677F\u4F1A\u8986\u76D6\u7236\u4E3B\u9898\u7684\u6A21\u677F\u3002</li></ul><p>\u652F\u6301\u591A\u7EA7\u7EE7\u627F\uFF0C\u5373\u4E3B\u9898 B \u53EF\u4EE5\u7EE7\u627F\u4E3B\u9898 A \uFF0C\u7136\u540E\u4E3B\u9898 C \u53EF\u4EE5\u7EE7\u627F\u4E3B\u9898 B \u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4E00\u4E2A\u4E3B\u9898\u53EF\u4EE5\u6709\u4E00\u4E2A\u7236\u4E3B\u9898\u3001\u4E00\u4E2A\u7956\u7236\u4E3B\u9898\u7B49\u7B49\u3002</p></li><li><p>\u793A\u4F8B\uFF1A</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// \u7EE7\u627F\u9ED8\u8BA4\u4E3B\u9898</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">extends:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>`,10),D=e("li",null,[e("p",null,[l("\u7C7B\u578B\uFF1A "),e("code",null,"(Plugin | Plugin[])[]")])],-1),m=e("li",null,[e("p",null,"\u8BE6\u60C5\uFF1A"),e("p",null,"\u4E3B\u9898\u4E2D\u8981\u4F7F\u7528\u7684\u63D2\u4EF6\u3002")],-1),_=e("p",null,"\u53C2\u8003\uFF1A",-1),f=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild","aria-hidden":"true"},"#"),l(" templateBuild")],-1),y=e("li",null,[e("p",null,[l("\u7C7B\u578B\uFF1A "),e("code",null,"string")])],-1),v=e("p",null,"\u8BE6\u60C5\uFF1A",-1),C=e("p",null,"\u6307\u5B9A\u6784\u5EFA\u65F6\u4F7F\u7528\u7684 HTML \u6A21\u677F\u3002",-1),b=e("p",null,"\u53C2\u8003\uFF1A",-1),g=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev","aria-hidden":"true"},"#"),l(" templateDev")],-1),x=e("li",null,[e("p",null,[l("\u7C7B\u578B\uFF1A "),e("code",null,"string")])],-1),A=e("p",null,"\u8BE6\u60C5\uFF1A",-1),E=e("p",null,"\u6307\u5B9A\u5F00\u53D1\u65F6\u4F7F\u7528\u7684 HTML \u6A21\u677F\u3002",-1),B=e("p",null,"\u53C2\u8003\uFF1A",-1);function F(P,k){const p=t("NpmBadge"),n=t("RouterLink");return i(),r("div",null,[u,s(p,{package:"@vuepress/core"}),e("p",null,[l("VuePress \u4E3B\u9898\u540C\u6837\u662F\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u56E0\u6B64\u4E3B\u9898 API \u53EF\u4EE5\u63A5\u6536 "),s(n,{to:"/zh/reference/plugin-api.html"},{default:a(()=>[l("\u63D2\u4EF6 API")]),_:1}),l(" \u7684\u6240\u6709\u9009\u9879\uFF0C\u4F46\u5B58\u5728\u4EE5\u4E0B\u5DEE\u522B\uFF1A")]),h,e("ul",null,[D,m,e("li",null,[_,e("ul",null,[e("li",null,[s(n,{to:"/zh/reference/config.html#plugins"},{default:a(()=>[l("\u914D\u7F6E > plugins")]),_:1})])])])]),f,e("ul",null,[y,e("li",null,[v,C,e("p",null,[l("\u5B83\u4F1A\u8986\u76D6 "),s(n,{to:"/zh/reference/config.html#templatebuild"},{default:a(()=>[l("templateBuild")]),_:1}),l(" \u7684\u9ED8\u8BA4\u503C\uFF0C\u4F46\u662F\u4E5F\u4F1A\u88AB\u7528\u6237\u914D\u7F6E\u8986\u76D6\u3002")])]),e("li",null,[b,e("ul",null,[e("li",null,[s(n,{to:"/zh/reference/config.html#templatebuild"},{default:a(()=>[l("\u914D\u7F6E > templateBuild")]),_:1})])])])]),g,e("ul",null,[x,e("li",null,[A,E,e("p",null,[l("\u5B83\u4F1A\u8986\u76D6 "),s(n,{to:"/zh/reference/config.html#templatedev"},{default:a(()=>[l("templateDev")]),_:1}),l(" \u7684\u9ED8\u8BA4\u503C\uFF0C\u4F46\u662F\u4E5F\u4F1A\u88AB\u7528\u6237\u914D\u7F6E\u8986\u76D6\u3002")])]),e("li",null,[B,e("ul",null,[e("li",null,[s(n,{to:"/zh/reference/config.html#templatedev"},{default:a(()=>[l("\u914D\u7F6E > templateDev")]),_:1})])])])])])}const z=o(d,[["render",F],["__file","theme-api.html.vue"]]);export{z as default};
