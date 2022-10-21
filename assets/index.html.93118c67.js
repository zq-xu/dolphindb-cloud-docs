import{_ as c,r,o as l,c as a,a as e,b as o,d as t,e as i}from"./app.c5edd108.js";const s={},d=i('<h1 id="kubernetes\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#kubernetes\u6982\u89C8" aria-hidden="true">#</a> Kubernetes\u6982\u89C8</h1><p>\u5728<code>Kubernetes</code>\u73AF\u5883\u4E2D\uFF0CDolphinDB\u4E3B\u8981\u5305\u62EC\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\uFF1A</p><ul><li>DolphinDB\u5B9E\u4F8B\uFF1A \u6BCF\u4E2ADolphinDB\u5B9E\u4F8B\u5BF9\u5E94\u4E00\u4E2A<code>Statefulset</code>\u8D44\u6E90(\u4E00\u4E2A<code>Pod</code>):</li><li>DolphinDB\u914D\u7F6E\uFF1A DolphinDB\u7684\u914D\u7F6E\u9879\u5B9A\u4E49\u5728<code>Configmap</code>\u8D44\u6E90\u4E2D(\u5305\u62EC<code>DolphinDB License</code>)\uFF1B</li><li>DolphinDB\u7F51\u7EDC\uFF1A DolphinDB\u7684\u7F51\u7EDC\u7531<code>Service</code>\u8D44\u6E90\u8FDB\u884C\u4EE3\u7406;</li><li>DolphinDB\u5B58\u50A8\uFF1A DolphinDB\u7684\u5B58\u50A8\u4E3B\u8981\u7531<code>PVC</code>\u8D44\u6E90\u8FDB\u884C\u7BA1\u7406\uFF0C\u5B9E\u73B0\u6570\u636E\u6301\u4E45\u5316\u3002</li></ul><p>\u5728<code>Kubernetes</code>\u73AF\u5883\u4E2D\uFF0CDolphinDB\u4E5F\u53EF\u4EE5\u901A\u8FC7<a href="#crd-operator">CRD</a>\u6765\u5B9A\u4E49\uFF0C\u5E76\u7531<a href="#crd-operator">DolphinDB-Operator</a>\u89E3\u6790\u4E3A<code>Statefulset</code>\u3001<code>Service</code>\u548C<code>Configmap</code>\u7B49Kubernetes\u539F\u751F\u8D44\u6E90\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>DolphinDB\u5728Kubernetes\u73AF\u5883\u4E2D\u4ECD\u7136\u9700\u8981\u4F7F\u7528License\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\uFF0CDolphinDB\u5728Kubernetes\u73AF\u5883\u4E2D\u7684License\u4EE5<code>Configmap</code>\u8D44\u6E90\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u5E76\u6302\u8F7D\u5230DolphinDB\u6240\u5728\u7684<code>Pod</code>\u8D44\u6E90\u4E2D\u3002</p></div><h2 id="\u63A8\u8350\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u73AF\u5883" aria-hidden="true">#</a> \u63A8\u8350\u73AF\u5883</h2>',6),h={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://helm.sh/zh/docs/",target:"_blank",rel:"noopener noreferrer"},u=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"\u6CE8\u610F"),e("p",null,"Helm\u5728v3.0.0\u7248\u672C\u51FA\u73B0\u5927\u89C4\u6A21\u53D8\u66F4\uFF0C\u7248\u672C\u8FC7\u4F4E\u53EF\u80FD\u51FA\u73B0Chart\u5305\u8BED\u6CD5\u4E0D\u517C\u5BB9\u95EE\u9898\u3002")],-1);function _(f,m){const n=r("ExternalLinkIcon");return l(),a("div",null,[d,e("ul",null,[e("li",null,[e("a",h,[o("Kubernetes v1.18.0+"),t(n)])]),e("li",null,[e("a",p,[o("Docker 20.10.10+"),t(n)])]),e("li",null,[e("a",D,[o("Helm v3.0.0+"),t(n)]),o("(\u53EF\u9009)")])]),u])}const b=c(s,[["render",_],["__file","index.html.vue"]]);export{b as default};