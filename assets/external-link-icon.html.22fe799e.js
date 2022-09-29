import{_ as c,r as a,o as r,c as t,a as e,b as n,d as s,w as d,e as l}from"./app.0c7ba070.js";const D={},u=n("h1",{id:"external-link-icon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#external-link-icon","aria-hidden":"true"},"#"),s(" external-link-icon")],-1),h=l(`<p>\u8BE5\u63D2\u4EF6\u5DF2\u7ECF\u96C6\u6210\u5230\u9ED8\u8BA4\u4E3B\u9898\u4E2D\u3002</p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-external-link-icon@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">externalLinkIconPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-external-link-icon&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// \u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>Record&lt;string, { openInNewWindow: string }&gt;</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u5916\u90E8\u94FE\u63A5\u56FE\u6807\u5728\u4E0D\u540C locales \u4E0B\u7684 A11y \u6587\u5B57\u3002</p><p>\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u8BE5\u914D\u7F6E\u9879\uFF0C\u5B83\u4F1A\u964D\u7EA7\u4F7F\u7528\u9ED8\u8BA4\u6587\u5B57\u3002</p></li><li><p>\u793A\u4F8B\uFF1A</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">openInNewWindow:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;open in new window&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">openInNewWindow:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u5728\u65B0\u7A97\u53E3\u6253\u5F00&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v=l('<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon" aria-hidden="true">#</a> externalLinkIcon</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>boolean</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u662F\u5426\u5728\u5F53\u524D\u9875\u9762\u7684\u5916\u90E8\u94FE\u63A5\u7684\u540E\u9762\u6DFB\u52A0\u5916\u90E8\u94FE\u63A5\u56FE\u6807\u3002</p></li></ul><h2 id="\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a> \u6837\u5F0F</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 CSS \u53D8\u91CF\u6765\u81EA\u5B9A\u4E49\u5916\u90E8\u94FE\u63A5\u56FE\u6807\u7684\u6837\u5F0F\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">File not found</span></span></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><h3 id="externallinkicon-1" tabindex="-1"><a class="header-anchor" href="#externallinkicon-1" aria-hidden="true">#</a> ExternalLinkIcon</h3><ul><li><p>\u8BE6\u60C5\uFF1A</p><p>\u8BE5\u63D2\u4EF6\u4F1A\u5168\u5C40\u6CE8\u518C\u4E00\u4E2A <code>&lt;ExternalLinkIcon /&gt;</code> \u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u4E0D\u4F20\u5165\u4EFB\u4F55 Props \u6765\u4F7F\u7528\u5B83\u3002</p></li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8BE5\u7EC4\u4EF6\u4E3B\u8981\u7528\u4E8E\u4E3B\u9898\u5F00\u53D1\u3002\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u4E0D\u9700\u8981\u76F4\u63A5\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u3002</p></div>',10);function y(m,b){const i=a("NpmBadge"),o=a("ExternalLinkIcon"),p=a("RouterLink");return r(),t("div",null,[u,e(i,{package:"@vuepress/plugin-external-link-icon"}),n("p",null,[s("\u8BE5\u63D2\u4EF6\u4F1A\u4E3A\u4F60 Markdown \u5185\u5BB9\u4E2D\u7684\u5916\u90E8\u94FE\u63A5\u6DFB\u52A0\u4E00\u4E2A\u56FE\u6807\uFF0C\u5373 "),e(o)]),h,n("ul",null,[n("li",null,[s("\u53C2\u8003\uFF1A "),n("ul",null,[n("li",null,[e(p,{to:"/zh/guide/i18n.html"},{default:d(()=>[s("\u6307\u5357 > \u591A\u8BED\u8A00\u652F\u6301")]),_:1})])])])]),v])}const C=c(D,[["render",y],["__file","external-link-icon.html.vue"]]);export{C as default};
