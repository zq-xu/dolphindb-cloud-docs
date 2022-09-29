import{_ as i,a as r}from"./vuepress-core-process.fb932055.js";import{_ as s,r as a,o as d,c as u,b as l,d as e,a as n,w as o,e as c}from"./app.0c7ba070.js";const p={},h=c('<h1 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p><img src="'+i+'" alt="vuepress-architecture-overview"></p><p>The above figure shows a brief overview of the VuePress architecture:</p><ul><li>Node App will generate temp files, including the pages, routes, etc.</li><li>Bundler will handle Client App together with the temp files, just like a common Vue SPA.</li></ul><p>As a developer, you must be aware of that VuePress has two main parts: <strong>Node App</strong> and <strong>Client App</strong>, which is important when developing plugins and themes:</p><ul><li>The entry file of a plugin or a theme will be loaded in Node App.</li><li>Client files will be loaded in Client App, which will be handled by bundler. For example, components, client config files, etc.</li></ul><h2 id="core-process-and-hooks" tabindex="-1"><a class="header-anchor" href="#core-process-and-hooks" aria-hidden="true">#</a> Core Process and Hooks</h2><p><img src="'+r+'" alt="vuepress-core-process"></p>',9),f=l("strong",null,"init",-1),g=l("li",null,"Theme and plugins will be loaded. That means all the plugins should be used before initialization.",-1),m=l("li",null,[e("In the "),l("strong",null,"prepare"),e(" stage: "),l("ul",null,[l("li",null,"Temp files will be generated, so all hooks related to client files will be processed here.")])],-1),w=l("strong",null,"dev / build",-1);function _(b,k){const t=a("RouterLink");return d(),u("div",null,[h,l("p",null,[e("The above figure shows the core process of VuePress Node App and the hooks of "),n(t,{to:"/reference/plugin-api.html"},{default:o(()=>[e("Plugin API")]),_:1}),e(":")]),l("ul",null,[l("li",null,[e("In the "),f,e(" stage: "),l("ul",null,[g,l("li",null,[e("As we are using markdown-it to parse the markdown file, so we need to create markdown-it instance before loading pages: "),l("ul",null,[l("li",null,[n(t,{to:"/reference/plugin-api.html#extendsmarkdownoptions"},{default:o(()=>[e("extendsMarkdownOptions")]),_:1}),e(" hook will be processed to create markdown-it instance.")]),l("li",null,[n(t,{to:"/reference/plugin-api.html#extendsmarkdown"},{default:o(()=>[e("extendsMarkdown")]),_:1}),e(" hook will be processed extends markdown-it instance.")])])]),l("li",null,[e("Page files will be loaded: "),l("ul",null,[l("li",null,[n(t,{to:"/reference/plugin-api.html#extendspageoptions"},{default:o(()=>[e("extendsPageOptions")]),_:1}),e(" hook will be processed to create pages.")]),l("li",null,[n(t,{to:"/reference/plugin-api.html#extendspage"},{default:o(()=>[e("extendsPage")]),_:1}),e(" hook will be processed to extends page object.")])])])])]),m,l("li",null,[e("In the "),w,e(" stage: "),l("ul",null,[l("li",null,[e("Bundler will be resolved: "),l("ul",null,[l("li",null,[n(t,{to:"/reference/plugin-api.html#extendsbundleroptions"},{default:o(()=>[e("extendsBundlerOptions")]),_:1}),e(" hook will be processed to create bundler configuration.")]),l("li",null,[n(t,{to:"/reference/plugin-api.html#alias"},{default:o(()=>[e("alias")]),_:1}),e(" hook and "),n(t,{to:"/reference/plugin-api.html#define"},{default:o(()=>[e("define")]),_:1}),e(" hook would be used in bundler configuration, so they will be processed here.")])])])])])])])}const A=s(p,[["render",_],["__file","architecture.html.vue"]]);export{A as default};
