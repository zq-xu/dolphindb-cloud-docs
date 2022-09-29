import{_ as i,r as n,o,c as r,a as l,b as s,d as e,e as t}from"./app.0c7ba070.js";const c={},d=s("h1",{id:"palette",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#palette","aria-hidden":"true"},"#"),e(" palette")],-1),u=t(`<p>Provide palette support for your theme.</p><p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won&#39;t need to use it directly in most cases.</p><p>For theme authors, this plugin will help you to provide styles customization for users.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-palette@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">palettePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="palette-and-style" tabindex="-1"><a class="header-anchor" href="#palette-and-style" aria-hidden="true">#</a> Palette and Style</h2><p>This plugin will provide a <code>@vuepress/plugin-palette/palette</code> (palette file) and a <code>@vuepress/plugin-palette/style</code> (style file) to be imported in your theme styles.</p>`,8),y={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},D={href:"http://lesscss.org/features/#variables-feature",target:"_blank",rel:"noopener noreferrer"},v={href:"https://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>The style file is used for overriding the default styles or adding extra styles, so it&#39;s likely to be imported at the end of your theme styles.</p><h2 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h2><p>Use this plugin in your theme, assuming you are using SASS:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">preset:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;sass&#39;</span><span style="color:#D4D4D4;"> }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-of-palette" tabindex="-1"><a class="header-anchor" href="#usage-of-palette" aria-hidden="true">#</a> Usage of Palette</h3><p>Import the plugin&#39;s palette file where your theme needs to use the corresponding variables, such as in the <code>Layout.vue</code> file:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">h1</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;palette-title&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Hello, Palette!</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;scss&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">/* import variables from the plugin&#39;s palette file */</span></span>
<span class="line"><span style="color:#C586C0;">@import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette/palette&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* set default value for variables */</span></span>
<span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">!default</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* use variables in your styles */</span></span>
<span class="line"><span style="color:#D7BA7D;">.palette-title</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then users can customize variables in <code>.vuepress/styles/palette.scss</code>:</p><div class="language-scss ext-scss line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">green</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usage-of-style" tabindex="-1"><a class="header-anchor" href="#usage-of-style" aria-hidden="true">#</a> Usage of Style</h3><p>Import the plugin&#39;s style file after your theme&#39;s styles, for example, in the <code>clientConfigFile</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// import your theme&#39;s style file</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;path/to/your/theme/style&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// import the plugin&#39;s style file</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette/style&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then users can add extra styles in <code>.vuepress/styles/index.scss</code> and override the default styles of your theme:</p><div class="language-scss ext-scss line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">h1</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">font-size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2.5rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="preset" tabindex="-1"><a class="header-anchor" href="#preset" aria-hidden="true">#</a> preset</h3><ul><li><p>Type: <code>&#39;css&#39; | &#39;sass&#39; | &#39;less&#39; | &#39;stylus&#39;</code></p></li><li><p>Default: <code>&#39;css&#39;</code></p></li><li><p>Details:</p><p>Set preset for other options.</p><p>If you don&#39;t need advanced customization of the plugin, it&#39;s recommended to only set this option and omit other options.</p></li></ul><h3 id="userpalettefile" tabindex="-1"><a class="header-anchor" href="#userpalettefile" aria-hidden="true">#</a> userPaletteFile</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;.vuepress/styles/palette.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/palette.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/palette.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/palette.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the user palette file, relative to source directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>The file is where users define style variables, and it&#39;s recommended to keep the default file path as a convention.</p></li></ul><h3 id="temppalettefile" tabindex="-1"><a class="header-anchor" href="#temppalettefile" aria-hidden="true">#</a> tempPaletteFile</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;styles/palette.css&#39;</code></li><li>sass: <code>&#39;styles/palette.scss&#39;</code></li><li>less: <code>&#39;styles/palette.less&#39;</code></li><li>stylus: <code>&#39;styles/palette.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the generated palette temp file, relative to temp directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>You should import the palette file via <code>&#39;@vuepress/plugin-palette/palette&#39;</code> alias, so you don&#39;t need to change this option in most cases.</p></li></ul><h3 id="userstylefile" tabindex="-1"><a class="header-anchor" href="#userstylefile" aria-hidden="true">#</a> userStyleFile</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;.vuepress/styles/index.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/index.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/index.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/index.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the user style file, relative to source directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>The file is where users override default styles or add extra styles, and it&#39;s recommended to keep the default file path as a convention.</p></li></ul><h3 id="tempstylefile" tabindex="-1"><a class="header-anchor" href="#tempstylefile" aria-hidden="true">#</a> tempStyleFile</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>css: <code>&#39;styles/index.css&#39;</code></li><li>sass: <code>&#39;styles/index.scss&#39;</code></li><li>less: <code>&#39;styles/index.less&#39;</code></li><li>stylus: <code>&#39;styles/index.styl&#39;</code></li></ul></li><li><p>Details:</p><p>File path of the generated style temp file, relative to temp directory.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>You should import the style file via <code>&#39;@vuepress/plugin-palette/style&#39;</code> alias, so you don&#39;t need to change this option in most cases.</p></li></ul><h3 id="importcode" tabindex="-1"><a class="header-anchor" href="#importcode" aria-hidden="true">#</a> importCode</h3><ul><li><p>Type: <code>(filePath: string) =&gt; string</code></p></li><li><p>Default:</p><ul><li>css: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>sass: <code>(filePath) =&gt; \`@forward &#39;file:///\${filePath}&#39;;\\n\`</code></li><li>less: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>stylus: <code>(filePath) =&gt; \`@require &#39;\${filePath}&#39;;\\n\`</code></li></ul></li><li><p>Details:</p><p>Function to generate import code.</p><p>The default value depends on the <a href="#preset">preset</a> option.</p><p>This option is used for generating <a href="#temppalettefile">tempPaletteFile</a> and <a href="#tempstylefile">tempStyleFile</a>, and you don&#39;t need to change this option in most cases.</p></li></ul>`,27);function f(g,b){const p=n("NpmBadge"),a=n("ExternalLinkIcon");return o(),r("div",null,[d,l(p,{package:"@vuepress/plugin-palette"}),u,s("p",null,[e("The palette file is used for defining style variables, so it's likely to be imported at the beginning of your theme styles. For example, users can define "),s("a",y,[e("CSS variables"),l(a)]),e(", "),s("a",h,[e("SASS variables"),l(a)]),e(", "),s("a",D,[e("LESS variables"),l(a)]),e(" or "),s("a",v,[e("Stylus variables"),l(a)]),e(" in the palette, and then you can use those variables in your theme styles.")]),m])}const E=i(c,[["render",f],["__file","palette.html.vue"]]);export{E as default};
