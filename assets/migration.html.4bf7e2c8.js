import{_ as i,r as t,o as d,c as r,b as n,d as e,a,w as l,e as o}from"./app.0c7ba070.js";const c={},p=o(`<h1 id="migrating-from-v1" tabindex="-1"><a class="header-anchor" href="#migrating-from-v1" aria-hidden="true">#</a> Migrating from v1</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Plugins and themes of VuePress v1 are not compatible with VuePress v2. You need to update them to corresponding v2 version.</p></div><p>Some major changes and enhancements of VuePress v2:</p><ul><li>VuePress v2 is now using Vue 3, so make sure your components and other client files are compatible with Vue 3.</li><li>VuePress v2 is developed with TypeScript, so it provides better TS support now. It&#39;s highly recommended to use TypeScript to develop plugins and themes. VuePress config file also supports TypeScript, and you can use <code>.vuepress/config.ts</code> directly.</li><li>VuePress v2 supports both Webpack and Vite as bundler. Now Vite is the default bundler, while you can still choose to use Webpack. You can even use Vite in dev mode to get better development experience, and use Webpack in build mode to get better browser compatibility.</li><li>VuePress v2 is now released as pure ESM packages, and CommonJS config files are no longer supported.</li></ul><p>Core ideas and processes of VuePress v2 are the same with v1, while v2 API has been re-designed and becomes more normalized. So you might encounter breaking changes when migrating an existing v1 project to v2. This guide is here to help you migrating v1 sites / plugins / themes to v2.</p><ul><li>If you are a common user, you need to read the guide <a href="#for-users">for users</a>.</li><li>If you are a plugin author, you need to read the guide <a href="#for-plugin-authors">for plugin authors</a>.</li><li>If you are a theme author, you need to read the guide <a href="#for-theme-authors">for theme authors</a>.</li></ul><h2 id="for-users" tabindex="-1"><a class="header-anchor" href="#for-users" aria-hidden="true">#</a> For Users</h2><h3 id="user-config-change" tabindex="-1"><a class="header-anchor" href="#user-config-change" aria-hidden="true">#</a> User Config Change</h3><p>Config file should be in ESM format, and CommonJS format config file is no longer supported.</p><div class="language-diff ext-diff line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">// .vuepress/config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">- module.exports = {</span></span>
<span class="line"><span style="color:#CE9178;">-   // user config</span></span>
<span class="line"><span style="color:#CE9178;">- }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">+ export default {</span></span>
<span class="line"><span style="color:#B5CEA8;">+   // user config</span></span>
<span class="line"><span style="color:#B5CEA8;">+ }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h4><p>Using a theme via string is not supported. Import the theme directly.</p><div class="language-diff ext-diff line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">- module.exports = {</span></span>
<span class="line"><span style="color:#CE9178;">-   theme: &#39;@vuepress/theme-default&#39;,</span></span>
<span class="line"><span style="color:#CE9178;">-   themeConfig: {</span></span>
<span class="line"><span style="color:#CE9178;">-     // default theme config</span></span>
<span class="line"><span style="color:#CE9178;">-   },</span></span>
<span class="line"><span style="color:#CE9178;">- }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">+ import { defaultTheme } from &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#B5CEA8;">+ export default {</span></span>
<span class="line"><span style="color:#B5CEA8;">+   theme: defaultTheme({</span></span>
<span class="line"><span style="color:#B5CEA8;">+     // default theme config</span></span>
<span class="line"><span style="color:#B5CEA8;">+   })</span></span>
<span class="line"><span style="color:#B5CEA8;">+ }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="themeconfig" tabindex="-1"><a class="header-anchor" href="#themeconfig" aria-hidden="true">#</a> themeConfig</h4><p>Removed. Set config to the theme directly.</p><h4 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h4><p>Using a plugin via string is not supported. Import the plugin directly.</p><div class="language-diff ext-diff line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">- module.exports = {</span></span>
<span class="line"><span style="color:#CE9178;">-   plugins: [</span></span>
<span class="line"><span style="color:#CE9178;">-     [</span></span>
<span class="line"><span style="color:#CE9178;">-       &#39;@vuepress/plugin-google-analytics&#39;,</span></span>
<span class="line"><span style="color:#CE9178;">-       {</span></span>
<span class="line"><span style="color:#CE9178;">-         id: &#39;G-XXXXXXXXXX&#39;,</span></span>
<span class="line"><span style="color:#CE9178;">-       },</span></span>
<span class="line"><span style="color:#CE9178;">-     ],</span></span>
<span class="line"><span style="color:#CE9178;">-   ],</span></span>
<span class="line"><span style="color:#CE9178;">- }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">+ import { googleAnalyticsPlugin } from &#39;@vuepress/plugin-google-analytics&#39;</span></span>
<span class="line"><span style="color:#B5CEA8;">+ export default {</span></span>
<span class="line"><span style="color:#B5CEA8;">+   plugins: [</span></span>
<span class="line"><span style="color:#B5CEA8;">+     googleAnalyticsPlugin({</span></span>
<span class="line"><span style="color:#B5CEA8;">+         id: &#39;G-XXXXXXXXXX&#39;,</span></span>
<span class="line"><span style="color:#B5CEA8;">+     }),</span></span>
<span class="line"><span style="color:#B5CEA8;">+   ],</span></span>
<span class="line"><span style="color:#B5CEA8;">+ }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a> shouldPrefetch</h4><p>Default value is changed from <code>() =&gt; true</code> to <code>true</code>.</p><h4 id="extrawatchfiles" tabindex="-1"><a class="header-anchor" href="#extrawatchfiles" aria-hidden="true">#</a> extraWatchFiles</h4><p>Removed.</p>`,22),u=n("h4",{id:"patterns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#patterns","aria-hidden":"true"},"#"),e(" patterns")],-1),h=n("p",null,[e("Renamed to "),n("code",null,"pagePatterns")],-1),m=n("h4",{id:"markdown-linenumbers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-linenumbers","aria-hidden":"true"},"#"),e(" markdown.lineNumbers")],-1),v=n("p",null,[e("Default value is changed from "),n("code",null,"false"),e(" to "),n("code",null,"true"),e(".")],-1),f=n("h4",{id:"markdown-pagesuffix",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-pagesuffix","aria-hidden":"true"},"#"),e(" markdown.pageSuffix")],-1),g=n("p",null,"Removed.",-1),y=n("h4",{id:"markdown-externallinks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-externallinks","aria-hidden":"true"},"#"),e(" markdown.externalLinks")],-1),b=n("h4",{id:"markdown-toc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-toc","aria-hidden":"true"},"#"),e(" markdown.toc")],-1),_=n("p",null,"Changed.",-1),D=n("h4",{id:"markdown-plugins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-plugins","aria-hidden":"true"},"#"),e(" markdown.plugins")],-1),C=n("p",null,"Removed.",-1),k=n("h4",{id:"markdown-extendmarkdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-extendmarkdown","aria-hidden":"true"},"#"),e(" markdown.extendMarkdown")],-1),w=n("p",null,"Removed.",-1),x=n("h4",{id:"markdown-extractheaders",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-extractheaders","aria-hidden":"true"},"#"),e(" markdown.extractHeaders")],-1),E=o(`<h4 id="webpack-related-configs" tabindex="-1"><a class="header-anchor" href="#webpack-related-configs" aria-hidden="true">#</a> Webpack Related Configs</h4><p>All webpack related configs are moved to options of <code>@vuepress/bundler-webpack</code>, including:</p><ul><li><code>postcss</code></li><li><code>stylus</code></li><li><code>scss</code></li><li><code>sass</code></li><li><code>less</code></li><li><code>chainWebpack</code></li><li><code>configureWebpack</code></li><li><code>evergreen</code>: default value is changed from <code>false</code> to <code>true</code></li></ul><div class="language-diff ext-diff line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">- module.exports = {</span></span>
<span class="line"><span style="color:#CE9178;">-   sass: { /* ... */ },</span></span>
<span class="line"><span style="color:#CE9178;">- }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">+ import { webpackBundler } from &#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"><span style="color:#B5CEA8;">+ export default {</span></span>
<span class="line"><span style="color:#B5CEA8;">+   bundler: webpackBundler({</span></span>
<span class="line"><span style="color:#B5CEA8;">+     sass: { /* ... */ },</span></span>
<span class="line"><span style="color:#B5CEA8;">+   }),</span></span>
<span class="line"><span style="color:#B5CEA8;">+ }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),A=n("h3",{id:"frontmatter-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frontmatter-change","aria-hidden":"true"},"#"),e(" Frontmatter Change")],-1),P=n("h4",{id:"meta",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#meta","aria-hidden":"true"},"#"),e(" meta")],-1),S=n("p",null,"Removed.",-1),B=o(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">head</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">meta</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foo</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bar</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">link</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">rel</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">canonical</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">href</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foobar</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">script</span></span>
<span class="line"><span style="color:#D4D4D4;">    - {}</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">console.log(&#39;hello from frontmatter&#39;);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Has the same structure with:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// .vuepress/config.ts</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">head:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;meta&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;"> }],</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;link&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">rel:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;canonical&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">href:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;foobar&#39;</span><span style="color:#D4D4D4;"> }],</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;script&#39;</span><span style="color:#D4D4D4;">, {}, </span><span style="color:#CE9178;">\`console.log(&#39;hello from frontmatter&#39;);\`</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="permalink-patterns-change" tabindex="-1"><a class="header-anchor" href="#permalink-patterns-change" aria-hidden="true">#</a> Permalink Patterns Change</h3><ul><li><code>:i_month</code>: removed</li><li><code>:i_day</code>: removed</li><li><code>:minutes</code>: removed (undocumented in v1)</li><li><code>:seconds</code>: removed (undocumented in v1)</li><li><code>:regular</code>: renamed to <code>:raw</code></li></ul>`,5),T=n("h3",{id:"palette-system-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#palette-system-change","aria-hidden":"true"},"#"),e(" Palette System Change")],-1),F=n("p",null,[e("The stylus palette system of VuePress v1 (i.e. "),n("code",null,"styles/palette.styl"),e(" and "),n("code",null,"styles/index.styl"),e(") is no longer provided by VuePress Core.")],-1),V=n("p",null,"Theme authors can use their own way to allow users to customize styles, and not be limited with stylus.",-1),X=n("h3",{id:"conventional-files-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#conventional-files-change","aria-hidden":"true"},"#"),e(" Conventional Files Change")],-1),I=n("h4",{id:"vuepress-enhanceapp-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-enhanceapp-js","aria-hidden":"true"},"#"),e(" .vuepress/enhanceApp.js")],-1),M=n("p",null,[e("Renamed to "),n("code",null,".vuepress/client.{js,ts}"),e(", and the usage has been changed, too.")],-1),j=n("h4",{id:"vuepress-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-components","aria-hidden":"true"},"#"),e(" .vuepress/components/")],-1),R=n("p",null,"Files in this directory will not be registered as Vue components automatically.",-1),W=n("code",null,".vuepress/client.{js,ts}",-1),Y=n("h4",{id:"vuepress-theme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-theme","aria-hidden":"true"},"#"),e(" .vuepress/theme/")],-1),N=n("p",null,"This directory will not be used as local theme implicitly if it is existed.",-1),U=o('<h3 id="markdown-slot-change" tabindex="-1"><a class="header-anchor" href="#markdown-slot-change" aria-hidden="true">#</a> Markdown slot Change</h3><p>Markdown slot is no longer supported.</p><h3 id="cli-change" tabindex="-1"><a class="header-anchor" href="#cli-change" aria-hidden="true">#</a> CLI Change</h3><h4 id="eject-command" tabindex="-1"><a class="header-anchor" href="#eject-command" aria-hidden="true">#</a> eject command</h4><p>Removed.</p><h4 id="cache-options" tabindex="-1"><a class="header-anchor" href="#cache-options" aria-hidden="true">#</a> cache options</h4><ul><li><code>-c, --cache [cache]</code>: changed to <code>--cache &lt;cache&gt;</code>, which means that the shorthand <code>-c</code> is not for <code>cache</code> option, and the value of <code>cache</code> option is not optional.</li><li><code>--no-cache</code>: renamed to <code>--clean-cache</code> .</li></ul><h3 id="default-theme-change" tabindex="-1"><a class="header-anchor" href="#default-theme-change" aria-hidden="true">#</a> Default Theme Change</h3><h4 id="built-in-components" tabindex="-1"><a class="header-anchor" href="#built-in-components" aria-hidden="true">#</a> Built-in Components</h4><ul><li><code>&lt;CodeGroup /&gt;</code> and <code>&lt;CodeBlock /&gt;</code> renamed to <code>&lt;CodeGroup /&gt;</code> and <code>&lt;CodeGroupItem /&gt;</code></li><li><code>&lt;Badge /&gt;</code><ul><li><code>$badgeErrorColor</code> palette variable renamed to <code>$badgeDangerColor</code></li><li><code>type</code> prop only accepts <code>tip</code>, <code>warning</code> and <code>danger</code> now</li></ul></li></ul><h4 id="palette-system" tabindex="-1"><a class="header-anchor" href="#palette-system" aria-hidden="true">#</a> Palette System</h4><p>The palette system of default theme has migrated to SASS and CSS variables.</p>',12),G=n("h4",{id:"theme-config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-config","aria-hidden":"true"},"#"),e(" Theme Config")],-1),q=n("p",null,"Default theme config has been changed a lot. You'd better check the config reference of v2 default theme to migrate it properly.",-1),L=o('<h3 id="official-plugins-change" tabindex="-1"><a class="header-anchor" href="#official-plugins-change" aria-hidden="true">#</a> Official Plugins Change</h3><p>Check the v2 docs of official plugins.</p><h3 id="community-themes-and-plugins" tabindex="-1"><a class="header-anchor" href="#community-themes-and-plugins" aria-hidden="true">#</a> Community Themes and Plugins</h3><p>Themes and plugins of v1 are not compatible with v2.</p><p>Please make sure that those themes and plugins you are using have supported v2, and refer to their own documentation for migration guide.</p><h2 id="for-plugin-authors" tabindex="-1"><a class="header-anchor" href="#for-plugin-authors" aria-hidden="true">#</a> For Plugin Authors</h2><p>Some major breaking changes:</p>',7),$=n("li",null,"You cannot use other plugins in your plugin anymore, which avoids lots of potential issues caused by plugin nesting. If your plugin depends on other plugins, you could list them in the docs to ask users import them manually. Alternatively, you can provide users with an array of plugins for convenience.",-1),z=n("li",null,[e("Most of the v1 hooks have equivalents in v2. The only exception is "),n("code",null,"extendsCli"),e(", which has been removed.")],-1),H=o('<h3 id="plugin-api-change" tabindex="-1"><a class="header-anchor" href="#plugin-api-change" aria-hidden="true">#</a> Plugin API Change</h3><ul><li><code>plugins</code>: removed</li><li><code>ready</code>: renamed to <code>onPrepared</code></li><li><code>updated</code>: renamed to <code>onWatched</code></li><li><code>generated</code>: renamed to <code>onGenerated</code></li><li><code>additionalPages</code>: removed, use <code>app.pages.push(createPage())</code> in <code>onInitialized</code> hook</li><li><code>clientDynamicModules</code>: removed, use <code>app.writeTemp()</code> in <code>onPrepared</code> hook</li><li><code>enhanceAppFiles</code>: removed, use <code>clientConfigFile</code> hook</li><li><code>globalUIComponents</code>: removed, use <code>clientConfigFile</code> hook</li><li><code>clientRootMixin</code>: removed, use <code>clientConfigFile</code> hook</li><li><code>extendMarkdown</code>: renamed to <code>extendsMarkdown</code></li><li><code>chainMarkdown</code>: removed</li><li><code>extendPageData</code>: renamed to <code>extendsPage</code></li><li><code>extendsCli</code>: removed</li><li><code>configureWebpack</code>: removed</li><li><code>chainWebpack</code>: removed</li><li><code>beforeDevServer</code>: removed</li><li><code>afterDevServer</code>: removed</li></ul>',2),J=n("h2",{id:"for-theme-authors",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#for-theme-authors","aria-hidden":"true"},"#"),e(" For Theme Authors")],-1),O=n("p",null,"Although we do not allow using other plugins in a plugin anymore, you can still use plugins in your theme.",-1),K=n("p",null,"Some major breaking changes:",-1),Q=n("strong",null,"conventional theme directory structure",-1),Z=n("li",null,[e("The file "),n("code",null,"theme/enhanceApp.js"),e(" will not be used as client app enhance file implicitly. You need to specify it explicitly in "),n("code",null,"clientConfigFile"),e(" hook.")],-1),ee=n("code",null,"theme/global-components/",-1),ne=n("code",null,"clientConfigFile",-1),se=o("<li>Files in <code>theme/layouts/</code> directory will not be registered as layout components automatically. You need to specify it explicitly in <code>layouts</code> option in <code>clientConfigFile</code>.</li><li>Files in <code>theme/templates/</code> directory will not be used as dev / ssr template automatically. You need to specify theme explicitly in <code>templateBuild</code> and <code>templateDev</code> option.</li><li>Always provide a valid js entry file, and do not use <code>&quot;main&quot;: &quot;layouts/Layout.vue&quot;</code> as the theme entry anymore.</li>",3),ae=n("code",null,"themeConfig",-1),le=n("code",null,"themeConfig",-1),oe=n("code",null,"this.$site.themeConfig",-1),ie=n("code",null,"useThemeData",-1),te=n("li",null,[e("For scalability concerns, "),n("code",null,"this.$site.pages"),e(" is not available any more.")],-1),de=n("h3",{id:"theme-api-change",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-api-change","aria-hidden":"true"},"#"),e(" Theme API Change")],-1),re=n("h4",{id:"layouts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#layouts","aria-hidden":"true"},"#"),e(" layouts")],-1),ce=n("p",null,"Removed.",-1),pe=n("p",null,"Now you need to specify layout component in the client config file of your theme.",-1),ue=n("h4",{id:"extend",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#extend","aria-hidden":"true"},"#"),e(" extend")],-1),he=n("p",null,[e("Renamed to "),n("code",null,"extends"),e(".")],-1),me=n("p",null,[e("You can still inherit a parent theme with "),n("code",null,"extends: parentTheme()"),e(", which will extends the plugins, layouts, etc.")],-1),ve=n("code",null,"@theme",-1),fe=n("code",null,"@parent-theme",-1);function ge(ye,be){const s=t("RouterLink");return d(),r("div",null,[p,n("p",null,[e("You can watch files manually in "),a(s,{to:"/reference/plugin-api.html#onwatched"},{default:l(()=>[e("onWatched")]),_:1}),e(" hook.")]),u,h,m,n("p",null,[e("Moved to "),a(s,{to:"/reference/config.html#markdown-code-linenumbers"},{default:l(()=>[e("markdown.code.lineNumbers")]),_:1}),e(".")]),v,f,g,y,n("p",null,[e("Moved to "),a(s,{to:"/reference/config.html#markdown-links"},{default:l(()=>[e("markdown.links.externalAttrs")]),_:1}),e(".")]),b,_,n("p",null,[e("See "),a(s,{to:"/reference/config.html#markdown-toc"},{default:l(()=>[e("Config > markdown.toc")]),_:1})]),D,C,n("p",null,[e("Use markdown-it plugins in "),a(s,{to:"/reference/plugin-api.html#extendsmarkdown"},{default:l(()=>[e("extendsMarkdown")]),_:1}),e(" hook.")]),k,w,n("p",null,[e("Use "),a(s,{to:"/reference/plugin-api.html#extendsmarkdown"},{default:l(()=>[e("extendsMarkdown")]),_:1}),e(" hook.")]),x,n("p",null,[e("Moved to "),a(s,{to:"/reference/config.html#markdown-headers"},{default:l(()=>[e("markdown.headers")]),_:1}),e(".")]),E,n("p",null,[e("Please refer to "),a(s,{to:"/guide/bundler.html"},{default:l(()=>[e("Guide > Bundler")]),_:1}),e(".")]),A,P,S,n("p",null,[e("Use "),a(s,{to:"/reference/frontmatter.html#head"},{default:l(()=>[e("head")]),_:1}),e(" instead. For example:")]),B,n("p",null,[e("See "),a(s,{to:"/reference/frontmatter.html#permalinkpattern"},{default:l(()=>[e("Frontmatter > permalinkPattern")]),_:1}),e(".")]),T,F,n("p",null,[e("The palette system is extracted to "),a(s,{to:"/reference/plugin/palette.html"},{default:l(()=>[e("@vuepress/plugin-palette")]),_:1}),e(".")]),V,n("p",null,[e("If you are using default theme, the palette system is still available but migrated to SASS, while most variables have been migrated to CSS variables. See "),a(s,{to:"/reference/default-theme/styles.html"},{default:l(()=>[e("Default Theme > Styles")]),_:1}),e(".")]),X,I,M,n("p",null,[e("See "),a(s,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:l(()=>[e("Advanced > Cookbook > Usage of Client Config")]),_:1}),e(".")]),j,R,n("p",null,[e("You need to use "),a(s,{to:"/reference/plugin/register-components.html"},{default:l(()=>[e("@vuepress/plugin-register-components")]),_:1}),e(", or register your components manually in "),W,e(".")]),Y,N,n("p",null,[e("You need to import and set your local theme via "),a(s,{to:"/reference/config.html#theme"},{default:l(()=>[e("theme")]),_:1}),e(" option.")]),U,n("p",null,[e("See "),a(s,{to:"/reference/default-theme/styles.html"},{default:l(()=>[e("Default Theme > Styles")]),_:1}),e(".")]),G,q,n("p",null,[e("See "),a(s,{to:"/reference/default-theme/config.html"},{default:l(()=>[e("Default Theme > Config")]),_:1}),e(".")]),L,n("ul",null,[$,z,n("li",null,[e("Webpack related hooks are removed, because VuePress Core has decoupled with webpack. You can try to use "),a(s,{to:"/reference/plugin-api.html#extendsbundleroptions"},{default:l(()=>[e("extendsBundlerOptions")]),_:1}),e(" hook for similar purpose, and make sure to work with all bundlers.")])]),n("p",null,[e("For more detailed guide about how to write a plugin in v2, see "),a(s,{to:"/advanced/plugin.html"},{default:l(()=>[e("Advanced > Writing a Plugin")]),_:1}),e(".")]),H,n("p",null,[e("See "),a(s,{to:"/reference/plugin-api.html"},{default:l(()=>[e("Plugin API")]),_:1}),e(".")]),J,O,K,n("ul",null,[n("li",null,[e("There is no "),Q,e(" anymore. "),n("ul",null,[Z,n("li",null,[e("Files in "),ee,e(" directory will not be registered as Vue components automatically. You need to use "),a(s,{to:"/reference/plugin/register-components.html"},{default:l(()=>[e("@vuepress/plugin-register-components")]),_:1}),e(", or register components manually in "),ne,e(".")]),se])]),n("li",null,[ae,e(" is removed from user config and site data. To access the "),le,e(" as you would via "),oe,e(" in v1, we now recommend using the "),a(s,{to:"/reference/plugin/theme-data.html"},{default:l(()=>[e("@vuepress/plugin-theme-data")]),_:1}),e(" plugin and its "),ie,e(" composition API.")]),n("li",null,[e("Stylus is no longer the default CSS pre-processor, and the stylus palette system is not embedded. If you still want to use similar palette system as v1, "),a(s,{to:"/reference/plugin/palette.html"},{default:l(()=>[e("@vuepress/plugin-palette")]),_:1}),e(" may help.")]),n("li",null,[e("Markdown code blocks syntax highlighting by Prism.js is not embedded by default. You can use either "),a(s,{to:"/reference/plugin/prismjs.html"},{default:l(()=>[e("@vuepress/plugin-prismjs")]),_:1}),e(" or "),a(s,{to:"/reference/plugin/shiki.html"},{default:l(()=>[e("@vuepress/plugin-shiki")]),_:1}),e(", or implement syntax highlighting in your own way.")]),te]),n("p",null,[e("For more detailed guide about how to write a theme in v2, see "),a(s,{to:"/advanced/theme.html"},{default:l(()=>[e("Advanced > Writing a Theme")]),_:1}),e(".")]),de,re,ce,pe,n("p",null,[e("See "),a(s,{to:"/advanced/theme.html"},{default:l(()=>[e("Advanced > Writing a theme")]),_:1}),e(".")]),ue,he,me,n("p",null,[e("You can refer to "),a(s,{to:"/reference/default-theme/extending.html"},{default:l(()=>[e("Default Theme > Extending")]),_:1}),e(" for how to extend default theme.")]),n("p",null,[e("The "),ve,e(" and "),fe,e(" aliases are removed by default, but you can still make a extendable theme with similar approach, see "),a(s,{to:"/advanced/cookbook/making-a-theme-extendable.html"},{default:l(()=>[e("Advanced > Cookbook > Making a Theme Extendable")]),_:1}),e(".")])])}const De=i(c,[["render",ge],["__file","migration.html.vue"]]);export{De as default};
