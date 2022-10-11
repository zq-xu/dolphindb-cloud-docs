import{_ as c,r as l,o as t,c as r,a as n,b as e,d as s,w as d,e as i}from"./app.524f983d.js";const u={},v=e("h1",{id:"command-line-interface",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),s(" Command Line Interface")],-1),D={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress &lt;command&gt; [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Commands:</span></span>
<span class="line"><span style="color:#D4D4D4;">  dev [sourceDir]    Start development server</span></span>
<span class="line"><span style="color:#D4D4D4;">  build [sourceDir]  Build to static site</span></span>
<span class="line"><span style="color:#D4D4D4;">  info               Display environment information</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">For more info, run any </span><span style="color:#DCDCAA;">command</span><span style="color:#D4D4D4;"> with the </span><span style="color:#CE9178;">\`--help\`</span><span style="color:#D4D4D4;"> flag:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev --help</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress build --help</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress info --help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  -v, --version  Display version number </span></span>
<span class="line"><span style="color:#D4D4D4;">  -h, --help     Display this message </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),f={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[s("Set environment variable "),e("code",null,"DEBUG=vuepress*"),s(" to enable debug logs.")],-1),_=i(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev [sourceDir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>
<span class="line"><span style="color:#D4D4D4;">  -p, --port &lt;port&gt;      Use specified port (default: 8080) </span></span>
<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --host &lt;host&gt;          Use specified host (default: 0.0.0.0) </span></span>
<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before dev </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before dev </span></span>
<span class="line"><span style="color:#D4D4D4;">  --open                 Open browser when ready </span></span>
<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>
<span class="line"><span style="color:#D4D4D4;">  --no-watch             Disable watching page and config files (default: true)</span></span>
<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>
<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>`,5),w=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress build [sourceDir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>
<span class="line"><span style="color:#D4D4D4;">  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist) </span></span>
<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before build </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before build </span></span>
<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>
<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>
<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,5);function k(E,x){const p=l("NpmBadge"),a=l("ExternalLinkIcon"),o=l("RouterLink");return t(),r("div",null,[v,n(p,{package:"@vuepress/cli"}),e("p",null,[s("VuePress CLI is provided by "),e("a",D,[s("@vuepress/cli"),n(a)]),s(" package. It is included by the "),e("a",m,[s("vuepress"),n(a)]),s(" package, and you can also install it separately.")]),h,e("div",b,[y,e("p",null,[s("VuePress is using "),e("a",f,[s("debug"),n(a)]),s(" module.")]),g]),_,e("p",null,[s("Build your VuePress site to static files, which are ready for "),n(o,{to:"/guide/deployment.html"},{default:d(()=>[s("deployment")]),_:1}),s(".")]),w])}const S=c(u,[["render",k],["__file","cli.html.vue"]]);export{S as default};
