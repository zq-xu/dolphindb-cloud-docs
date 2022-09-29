import{_ as c,h as t,o as r,c as i,b as s,t as a,a as D,w as d,e as v,i as y}from"./app.0c7ba070.js";const u=v(`<h1 id="markdown-\u4E0E-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-\u4E0E-vue-sfc" aria-hidden="true">#</a> Markdown \u4E0E Vue SFC</h1><p>\u6BCF\u4E00\u4E2A Markdown \u6587\u4EF6\uFF0C\u9996\u5148\u90FD\u4F1A\u7F16\u8BD1\u4E3A HTML \uFF0C\u7136\u540E\u8F6C\u6362\u4E3A\u4E00\u4E2A Vue \u5355\u6587\u4EF6\u7EC4\u4EF6 (SFC) \u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4F60\u53EF\u4EE5\u50CF\u5199 Vue SFC \u4E00\u6837\u6765\u5199 Markdown \u6587\u4EF6\uFF1A</p><ul><li><code>&lt;script&gt;</code> \u548C <code>&lt;style&gt;</code> \u6807\u7B7E\u4F1A\u76F4\u63A5\u88AB\u5F53\u4F5C Vue SFC \u4E2D\u7684\u6807\u7B7E\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5B83\u4EEC\u662F\u4ECE <code>&lt;template&gt;</code> \u6807\u7B7E\u4E2D\u63D0\u5347\u5230\u4E86 SFC \u7684\u9876\u5C42\u3002</li><li>\u6240\u6709 <code>&lt;script&gt;</code> \u548C <code>&lt;style&gt;</code> \u6807\u7B7E\u7684\u4EE5\u5916\u7684\u5185\u5BB9\uFF0C\u4F1A\u5148\u88AB\u7F16\u8BD1\u4E3A HTML \uFF0C\u7136\u540E\u88AB\u5F53\u4F5C Vue SFC \u7684 <code>&lt;template&gt;</code> \u6807\u7B7E\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E Vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u53EA\u80FD\u5305\u542B\u4E00\u4E2A <code>&lt;script&gt;</code> \u6807\u7B7E\uFF0C\u4F60\u5E94\u8BE5\u907F\u514D\u5728 VuePress Markdown \u4E2D\u4F7F\u7528\u591A\u4E8E\u4E00\u4E2A <code>&lt;script&gt;</code> \u6807\u7B7E\u3002</p></div><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><p><strong>\u8F93\u5165</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">_\u4F60\u597D\uFF0C {{ msg }}_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;RedDiv&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">_\u5F53\u524D\u8BA1\u6570\u4E3A\uFF1A {{ count }}_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/RedDiv&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;button @click=&quot;count++&quot;&gt;\u70B9\u6211\uFF01&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">h</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">RedDiv</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">_</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">h</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;div&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">class:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;red-div&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">slots</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">default</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">msg</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;Markdown \u4E2D\u7684 Vue&#39;</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D7BA7D;">.red-div</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8F93\u51FA</strong></p>`,8),m={__name:"markdown-and-vue-sfc.html",setup(C){const e=(o,n)=>y("div",{class:"red-div"},n.slots.default()),p="Markdown \u4E2D\u7684 Vue",l=t(0);return(o,n)=>(r(),i("div",null,[u,s("p",null,[s("em",null,"\u4F60\u597D\uFF0C "+a(p))]),D(e,null,{default:d(()=>[s("p",null,[s("em",null,"\u5F53\u524D\u8BA1\u6570\u4E3A\uFF1A "+a(l.value),1)])]),_:1}),s("p",null,[s("button",{onClick:n[0]||(n[0]=b=>l.value++)},"\u70B9\u6211\uFF01")])]))}},_=c(m,[["__file","markdown-and-vue-sfc.html.vue"]]);export{_ as default};
