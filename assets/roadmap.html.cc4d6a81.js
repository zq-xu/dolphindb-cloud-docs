import{_ as i,o as l,c as a,e}from"./app.1c6147e5.js";const h={},n=e('<h1 id="\u6280\u672F\u8DEF\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u8DEF\u7EBF" aria-hidden="true">#</a> \u6280\u672F\u8DEF\u7EBF</h1><p>\u2705: \u5DF2\u5B8C\u6210 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u274C: \u672A\u5B8C\u6210</p><h2 id="kubernetes\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#kubernetes\u73AF\u5883" aria-hidden="true">#</a> Kubernetes\u73AF\u5883</h2><h3 id="dolphindb\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#dolphindb\u90E8\u7F72" aria-hidden="true">#</a> DolphinDB\u90E8\u7F72</h3><ul><li>\u2705 DolphinDB MGR\u7684Helm\u90E8\u7F72\uFF1B</li><li>\u274C DolphinDB MGR\u7684\u53EF\u89C6\u5316\u90E8\u7F72\uFF1B</li><li>\u274C DolphinDB\u539F\u751F\u8D44\u6E90(DolphinDB Chart)\u7684\u90E8\u7F72\uFF1B</li><li>\u274C DolphinDB\u7684<code>CRD &amp;&amp; Operator</code>\u7684\u811A\u672C\u90E8\u7F72\uFF1B</li></ul><h3 id="\u73AF\u5883-\u670D\u52A1\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-\u670D\u52A1\u7BA1\u7406" aria-hidden="true">#</a> \u73AF\u5883 &amp;&amp; \u670D\u52A1\u7BA1\u7406</h3><ul><li>\u2705 \u4F7F\u7528Configmap\u7BA1\u7406\u73AF\u5883\u7684\u603B\u4F53\u914D\u7F6E(Env Config)\uFF1B</li><li>\u274C \u73AF\u5883\u914D\u7F6E(Env Config)\u7684\u53EF\u89C6\u5316\u7BA1\u7406\uFF1B</li><li>\u2705 Node Exporter\u91C7\u96C6Kubernetes\u8282\u70B9\u6307\u6807\uFF1B</li><li>\u274C \u53EF\u89C6\u5316\u56FE\u8868\u5C55\u793A\u8282\u70B9\u6307\u6807\uFF1B</li><li>\u274C \u73AF\u5883\u4E2D\u7684DolphinDB\u4FE1\u606F\u603B\u89C8\uFF1B</li><li>\u274C \u57FA\u4E8EIngress\u7684\u8BBF\u95EE\uFF1B</li><li>\u274C \u53EF\u89C6\u5316\u754C\u9762\u7684HTTPS\u652F\u6301\uFF1B</li></ul><h3 id="dolphindb\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#dolphindb\u7BA1\u7406" aria-hidden="true">#</a> DolphinDB\u7BA1\u7406</h3><ul><li><p><strong>DolphinDB\u96C6\u7FA4</strong></p><ul><li>\u2705 DolphinDB\u57FA\u4E8ECRD &amp;&amp; Operator\u7684\u589E\u5220\u6539\u67E5\u5168\u751F\u547D\u5468\u671F\uFF1B</li><li>\u2705 DolphinDB\u96C6\u7FA4\u521B\u5EFA(\u53EF\u89C6\u5316\u754C\u9762)\uFF1B</li><li>\u274C DolphinDB\u96C6\u7FA4\u66F4\u65B0(\u53EF\u89C6\u5316\u754C\u9762)\uFF1B</li><li>\u2705 DolphinDB\u96C6\u7FA4\u5217\u8868\u5C55\u793A(\u53EF\u89C6\u5316\u754C\u9762)\uFF1B</li><li>\u2705 DolphinDB\u96C6\u7FA4\u8BE6\u60C5\u5C55\u793A(\u53EF\u89C6\u5316\u754C\u9762)\uFF1B</li><li>\u2705 DolphinDB\u96C6\u7FA4\u5220\u9664(\u53EF\u89C6\u5316\u754C\u9762)\uFF1B</li><li>\u274C DolphinDB\u96C6\u7FA4\u57FA\u4E8EIngress\u7684\u8BBF\u95EE\uFF1B</li></ul></li><li><p><strong>DolphinDB\u914D\u7F6E</strong></p><ul><li>\u2705 DolphinDB\u914D\u7F6E\u5C55\u793A\uFF1B</li><li>\u2705 DolphinDB\u914D\u7F6E\u66F4\u65B0\uFF1B</li><li>\u274C \u6839\u636EDolphinDB\u7684cpu/memory\u7B49\u5B9E\u9645\u60C5\u51B5\u81EA\u52A8\u4FEE\u6B63\u76F8\u5173\u914D\u7F6E\uFF1B</li></ul></li><li><p><strong>DolphinDB\u5B9E\u4F8B</strong></p><ul><li>\u2705 DolphinDB\u5B9E\u4F8B\u5C55\u793A\uFF1B</li><li>\u2705 DolphinDB\u5B9E\u4F8BTerminal\u8FDE\u63A5\uFF1B</li><li>\u2705 DolphinDB\u6307\u5B9A\u5B9E\u4F8B\u7684Service\u8D44\u6E90\u521B\u5EFA/\u5220\u9664\uFF1B</li><li>\u274C \u57FA\u4E8EDolphinDB\u6307\u5B9A\u5B9E\u4F8B\u7684Service\u8D44\u6E90\u81EA\u52A8\u66F4\u6539\u76F8\u5E94Ingress\u8D44\u6E90\uFF1B</li><li>\u2705 DolphinDB\u5B9E\u4F8B\u542F\u52A8/\u505C\u6B62\uFF1B</li><li>\u2705 DolphinDB\u5B9E\u4F8B\u6587\u4EF6\u4E0A\u4F20\uFF1B</li><li>\u274C DolphinDB\u5B9E\u4F8B\u6587\u4EF6\u4E0B\u8F7D\uFF1B</li><li>\u274C DolphinDB\u5B9E\u4F8Bcpu/mem\u7B49\u6307\u6807\u5B9E\u65F6\u6570\u636E\u5C55\u793A\uFF1B</li></ul></li></ul><h3 id="\u9AD8\u53EF\u7528\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u53EF\u7528\u65B9\u6848" aria-hidden="true">#</a> \u9AD8\u53EF\u7528\u65B9\u6848</h3><ul><li><p><strong>\u5907\u4EFD\u6062\u590D</strong></p><ul><li>\u274C DolphinDB\u5907\u4EFD\u6062\u590D\u7684CRD\u57FA\u7840\u5B9A\u4E49\u548COperator\u89E3\u6790\uFF1B</li><li>\u274C DolphinDB\u57FA\u4E8ES3\u5907\u4EFD\u6062\u590D\uFF1B</li><li>\u274C DolphinDB\u57FA\u4E8ENFS\u5907\u4EFD\u6062\u590D\uFF1B</li><li>\u274C \u5220\u9664\u6307\u5B9A\u5907\u4EFD\u96C6\uFF1B</li><li>\u274C \u67E5\u8BE2\u6307\u5B9A\u5907\u4EFD\u4EFB\u52A1\u65E5\u5FD7\uFF1B</li><li>\u274C DolphinDB\u5B9A\u65F6\u5907\u4EFD\uFF1B</li></ul></li><li><p><strong>\u5F02\u6B65\u590D\u5236</strong></p><ul><li>\u274C DolphinDB\u5F02\u6B65\u590D\u5236\u7684CRD\u57FA\u7840\u5B9A\u4E49\u548COperator\u89E3\u6790\uFF1B</li><li>\u274C DolphinDB\u57FA\u4E8E\u5F02\u6B65\u590D\u5236\u7684\u4E3B\u5907\u96C6\u7FA4\uFF1B</li></ul></li></ul><h3 id="\u8FD0\u7EF4\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7EF4\u80FD\u529B" aria-hidden="true">#</a> \u8FD0\u7EF4\u80FD\u529B</h3><ul><li>\u2705 \u57FA\u4E8EPromrtheus+Exporter\u7684\u76D1\u63A7\u6307\u6807\u91C7\u96C6\uFF1B</li><li>\u2705 \u57FA\u4E8EPromrtheus+AlertManager\u7684\u544A\u8B66\uFF1B</li><li>\u2705 \u57FA\u4E8EPromrtheus+Grafana\u7684\u76D1\u63A7\u56FE\u6807\uFF1B</li><li>\u2705 Loki+Promtail\u7684\u65E5\u5FD7\u91C7\u96C6\uFF1B</li><li>\u274C \u53EF\u89C6\u5316\u914D\u7F6EAlertManager\u8BBE\u7F6E\u544A\u8B66\u6307\u6807\uFF1B</li><li>\u274C \u65E5\u5FD7\u67E5\u8BE2\u548C\u65E5\u5FD7\u4E0B\u8F7D\uFF1B</li></ul><h3 id="dolphindb\u529F\u80FD\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#dolphindb\u529F\u80FD\u6269\u5C55" aria-hidden="true">#</a> DolphinDB\u529F\u80FD\u6269\u5C55</h3><ul><li>\u274C \u652F\u6301\u811A\u672C\u7F16\u5199\u548C\u6301\u4E45\u5316\uFF1B</li><li>\u274C \u652F\u6301\u811A\u672C\u5B9A\u65F6\u4EFB\u52A1\uFF1B</li></ul><h2 id="\u516C\u6709\u4E91\u4E0A\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u516C\u6709\u4E91\u4E0A\u7EBF" aria-hidden="true">#</a> \u516C\u6709\u4E91\u4E0A\u7EBF</h2><h3 id="\u4E9A\u9A6C\u900A\u4E91-aws" tabindex="-1"><a class="header-anchor" href="#\u4E9A\u9A6C\u900A\u4E91-aws" aria-hidden="true">#</a> \u4E9A\u9A6C\u900A\u4E91(AWS)</h3><ul><li>\u2705 DolphinDB MGR\u4E0A\u7EBF<code>AWS Marketplace</code>\uFF1B</li></ul><h3 id="\u963F\u91CC\u4E91-alibaba-cloud" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u4E91-alibaba-cloud" aria-hidden="true">#</a> \u963F\u91CC\u4E91(Alibaba cloud)</h3><ul><li>\u274C DolphinDB MGR\u4E0A\u7EBF<code>\u963F\u91CC\u4E91\u5E02\u573A</code>\uFF1B</li></ul>',20),r=[n];function o(d,D){return l(),a("div",null,r)}const t=i(h,[["render",o],["__file","roadmap.html.vue"]]);export{t as default};
