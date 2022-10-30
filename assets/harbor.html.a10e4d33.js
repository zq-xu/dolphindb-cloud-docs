import{_ as r,r as o,o as p,c,a as n,b as s,d as l,w as i,e as a}from"./app.7cabacd3.js";const d={},t=a('<h1 id="harbor仓库" tabindex="-1"><a class="header-anchor" href="#harbor仓库" aria-hidden="true">#</a> Harbor仓库</h1><p>Harbor仓库常用来作为Docker镜像的私有镜像仓库使用，本文使用容器的方式来进行本地搭建。</p><h2 id="安装harbor" tabindex="-1"><a class="header-anchor" href="#安装harbor" aria-hidden="true">#</a> 安装Harbor</h2><h3 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境" aria-hidden="true">#</a> 安装环境</h3>',4),v=n("li",null,[s("安装机器：Linux服务器，本文中使用服务器的IP为"),n("code",null,"192.168.10.122"),s("；")],-1),b=a(`<li>Docker Compose环境：参考如下脚本安装：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">sudo curl -L </span><span style="color:#CE9178;">&quot;https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)&quot;</span><span style="color:#D4D4D4;"> -o /usr/local/bin/docker-compose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">sudo chmod +x /usr/local/bin/docker-compose</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>harbor安装过程中可能出现docker-compose未安装或者权限不足，需要创建个软连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></li>`,1),u=a(`<h3 id="准备harbor安装包" tabindex="-1"><a class="header-anchor" href="#准备harbor安装包" aria-hidden="true">#</a> 准备Harbor安装包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 下载Harbor包</span></span>
<span class="line"><span style="color:#D4D4D4;">wget https://storage.googleapis.com/harbor-releases/release-1.8.0/harbor-online-installer-v1.8.1.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 解压Harbor包</span></span>
<span class="line"><span style="color:#D4D4D4;">tar zxvf harbor-online-installer-v1.8.1.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> harbor</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备配置文件" tabindex="-1"><a class="header-anchor" href="#准备配置文件" aria-hidden="true">#</a> 准备配置文件</h3><p>Harbor的配置文件为<code>harbor.yml</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># Configuration file of Harbor</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改hostname为本机ip地址" tabindex="-1"><a class="header-anchor" href="#修改hostname为本机ip地址" aria-hidden="true">#</a> 修改hostname为本机ip地址</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">hostname: 192.168.10.122</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改data路径" tabindex="-1"><a class="header-anchor" href="#修改data路径" aria-hidden="true">#</a> 修改data路径</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># The default data volume</span></span>
<span class="line"><span style="color:#D4D4D4;">data_volume: /home/zqxu/xzq/harbor_data</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改log路径" tabindex="-1"><a class="header-anchor" href="#修改log路径" aria-hidden="true">#</a> 修改log路径</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">log:</span></span>
<span class="line"><span style="color:#D4D4D4;">  # The directory on your host that store log</span></span>
<span class="line"><span style="color:#D4D4D4;">  location: /home/zqxu/xzq/harbor/log</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行安装脚本" tabindex="-1"><a class="header-anchor" href="#执行安装脚本" aria-hidden="true">#</a> 执行安装脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">./install.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 控制台打印信息</span></span>
<span class="line"><span style="color:#D4D4D4;">✔ ----Harbor has been installed and started successfully.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">----Now you should be able to visit the admin portal at http://192.168.10.122.</span></span>
<span class="line"><span style="color:#D4D4D4;">For more details, please visit https://github.com/goharbor/harbor </span><span style="color:#DCDCAA;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>之后如果你想修改某一个配置,先修改<code>harbor.yaml</code>文件,之后重新执行<code>install.sh</code>脚本就可以了。</p></div><h2 id="访问harbor" tabindex="-1"><a class="header-anchor" href="#访问harbor" aria-hidden="true">#</a> 访问Harbor</h2><h3 id="浏览器访问harbor" tabindex="-1"><a class="header-anchor" href="#浏览器访问harbor" aria-hidden="true">#</a> 浏览器访问Harbor</h3><p>在浏览器中打开以下地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $hostname：\`harbor.yaml\`中配置的\`hostname\`的值</span></span>
<span class="line"><span style="color:#6A9955;"># 登录账号：admin</span></span>
<span class="line"><span style="color:#6A9955;"># 登录密码：Harbor12345</span></span>
<span class="line"><span style="color:#D4D4D4;">http://</span><span style="color:#9CDCFE;">$hostname</span><span style="color:#D4D4D4;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker访问harbor" tabindex="-1"><a class="header-anchor" href="#docker访问harbor" aria-hidden="true">#</a> Docker访问Harbor</h3><h4 id="配置docker" tabindex="-1"><a class="header-anchor" href="#配置docker" aria-hidden="true">#</a> 配置Docker</h4>`,20),m=a('<h4 id="登录harbor" tabindex="-1"><a class="header-anchor" href="#登录harbor" aria-hidden="true">#</a> 登录Harbor</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $hostname：`harbor.yaml`中配置的`hostname`的值</span></span>\n<span class="line"><span style="color:#D4D4D4;">docker login </span><span style="color:#9CDCFE;">$hostname</span><span style="color:#D4D4D4;"> -u admin -p Harbor12345</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="上传镜像至harbor镜像" tabindex="-1"><a class="header-anchor" href="#上传镜像至harbor镜像" aria-hidden="true">#</a> 上传镜像至Harbor镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $hostname：`harbor.yaml`中配置的`hostname`的值</span></span>\n<span class="line"><span style="color:#D4D4D4;">docker push </span><span style="color:#9CDCFE;">$hostname</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">$repository</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">$name</span><span style="color:#D4D4D4;">:</span><span style="color:#9CDCFE;">$tag</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>需要先登录Harbor页面，创建项目<code>$repository</code>.</p></div>',5);function h(y,D){const e=o("RouterLink");return p(),c("div",null,[t,n("ul",null,[v,n("li",null,[s("Docker环境：参考"),l(e,{to:"/zh/reference/docker/installer.html"},{default:i(()=>[s("安装Docker")]),_:1}),s("；")]),b]),u,n("p",null,[s("参考 "),l(e,{to:"/zh/reference/docker/installer-config.html#%E9%85%8D%E7%BD%AEdocker"},{default:i(()=>[s("配置Docker")]),_:1}),s(".")]),m])}const g=r(d,[["render",h],["__file","harbor.html.vue"]]);export{g as default};
