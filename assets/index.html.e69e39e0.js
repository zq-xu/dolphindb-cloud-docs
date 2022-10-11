import{_ as a,r as n,o as s,c as i,b as t,d as e,a as r,e as d}from"./app.d8efe043.js";const h={},c=t("h1",{id:"introduction",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),e(" Introduction")],-1),u={href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},l=t("p",null,"The purpose of creating VuePress was to support the documentation of Vue.js and its sub-projects, but now it has been helping a large amount of users to build their documentation, blogs, and other static sites.",-1),p=t("h2",{id:"how-it-works",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#how-it-works","aria-hidden":"true"},"#"),e(" How It Works")],-1),f={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://router.vuejs.org",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},b=t("p",null,"During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you\u2019ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.",-1),w={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"nuxt generate",-1),y={href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},k=d('<h2 id="why-not" tabindex="-1"><a class="header-anchor" href="#why-not" aria-hidden="true">#</a> Why Not ...?</h2><h3 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt" aria-hidden="true">#</a> Nuxt</h3><p>Nuxt is an outstanding Vue SSR framework, and it is capable of doing what VuePress does. But Nuxt is designed for building applications, while VuePress is more lightweight and focused on content-centric static sites.</p><h3 id="vitepress" tabindex="-1"><a class="header-anchor" href="#vitepress" aria-hidden="true">#</a> VitePress</h3><p>VitePress is the little brother of VuePress. It&#39;s also created and maintained by our Vue.js team. It&#39;s even more lightweight and faster than VuePress. However, as a tradeoff, it&#39;s more opinionated and less configurable. For example, it does not support plugins. But VitePress is powerful enough to make your content online if you don&#39;t need advanced customizations.</p><p>It might not be an appropriate comparison, but you can take VuePress and VitePress as Laravel and Lumen.</p><h3 id="docsify-docute" tabindex="-1"><a class="header-anchor" href="#docsify-docute" aria-hidden="true">#</a> Docsify / Docute</h3><p>Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don\u2019t care for SEO and don\u2019t want to mess with installing dependencies, these are still great choices.</p><h3 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo" aria-hidden="true">#</a> Hexo</h3><p>Hexo has been serving the Vue 2.x docs well. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo\u2019s Markdown rendering isn\u2019t the most flexible to configure.</p><h3 id="gitbook" tabindex="-1"><a class="header-anchor" href="#gitbook" aria-hidden="true">#</a> GitBook</h3><p>We\u2019ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.</p>',12);function x(V,v){const o=n("ExternalLinkIcon");return s(),i("div",null,[c,t("p",null,[e("VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in "),t("a",u,[e("Markdown"),r(o)]),e(", then VuePress will help you to generate a static site to host them.")]),l,p,t("p",null,[e("A VuePress site is in fact a single-page application (SPA) powered by "),t("a",f,[e("Vue"),r(o)]),e(" and "),t("a",g,[e("Vue Router"),r(o)]),e(".")]),t("p",null,[e("Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with "),t("a",m,[e("markdown-it"),r(o)]),e(" and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.")]),b,t("p",null,[e("During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by "),t("a",w,[e("Nuxt"),r(o)]),e("'s "),_,e(" command and other projects like "),t("a",y,[e("Gatsby"),r(o)]),e(".")]),k])}const j=a(h,[["render",x],["__file","index.html.vue"]]);export{j as default};