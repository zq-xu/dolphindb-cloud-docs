import{_ as r,r as a,o as d,c as u,a as l,b as s,d as n,w as e,e as c}from"./app.0c7ba070.js";const D={},m=s("h1",{id:"markdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),n(" Markdown")],-1),v=s("h2",{id:"custom-containers",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#"),n(" Custom Containers")],-1),y=c(`<p>Usage:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: &lt;type&gt; [</span><span style="color:#CE9178;">title</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">content</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>type</code> is required, and the <code>title</code> and <code>content</code> are optional.</p><p>Supported <code>type</code> :</p>`,4),b=s("li",null,[s("code",null,"tip")],-1),g=s("li",null,[s("code",null,"warning")],-1),h=s("li",null,[s("code",null,"danger")],-1),_=s("li",null,[s("code",null,"details")],-1),C=s("ul",null,[s("li",null,[s("code",null,"code-group")]),s("li",null,[s("code",null,"code-group-item")])],-1),E=s("li",null,[s("p",null,"Example 1 (default title):")],-1),k=c(`<p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: tip</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a tip</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: warning</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a warning</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: danger</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a dangerous warning</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a details block</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is a tip</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This is a warning</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a dangerous warning</p></div><details class="custom-container details"><p>This is a details block</p></details><ul><li>Example 2 (custom title):</li></ul><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: danger STOP</span></span>
<span class="line"><span style="color:#D4D4D4;">Danger zone, do not proceed</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details Click me to view the code</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Hello, VuePress!&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="custom-container details"><summary>Click me to view the code</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Hello, VuePress!&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>Example 3 (code group alias):</li></ul><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">:::: code-group</span></span>
<span class="line"><span style="color:#D4D4D4;">::: code-group-item FOO</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"><span style="color:#D4D4D4;">::: code-group-item BAR</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"><span style="color:#D4D4D4;">::::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,17),f=s("div",{class:"language-typescript ext-ts line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"foo"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},"'foo'")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),w=s("div",{class:"language-typescript ext-ts line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"bar"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},"'bar'")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1);function x(F,T){const p=a("NpmBadge"),o=a("RouterLink"),i=a("CodeGroupItem"),t=a("CodeGroup");return d(),u("div",null,[m,l(p,{package:"@vuepress/theme-default"}),v,s("ul",null,[s("li",null,[y,s("ul",null,[b,g,h,_,s("li",null,[n("Alias of "),l(o,{to:"/reference/default-theme/components.html#codegroup"},{default:e(()=>[n("CodeGroup")]),_:1}),n(" and "),l(o,{to:"/reference/default-theme/components.html#codegroupitem"},{default:e(()=>[n("CodeGroupItem")]),_:1}),n(": "),C])])]),E]),k,l(t,null,{default:e(()=>[l(i,{title:"FOO"},{default:e(()=>[f]),_:1}),l(i,{title:"BAR"},{default:e(()=>[w]),_:1})]),_:1})])}const N=r(D,[["render",x],["__file","markdown.html.vue"]]);export{N as default};
