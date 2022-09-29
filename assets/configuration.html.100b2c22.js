import{_ as i,r as c,o as p,c as r,b as e,d as s,a as l,w as a,e as o}from"./app.0c7ba070.js";const t={},d=o(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config File</h2><p>Without any configuration, the VuePress site is pretty minimal. To customize your site, let\u2019s first create a <code>.vuepress</code> directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u251C\u2500 .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2514\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 .gitignore</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The essential file for configuring a VuePress site is <code>.vuepress/config.js</code>, while TypeScript config file is also supported. You can use <code>.vuepress/config.ts</code> instead to get better types hint for VuePress config.</p><p>To be more specific, we have a convention for config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>`,7),D=e("code",null,"--config",-1),u=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">vuepress dev docs --config my-config.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A basic config file looks like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Hello VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Just playing around&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"TIP",-1),y=o(`<h2 id="client-config-file" tabindex="-1"><a class="header-anchor" href="#client-config-file" aria-hidden="true">#</a> Client Config File</h2><p>In most cases, the config file is sufficient to configure your VuePress site. However, sometimes users may want to add some client-side code directly. To help with this, VuePress also supports a client config file:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u251C\u2500 .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2502  \u251C\u2500 client.js   &lt;--- client config file</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2502  \u2514\u2500 config.js   &lt;--- config file</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2514\u2500 README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 .gitignore</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similarly, we also have a convention for client config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>A basic client config file looks like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={class:"custom-container tip"},g=e("p",{class:"custom-container-title"},"TIP",-1),h=e("p",null,"Unlike config file, client config file could not be specified via CLI options.",-1);function C(b,_){const n=c("RouterLink");return p(),r("div",null,[d,e("p",null,[s("You can also specify the config file via "),D,s(" option of "),l(n,{to:"/guide/cli.html"},{default:a(()=>[s("CLI")]),_:1}),s(":")]),u,e("div",f,[v,e("p",null,[s("Check out the "),l(n,{to:"/reference/config.html"},{default:a(()=>[s("Config Reference")]),_:1}),s(" for a full list of VuePress config.")])]),y,e("div",m,[g,h,e("p",null,[s("To learn more about client config file, see "),l(n,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:a(()=>[s("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])}const k=i(t,[["render",C],["__file","configuration.html.vue"]]);export{k as default};
