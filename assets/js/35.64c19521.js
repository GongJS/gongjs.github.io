(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{225:function(t,s,a){t.exports=a.p+"assets/img/build.37c94c45.gif"},226:function(t,s,a){t.exports=a.p+"assets/img/koaLogin.1acdc926.jpg"},245:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("p",[t._v("走到这里，说明我们的项目在开发环境跑起来是没问题了，但是如果我们想让别人也能访问咱们的网站，就需要部署到服务器上，也就是所谓的生产环境。")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("最后后再执行"),e("code",[t._v("npm run build --report")]),t._v("，这时候浏览器会打开一个新的窗口"),e("code",[t._v("http://127.0.0.1:8888/")]),t._v(",在这里，我们可以很方便的看到打包完文件的体积大小，以及各种第三方库、插件详细打包信息，后期如果还想优化，就可以参照这些信息对一些体积较大的文件进行优化。\n"),e("img-wrapper",[e("img",{attrs:{src:a(225)}})])],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),e("img-wrapper",[e("img",{attrs:{src:a(226)}})]),t._v(" "),e("p",[t._v("剩下的，如果自己有服务器，把代码拷贝一份到服务器上，在服务器里执行"),e("code",[t._v("node index.js")]),t._v("开启服务，别人通过访问你的服务器 ip 或者服务器域名，加上 3000 端口号，就能访问到你的项目了，比如我的"),e("a",{attrs:{href:"http://132.232.73.32:3000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目地址"),e("OutboundLink")],1),t._v("是"),e("code",[t._v("http://132.232.73.32:3000/")]),t._v(".")])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们要做的就是把"),s("code",[this._v("Vue")]),this._v("和"),s("code",[this._v("Koa")]),this._v("结合起来变成一个完整的项目,将 Vue 的静态文件交给 Koa“托管”，所有访问前端的请求全部走 Koa 端，包括静态文件资源的请求，也走 Koa 端，把 Koa 作为一个 Vue 项目的静态资源服务器，这样的话也就不存在跨域的问题了（相当于，之前开发模式是 webpack 开启了一个服务器托管了 Vue 的资源和请求，现在生产模式下改成 Koa 托管 Vue 的资源和请求）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack 打包")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("运行"),a("code",[t._v("yarn build")]),t._v("或者"),a("code",[t._v("npm run build")]),t._v(",打包前端文件，打包 完成后会在根目录生成一个"),a("code",[t._v("dist")]),t._v("的文件夹，打包出来"),a("code",[t._v("dist")]),t._v("文件夹有"),a("code",[t._v("6.5MB")]),t._v("，这么大显然不能直接用，我们要优化下。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("找到根目录下的"),a("code",[t._v("config/index.js")]),t._v("，把"),a("code",[t._v("productionSourceMap: true")]),t._v("这句话改成"),a("code",[t._v("productionSourceMap: false")]),t._v("，这句话到意思是取消输出"),a("code",[t._v("map")]),t._v("文件；把"),a("code",[t._v("productionGzip: false,")]),t._v("改成"),a("code",[t._v("productionGzip: true,")]),t._v("这句话到意思是开启"),a("code",[t._v("gzip")]),t._v("压缩，我们再安装一个压缩文件的插件："),a("code",[t._v("yarn add compression-webpack-plugin -D")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果开启了"),s("code",[this._v("gzip")]),this._v("后，文件大小也就 300 多 KB,还能接受。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"koa-托管静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa-托管静态资源","aria-hidden":"true"}},[this._v("#")]),this._v(" koa 托管静态资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这里需要借助"),s("code",[this._v("koa-static")]),this._v("这个中间件，我们前面已经安装过了，如果没安装的自己再安装一遍。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打开"),s("code",[this._v("app.js")]),this._v("，引入两个新依赖，其中"),s("code",[this._v("path")]),this._v("是 nodejs 原生自带：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-j s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-j"}},[a("code",[a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v(" ap"),a("span",{attrs:{class:"token verb keyword"}},[t._v("p.")]),t._v("js\nimport serve from "),a("span",{attrs:{class:"token string"}},[t._v("'koa-static'")]),t._v("\nimport path from "),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n"),a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token conjunction variable"}},[t._v("..")]),a("span",{attrs:{class:"token conjunction variable"}},[t._v("..")]),t._v("\n\nrouter"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nap"),a("span",{attrs:{class:"token verb keyword"}},[t._v("p.")]),t._v("use"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serve"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token conjunction variable"}},[t._v(".")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v(" 将webpack打包好的项目目录作为Koa静态文件服务的目录\nap"),a("span",{attrs:{class:"token verb keyword"}},[t._v("p.")]),t._v("listen"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3000")]),a("span",{attrs:{class:"token verb keyword"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token verb keyword"}},[t._v("=")]),a("span",{attrs:{class:"token verb keyword"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token verb keyword"}},[t._v("{")]),t._v("\n  consol"),a("span",{attrs:{class:"token verb keyword"}},[t._v("e.")]),t._v("log"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'server is running at http://localhost:3000'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token adverb builtin"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),a("span",{attrs:{class:"token adverb builtin"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token conjunction variable"}},[t._v("..")]),a("span",{attrs:{class:"token conjunction variable"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[s("code",[this._v("注意app.use(serve(path.resolve('dist')))")]),this._v("这句话要放在"),s("code",[this._v("router(app)")]),this._v("的后面，koa 的运行机制是谁先被 use，谁的规则就先执行，如果我们放到 router(app)前面，那么每次发送 API 请求的时候，都会先给我们返回一个完整的页面，再返回数据")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("保存，重新运行"),s("code",[this._v("node index.js")]),this._v("，看到"),s("code",[this._v("server is running at http://localhost:3000")]),this._v("，打开"),s("code",[this._v("http://localhost:3000")]),this._v(",会发现自动跳转到登录页面：")])}],!1,null,null,null);s.default=n.exports}}]);