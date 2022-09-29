import{_ as i,r as a,o as c,c as p,a as n,b as e,d as s,w as d,e as o}from"./app.0c7ba070.js";const u={},h=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),s(" Webpack")],-1),_={href:"https://www.npmjs.com/package/@vuepress/bundler-webpack",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},f=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/bundler-webpack@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>Reference of webpack bundler options:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">webpackBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/cli&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bundler:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">webpackBundler</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">postcss:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">vue:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack" aria-hidden="true">#</a> configureWebpack</h3>`,5),g=e("li",null,[e("p",null,[s("Type: "),e("code",null,"(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration | void")])],-1),v=e("p",null,"Details:",-1),D=e("p",null,"Edit the internal webpack config.",-1),k=e("code",null,"isServer",-1),m=e("code",null,"isBuild",-1),y={href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"chainwebpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chainwebpack","aria-hidden":"true"},"#"),s(" chainWebpack")],-1),C=e("li",null,[e("p",null,[s("Type: "),e("code",null,"(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void")])],-1),x=e("p",null,"Details:",-1),S={href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,[s("This option accepts a function that will receive a "),e("code",null,"Config"),s(" instance that provided by "),e("code",null,"webpack-chain"),s(" as the 1st argument an "),e("code",null,"isServer"),s(" flag as the 2nd argument and an "),e("code",null,"isBuild"),s(" flag as the 3rd argument.")],-1),E=e("h3",{id:"devserversetupmiddlewares",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#devserversetupmiddlewares","aria-hidden":"true"},"#"),s(" devServerSetupMiddlewares")],-1),T=e("li",null,[e("p",null,[s("Type: "),e("code",null,"(middlewares: Middleware[], devServer: Server) => Middleware[]")])],-1),A=e("li",null,[e("p",null,"Details:"),e("p",null,[s("A hook to be called in "),e("code",null,"devServer.setupMiddlewares"),s(" of webpack.")]),e("p",null,[s("The arguments of the function are those of "),e("code",null,"devServer.setupMiddlewares"),s(".")])],-1),B=e("p",null,"Also see:",-1),L={href:"https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares",target:"_blank",rel:"noopener noreferrer"},W=e("h3",{id:"vue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),s(" vue")],-1),j=e("li",null,[e("p",null,[s("Type: "),e("code",null,"VueLoaderOptions")])],-1),F=e("li",null,[e("p",null,"Details:"),e("p",null,[s("Options for "),e("code",null,"vue-loader"),s(".")])],-1),M=e("p",null,"Also see:",-1),N={href:"https://vue-loader.vuejs.org/options.html",target:"_blank",rel:"noopener noreferrer"},V=e("h3",{id:"postcss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#postcss","aria-hidden":"true"},"#"),s(" postcss")],-1),R=e("li",null,[e("p",null,[s("Type: "),e("code",null,"PostcssLoaderOptions")])],-1),U=e("li",null,[e("p",null,"Details:"),e("p",null,[s("Options for "),e("code",null,"postcss-loader"),s(".")])],-1),I=e("p",null,"Also see:",-1),q={href:"https://github.com/webpack-contrib/postcss-loader#options",target:"_blank",rel:"noopener noreferrer"},P=e("h3",{id:"stylus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylus","aria-hidden":"true"},"#"),s(" stylus")],-1),z=e("li",null,[e("p",null,[s("Type: "),e("code",null,"StylusLoaderOptions")])],-1),H=e("li",null,[e("p",null,"Details:"),e("p",null,[s("Options for "),e("code",null,"stylus-loader"),s(".")])],-1),Q=e("p",null,"Also see:",-1),Y={href:"https://github.com/webpack-contrib/stylus-loader#options",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"scss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scss","aria-hidden":"true"},"#"),s(" scss")],-1),J=e("li",null,[e("p",null,[s("Type: "),e("code",null,"SassLoaderOptions")])],-1),K=e("li",null,[e("p",null,"Details:"),e("p",null,[s("Options for "),e("code",null,"sass-loader"),s(" for "),e("code",null,".scss"),s(" files.")])],-1),X=e("p",null,"Also see:",-1),Z={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},$=e("h3",{id:"sass",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sass","aria-hidden":"true"},"#"),s(" sass")],-1),ee=e("li",null,[e("p",null,[s("Type: "),e("code",null,"SassLoaderOptions")])],-1),se=e("li",null,[e("p",null,"Details:"),e("p",null,[s("Options for "),e("code",null,"sass-loader"),s(" for "),e("code",null,".sass"),s(" files.")])],-1),ne=e("p",null,"Also see:",-1),le={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},ae=e("h3",{id:"less",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#less","aria-hidden":"true"},"#"),s(" less")],-1),oe=e("li",null,[e("p",null,[s("Type: "),e("code",null,"LessLoaderOptions")])],-1),te=e("li",null,[e("p",null,"Details:"),e("p",null,[s("Options for "),e("code",null,"less-loader"),s(".")])],-1),re=e("p",null,"Also see:",-1),ie={href:"https://github.com/webpack-contrib/less-loader#options",target:"_blank",rel:"noopener noreferrer"},ce=o('<h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen" aria-hidden="true">#</a> evergreen</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Set to <code>true</code> if you are only targeting evergreen browsers. This will disable some transpilation and polyfills, and result in faster builds and smaller files.</p></li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="referencing-public-files-after-changing-base" tabindex="-1"><a class="header-anchor" href="#referencing-public-files-after-changing-base" aria-hidden="true">#</a> Referencing Public Files after Changing <code>base</code></h3>',4),pe=e("code",null,"base",-1),de=e("code",null,"base",-1),ue=e("h3",{id:"using-with-default-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-with-default-theme","aria-hidden":"true"},"#"),s(" Using with Default Theme")],-1),he={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://www.npmjs.com/package/sass-loader",target:"_blank",rel:"noopener noreferrer"},be={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"};function fe(ge,ve){const t=a("NpmBadge"),l=a("ExternalLinkIcon"),r=a("RouterLink");return c(),p("div",null,[h,n(t,{package:"@vuepress/bundler-webpack"}),e("p",null,[s("Webpack bundler is provided by "),e("a",_,[s("@vuepress/bundler-webpack"),n(l)]),s(" package. It is a dependency of the "),e("a",b,[s("vuepress-webpack"),n(l)]),s(" package, and you can also install it separately.")]),f,e("ul",null,[g,e("li",null,[v,D,e("p",null,[s("This option accepts a function that will receive a webpack config object as the 1st argument, an "),k,s(" flag as the 2nd argument and an "),m,s(" flag as the 3rd argument. You can either mutate the config directly, or return an object to be merged by "),e("a",y,[s("webpack-merge"),n(l)]),s(".")])])]),w,e("ul",null,[C,e("li",null,[x,e("p",null,[s("Edit the internal webpack config with "),e("a",S,[s("webpack-chain"),n(l)]),s(".")]),O])]),E,e("ul",null,[T,A,e("li",null,[B,e("ul",null,[e("li",null,[e("a",L,[s("Webpack > Configuration > DevServer > devServer.setupMiddlewares"),n(l)])])])])]),W,e("ul",null,[j,F,e("li",null,[M,e("ul",null,[e("li",null,[e("a",N,[s("vue-loader > Options Reference"),n(l)])])])])]),V,e("ul",null,[R,U,e("li",null,[I,e("ul",null,[e("li",null,[e("a",q,[s("postcss-loader > Options"),n(l)])])])])]),P,e("ul",null,[z,H,e("li",null,[Q,e("ul",null,[e("li",null,[e("a",Y,[s("stylus-loader > Options"),n(l)])])])])]),G,e("ul",null,[J,K,e("li",null,[X,e("ul",null,[e("li",null,[e("a",Z,[s("sass-loader > Options"),n(l)])])])])]),$,e("ul",null,[ee,se,e("li",null,[ne,e("ul",null,[e("li",null,[e("a",le,[s("sass-loader > Options"),n(l)])])])])]),ae,e("ul",null,[oe,te,e("li",null,[re,e("ul",null,[e("li",null,[e("a",ie,[s("less-loader > Options"),n(l)])])])])]),ce,e("p",null,[s("Unlike Vite, Webpack won't handle "),pe,s(" for public files automatically. So if you change the "),de,s(" of your site, you'd better to use "),n(r,{to:"/guide/assets.html#base-helper"},{default:d(()=>[s("Base Helper")]),_:1}),s(" when referencing an public image file.")]),ue,e("p",null,[s("Default theme is using "),e("a",he,[s("SASS"),n(l)]),s(" as CSS pre-processor, so you might need to install "),e("a",_e,[s("sass-loader"),n(l)]),s(" as a peer dependency to make it work with Webpack, especially when you are using "),e("a",be,[s("pnpm"),n(l)]),s(".")])])}const ke=i(u,[["render",fe],["__file","webpack.html.vue"]]);export{ke as default};
