import{_ as r,r as o,o as p,c,a as n,b as s,d as l,w as i,e as a}from"./app.66298e46.js";const d={},t=a('<h1 id="harbor\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#harbor\u4ED3\u5E93" aria-hidden="true">#</a> Harbor\u4ED3\u5E93</h1><p>Harbor\u4ED3\u5E93\u5E38\u7528\u6765\u4F5C\u4E3ADocker\u955C\u50CF\u7684\u79C1\u6709\u955C\u50CF\u4ED3\u5E93\u4F7F\u7528\uFF0C\u672C\u6587\u4F7F\u7528\u5BB9\u5668\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u672C\u5730\u642D\u5EFA\u3002</p><h2 id="\u5B89\u88C5harbor" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5harbor" aria-hidden="true">#</a> \u5B89\u88C5Harbor</h2><h3 id="\u5B89\u88C5\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u73AF\u5883" aria-hidden="true">#</a> \u5B89\u88C5\u73AF\u5883</h3>',4),v=n("li",null,[s("\u5B89\u88C5\u673A\u5668\uFF1ALinux\u670D\u52A1\u5668\uFF0C\u672C\u6587\u4E2D\u4F7F\u7528\u670D\u52A1\u5668\u7684IP\u4E3A"),n("code",null,"192.168.10.122"),s("\uFF1B")],-1),b=a(`<li>Docker Compose\u73AF\u5883\uFF1A\u53C2\u8003\u5982\u4E0B\u811A\u672C\u5B89\u88C5\uFF1A<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">sudo curl -L </span><span style="color:#CE9178;">&quot;https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)&quot;</span><span style="color:#D4D4D4;"> -o /usr/local/bin/docker-compose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">sudo chmod +x /usr/local/bin/docker-compose</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>harbor\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u51FA\u73B0docker-compose\u672A\u5B89\u88C5\u6216\u8005\u6743\u9650\u4E0D\u8DB3\uFF0C\u9700\u8981\u521B\u5EFA\u4E2A\u8F6F\u8FDE\u63A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></li>`,1),u=a(`<h3 id="\u51C6\u5907harbor\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907harbor\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u51C6\u5907Harbor\u5B89\u88C5\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># \u4E0B\u8F7DHarbor\u5305</span></span>
<span class="line"><span style="color:#D4D4D4;">wget https://storage.googleapis.com/harbor-releases/release-1.8.0/harbor-online-installer-v1.8.1.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u89E3\u538BHarbor\u5305</span></span>
<span class="line"><span style="color:#D4D4D4;">tar zxvf harbor-online-installer-v1.8.1.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> harbor</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51C6\u5907\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u51C6\u5907\u914D\u7F6E\u6587\u4EF6</h3><p>Harbor\u7684\u914D\u7F6E\u6587\u4EF6\u4E3A<code>harbor.yml</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># Configuration file of Harbor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># The IP address or hostname to access admin UI and registry service.</span></span>
<span class="line"><span style="color:#6A9955;"># DO NOT use localhost or 127.0.0.1, because Harbor needs to be accessed by external clients.</span></span>
<span class="line"><span style="color:#D4D4D4;">hostname: 115.239.209.123</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># http related config</span></span>
<span class="line"><span style="color:#D4D4D4;">http:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># port for http, default is 80. If https enabled, this port will redirect to https port</span></span>
<span class="line"><span style="color:#D4D4D4;">  port: 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># https related config</span></span>
<span class="line"><span style="color:#6A9955;"># https:</span></span>
<span class="line"><span style="color:#6A9955;">#   # https port for harbor, default is 443</span></span>
<span class="line"><span style="color:#6A9955;">#   port: 443</span></span>
<span class="line"><span style="color:#6A9955;">#   # The path of cert and key files for nginx</span></span>
<span class="line"><span style="color:#6A9955;">#   certificate: /your/certificate/path</span></span>
<span class="line"><span style="color:#6A9955;">#   private_key: /your/private/key/path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Uncomment external_url if you want to enable external proxy</span></span>
<span class="line"><span style="color:#6A9955;"># And when it enabled the hostname will no longer used</span></span>
<span class="line"><span style="color:#6A9955;"># external_url: https://reg.mydomain.com:8433</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># The initial password of Harbor admin</span></span>
<span class="line"><span style="color:#6A9955;"># It only works in first time to install harbor</span></span>
<span class="line"><span style="color:#6A9955;"># Remember Change the admin password from UI after launching Harbor.</span></span>
<span class="line"><span style="color:#D4D4D4;">harbor_admin_password: Harbor12345</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Harbor DB configuration</span></span>
<span class="line"><span style="color:#D4D4D4;">database:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># The password for the root user of Harbor DB. Change this before any production use.</span></span>
<span class="line"><span style="color:#D4D4D4;">  password: root123</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># The default data volume</span></span>
<span class="line"><span style="color:#D4D4D4;">data_volume: /home/zqxu/xzq/harbor_data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Harbor Storage settings by default is using /data dir on local filesystem</span></span>
<span class="line"><span style="color:#6A9955;"># Uncomment storage_service setting If you want to using external storage</span></span>
<span class="line"><span style="color:#6A9955;"># storage_service:</span></span>
<span class="line"><span style="color:#6A9955;">#   # ca_bundle is the path to the custom root ca certificate, which will be injected into the truststore</span></span>
<span class="line"><span style="color:#6A9955;">#   # of registry&#39;s and chart repository&#39;s containers.  This is usually needed when the user hosts a internal storage with self signed certificate.</span></span>
<span class="line"><span style="color:#6A9955;">#   ca_bundle:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">#   # storage backend, default is filesystem, options include filesystem, azure, gcs, s3, swift and oss</span></span>
<span class="line"><span style="color:#6A9955;">#   # for more info about this configuration please refer https://docs.docker.com/registry/configuration/</span></span>
<span class="line"><span style="color:#6A9955;">#   filesystem:</span></span>
<span class="line"><span style="color:#6A9955;">#     maxthreads: 100</span></span>
<span class="line"><span style="color:#6A9955;">#   # set disable to true when you want to disable registry redirect</span></span>
<span class="line"><span style="color:#6A9955;">#   redirect:</span></span>
<span class="line"><span style="color:#6A9955;">#     disabled: false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Clair configuration</span></span>
<span class="line"><span style="color:#D4D4D4;">clair: </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># The interval of clair updaters, the unit is hour, set to 0 to disable the updaters.</span></span>
<span class="line"><span style="color:#D4D4D4;">  updaters_interval: 12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># Config http proxy for Clair, e.g. http://my.proxy.com:3128</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># Clair doesn&#39;t need to connect to harbor internal components via http proxy.</span></span>
<span class="line"><span style="color:#D4D4D4;">  http_proxy:</span></span>
<span class="line"><span style="color:#D4D4D4;">  https_proxy:</span></span>
<span class="line"><span style="color:#D4D4D4;">  no_proxy: 127.0.0.1,localhost,core,registry</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">jobservice:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># Maximum number of job workers in job service  </span></span>
<span class="line"><span style="color:#D4D4D4;">  max_job_workers: 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">chart:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># Change the value of absolute_url to enabled can enable absolute url in chart</span></span>
<span class="line"><span style="color:#D4D4D4;">  absolute_url: disabled</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Log configurations</span></span>
<span class="line"><span style="color:#D4D4D4;">log:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># options are debug, info, warning, error, fatal</span></span>
<span class="line"><span style="color:#D4D4D4;">  level: info</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># Log files are rotated log_rotate_count times before being removed. If count is 0, old versions are removed rather than rotated.</span></span>
<span class="line"><span style="color:#D4D4D4;">  rotate_count: 50</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># Log files are rotated only if they grow bigger than log_rotate_size bytes. If size is followed by k, the size is assumed to be in kilobytes. </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># If the M is used, the size is in megabytes, and if G is used, the size is in gigabytes. So size 100, size 100k, size 100M and size 100G </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># are all valid.</span></span>
<span class="line"><span style="color:#D4D4D4;">  rotate_size: 200M</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># The directory on your host that store log</span></span>
<span class="line"><span style="color:#D4D4D4;">  location: /home/zqxu/xzq/harbor/log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">#This attribute is for migrator to detect the version of the .cfg file, DO NOT MODIFY!</span></span>
<span class="line"><span style="color:#D4D4D4;">_version: 1.8.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Uncomment external_database if using external database.</span></span>
<span class="line"><span style="color:#6A9955;"># external_database:</span></span>
<span class="line"><span style="color:#6A9955;">#   harbor:</span></span>
<span class="line"><span style="color:#6A9955;">#     host: harbor_db_host</span></span>
<span class="line"><span style="color:#6A9955;">#     port: harbor_db_port</span></span>
<span class="line"><span style="color:#6A9955;">#     db_name: harbor_db_name</span></span>
<span class="line"><span style="color:#6A9955;">#     username: harbor_db_username</span></span>
<span class="line"><span style="color:#6A9955;">#     password: harbor_db_password</span></span>
<span class="line"><span style="color:#6A9955;">#     ssl_mode: disable</span></span>
<span class="line"><span style="color:#6A9955;">#   clair:</span></span>
<span class="line"><span style="color:#6A9955;">#     host: clair_db_host</span></span>
<span class="line"><span style="color:#6A9955;">#     port: clair_db_port</span></span>
<span class="line"><span style="color:#6A9955;">#     db_name: clair_db_name</span></span>
<span class="line"><span style="color:#6A9955;">#     username: clair_db_username</span></span>
<span class="line"><span style="color:#6A9955;">#     password: clair_db_password</span></span>
<span class="line"><span style="color:#6A9955;">#     ssl_mode: disable</span></span>
<span class="line"><span style="color:#6A9955;">#   notary_signer:</span></span>
<span class="line"><span style="color:#6A9955;">#     host: notary_signer_db_host</span></span>
<span class="line"><span style="color:#6A9955;">#     port: notary_signer_db_port</span></span>
<span class="line"><span style="color:#6A9955;">#     db_name: notary_signer_db_name</span></span>
<span class="line"><span style="color:#6A9955;">#     username: notary_signer_db_username</span></span>
<span class="line"><span style="color:#6A9955;">#     password: notary_signer_db_password</span></span>
<span class="line"><span style="color:#6A9955;">#     ssl_mode: disable</span></span>
<span class="line"><span style="color:#6A9955;">#   notary_server:</span></span>
<span class="line"><span style="color:#6A9955;">#     host: notary_server_db_host</span></span>
<span class="line"><span style="color:#6A9955;">#     port: notary_server_db_port</span></span>
<span class="line"><span style="color:#6A9955;">#     db_name: notary_server_db_name</span></span>
<span class="line"><span style="color:#6A9955;">#     username: notary_server_db_username</span></span>
<span class="line"><span style="color:#6A9955;">#     password: notary_server_db_password</span></span>
<span class="line"><span style="color:#6A9955;">#     ssl_mode: disable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Uncomment external_redis if using external Redis server</span></span>
<span class="line"><span style="color:#6A9955;"># external_redis:</span></span>
<span class="line"><span style="color:#6A9955;">#   host: redis</span></span>
<span class="line"><span style="color:#6A9955;">#   port: 6379</span></span>
<span class="line"><span style="color:#6A9955;">#   password:</span></span>
<span class="line"><span style="color:#6A9955;">#   # db_index 0 is for core, it&#39;s unchangeable</span></span>
<span class="line"><span style="color:#6A9955;">#   registry_db_index: 1</span></span>
<span class="line"><span style="color:#6A9955;">#   jobservice_db_index: 2</span></span>
<span class="line"><span style="color:#6A9955;">#   chartmuseum_db_index: 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Uncomment uaa for trusting the certificate of uaa instance that is hosted via self-signed cert.</span></span>
<span class="line"><span style="color:#6A9955;"># uaa:</span></span>
<span class="line"><span style="color:#6A9955;">#   ca_file: /path/to/ca</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539hostname\u4E3A\u672C\u673Aip\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539hostname\u4E3A\u672C\u673Aip\u5730\u5740" aria-hidden="true">#</a> \u4FEE\u6539hostname\u4E3A\u672C\u673Aip\u5730\u5740</h4><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">hostname: 192.168.10.122</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539data\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539data\u8DEF\u5F84" aria-hidden="true">#</a> \u4FEE\u6539data\u8DEF\u5F84</h4><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># The default data volume</span></span>
<span class="line"><span style="color:#D4D4D4;">data_volume: /home/zqxu/xzq/harbor_data</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539log\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539log\u8DEF\u5F84" aria-hidden="true">#</a> \u4FEE\u6539log\u8DEF\u5F84</h4><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">log:</span></span>
<span class="line"><span style="color:#D4D4D4;">  # The directory on your host that store log</span></span>
<span class="line"><span style="color:#D4D4D4;">  location: /home/zqxu/xzq/harbor/log</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u5B89\u88C5\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u5B89\u88C5\u811A\u672C" aria-hidden="true">#</a> \u6267\u884C\u5B89\u88C5\u811A\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">./install.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u63A7\u5236\u53F0\u6253\u5370\u4FE1\u606F</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2714 ----Harbor has been installed and started successfully.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">----Now you should be able to visit the admin portal at http://192.168.10.122.</span></span>
<span class="line"><span style="color:#D4D4D4;">For more details, please visit https://github.com/goharbor/harbor </span><span style="color:#DCDCAA;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E4B\u540E\u5982\u679C\u4F60\u60F3\u4FEE\u6539\u67D0\u4E00\u4E2A\u914D\u7F6E,\u5148\u4FEE\u6539<code>harbor.yaml</code>\u6587\u4EF6,\u4E4B\u540E\u91CD\u65B0\u6267\u884C<code>install.sh</code>\u811A\u672C\u5C31\u53EF\u4EE5\u4E86\u3002</p></div><h2 id="\u8BBF\u95EEharbor" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EEharbor" aria-hidden="true">#</a> \u8BBF\u95EEHarbor</h2><h3 id="\u6D4F\u89C8\u5668\u8BBF\u95EEharbor" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u8BBF\u95EEharbor" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u8BBF\u95EEHarbor</h3><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4EE5\u4E0B\u5730\u5740\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $hostname\uFF1A\`harbor.yaml\`\u4E2D\u914D\u7F6E\u7684\`hostname\`\u7684\u503C</span></span>
<span class="line"><span style="color:#6A9955;"># \u767B\u5F55\u8D26\u53F7\uFF1Aadmin</span></span>
<span class="line"><span style="color:#6A9955;"># \u767B\u5F55\u5BC6\u7801\uFF1AHarbor12345</span></span>
<span class="line"><span style="color:#D4D4D4;">http://</span><span style="color:#9CDCFE;">$hostname</span><span style="color:#D4D4D4;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker\u8BBF\u95EEharbor" tabindex="-1"><a class="header-anchor" href="#docker\u8BBF\u95EEharbor" aria-hidden="true">#</a> Docker\u8BBF\u95EEHarbor</h3><h4 id="\u914D\u7F6Edocker" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Edocker" aria-hidden="true">#</a> \u914D\u7F6EDocker</h4>`,20),m=a('<h4 id="\u767B\u5F55harbor" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55harbor" aria-hidden="true">#</a> \u767B\u5F55Harbor</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $hostname\uFF1A`harbor.yaml`\u4E2D\u914D\u7F6E\u7684`hostname`\u7684\u503C</span></span>\n<span class="line"><span style="color:#D4D4D4;">docker login </span><span style="color:#9CDCFE;">$hostname</span><span style="color:#D4D4D4;"> -u admin -p Harbor12345</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0A\u4F20\u955C\u50CF\u81F3harbor\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u955C\u50CF\u81F3harbor\u955C\u50CF" aria-hidden="true">#</a> \u4E0A\u4F20\u955C\u50CF\u81F3Harbor\u955C\u50CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $hostname\uFF1A`harbor.yaml`\u4E2D\u914D\u7F6E\u7684`hostname`\u7684\u503C</span></span>\n<span class="line"><span style="color:#D4D4D4;">docker push </span><span style="color:#9CDCFE;">$hostname</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">$repository</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">$name</span><span style="color:#D4D4D4;">:</span><span style="color:#9CDCFE;">$tag</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u9700\u8981\u5148\u767B\u5F55Harbor\u9875\u9762\uFF0C\u521B\u5EFA\u9879\u76EE<code>$repository</code>.</p></div>',5);function h(y,D){const e=o("RouterLink");return p(),c("div",null,[t,n("ul",null,[v,n("li",null,[s("Docker\u73AF\u5883\uFF1A\u53C2\u8003"),l(e,{to:"/zh/reference/docker/installer.html"},{default:i(()=>[s("\u5B89\u88C5Docker")]),_:1}),s("\uFF1B")]),b]),u,n("p",null,[s("\u53C2\u8003 "),l(e,{to:"/zh/reference/docker/installer-config.html#%E9%85%8D%E7%BD%AEdocker"},{default:i(()=>[s("\u914D\u7F6EDocker")]),_:1}),s(".")]),m])}const g=r(d,[["render",h],["__file","harbor.html.vue"]]);export{g as default};
