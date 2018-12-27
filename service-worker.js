/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4a4d5c871c5fb73886b5f9b495618dea"
  },
  {
    "url": "assets/css/0.styles.d11e3aca.css",
    "revision": "e5477f27806c7438d302419ad55ff2d6"
  },
  {
    "url": "assets/img/attribute.a380a2f7.jpg",
    "revision": "a380a2f760dbb550de711f03ce526fac"
  },
  {
    "url": "assets/img/baobao.07be599b.jpg",
    "revision": "07be599b34232fcaa593d67501de66c2"
  },
  {
    "url": "assets/img/BFC-1.c86be96e.jpg",
    "revision": "c86be96ee6df2f080d56f6aead763f89"
  },
  {
    "url": "assets/img/BFC-2.7aad7e7a.jpg",
    "revision": "7aad7e7ad058f80fcf982a7bc34d85d3"
  },
  {
    "url": "assets/img/BFC-哥哥.d444895f.jpg",
    "revision": "d444895f4c2d47e792bbd21797ee0e5c"
  },
  {
    "url": "assets/img/BFC-孙子.358ae27d.jpg",
    "revision": "358ae27dbb31dd6cd5006999f3fda419"
  },
  {
    "url": "assets/img/BFC-弟弟.6765f0da.jpg",
    "revision": "6765f0dacaebc12d0d05b4b4b799e22b"
  },
  {
    "url": "assets/img/build.37c94c45.gif",
    "revision": "37c94c45ff7189b1cebb67942dd239e4"
  },
  {
    "url": "assets/img/dapp-1.9c7025db.jpeg",
    "revision": "9c7025dbcb9b10ce4601f0efe0a917be"
  },
  {
    "url": "assets/img/dapp-2.e292bba1.jpeg",
    "revision": "e292bba1dde077a5e3cbe19947befec9"
  },
  {
    "url": "assets/img/flex-container.04d2c2dc.jpg",
    "revision": "04d2c2dc8f27108f075fe5e07f84471c"
  },
  {
    "url": "assets/img/flex-item.167d3bc7.jpg",
    "revision": "167d3bc75110104744acc1dc7bede03d"
  },
  {
    "url": "assets/img/flex-基本概念.57d54885.jpg",
    "revision": "57d548858465d32c8354461ed29ccca3"
  },
  {
    "url": "assets/img/flex-平局布局.2b5709c6.jpg",
    "revision": "2b5709c6f8fe265efea7de4b1e33c63e"
  },
  {
    "url": "assets/img/get.80142e79.jpg",
    "revision": "80142e79f69b29914d1c5dedb2a15efc"
  },
  {
    "url": "assets/img/index.40106efb.jpg",
    "revision": "40106efb472932b47a5e6c16dd1db6e2"
  },
  {
    "url": "assets/img/koaLogin.1acdc926.jpg",
    "revision": "1acdc9265e0f24a12c70342c7c7e59cd"
  },
  {
    "url": "assets/img/library-1.0cd2b32b.jpg",
    "revision": "0cd2b32becb3883898f6138db86d0d60"
  },
  {
    "url": "assets/img/library-2.377eb9ee.jpg",
    "revision": "377eb9ee8797b4a32006a285bcda30cd"
  },
  {
    "url": "assets/img/library-3.1be9bf81.jpg",
    "revision": "1be9bf81734865831e392d7a2115c437"
  },
  {
    "url": "assets/img/login.86dd726b.gif",
    "revision": "86dd726be20497ea3f0608be2724088e"
  },
  {
    "url": "assets/img/login.faeef076.jpg",
    "revision": "faeef076e5b826cfc59cbe402eba210c"
  },
  {
    "url": "assets/img/loginTest.fcb80ab4.gif",
    "revision": "fcb80ab44c661ad8d8f3b11534fd1f3e"
  },
  {
    "url": "assets/img/margin合并.bf0fafb4.jpg",
    "revision": "bf0fafb40e68c9ebfc29e092069e0f8e"
  },
  {
    "url": "assets/img/operator.63196570.gif",
    "revision": "631965705cd62d55cc59ae226d813041"
  },
  {
    "url": "assets/img/property.05b3640e.jpg",
    "revision": "05b3640ee4bf6da07101e23b61deb407"
  },
  {
    "url": "assets/img/rightMenuIcon.8c3cb683.png",
    "revision": "8c3cb6831a80e597428d05cff372c5a4"
  },
  {
    "url": "assets/img/same.ee0c8185.jpg",
    "revision": "ee0c8185527eb723e6298c81a5be547c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.9a6dac23.gif",
    "revision": "9a6dac235d925cc34fd6a45202583685"
  },
  {
    "url": "assets/img/table.a586973f.jpg",
    "revision": "a586973f208a0bafd6485eb0433872a9"
  },
  {
    "url": "assets/img/test.3d2b71ad.jpg",
    "revision": "3d2b71ad90c1de91a9a535873ea7ed96"
  },
  {
    "url": "assets/img/testApi.a23b6226.jpg",
    "revision": "a23b6226bfaa9ad173fe300c88942c87"
  },
  {
    "url": "assets/img/this.2186bb80.jpg",
    "revision": "2186bb802cbd065830d467bd6282d620"
  },
  {
    "url": "assets/img/token.107ddb56.jpeg",
    "revision": "107ddb5680dcab94ca22039a3282d78c"
  },
  {
    "url": "assets/img/token.f5611172.jpg",
    "revision": "f5611172bedbed3345a9ba6bc1583fb6"
  },
  {
    "url": "assets/img/touzi-1.afa4cf2c.jpg",
    "revision": "afa4cf2c4f76d196adba531834999dee"
  },
  {
    "url": "assets/img/touzi-2.c05f253e.jpg",
    "revision": "c05f253ef93ee7b7e27f3382289318b1"
  },
  {
    "url": "assets/img/touzi-3.93d543aa.jpg",
    "revision": "93d543aa22f09e4a17d697dfbd6c56b9"
  },
  {
    "url": "assets/img/touzi-4.4d3310b2.jpg",
    "revision": "4d3310b29de41ec8a453c82057ef7f56"
  },
  {
    "url": "assets/img/touzi-5.5d48489a.jpg",
    "revision": "5d48489a59e8b65b598a464e272e27de"
  },
  {
    "url": "assets/img/unloginTest.15540c12.gif",
    "revision": "15540c1209f58c8ecb068b74b0f555f1"
  },
  {
    "url": "assets/img/vue-antd.36e0f921.jpg",
    "revision": "36e0f92122d39218cb83539b6d0071ba"
  },
  {
    "url": "assets/img/vue-cli.69850cad.jpg",
    "revision": "69850cad97c285b2d7c7418d9452a4ee"
  },
  {
    "url": "assets/img/vuepressScreen.ac725735.jpg",
    "revision": "ac7257350e6602332b15313119cec590"
  },
  {
    "url": "assets/img/workbench-1.b8235887.jpg",
    "revision": "b8235887f8e9c620a665593897d78eea"
  },
  {
    "url": "assets/img/xian.161f1160.jpg",
    "revision": "161f1160f85acaccf8e975bededd2ce7"
  },
  {
    "url": "assets/img/yinyong.a467856a.jpg",
    "revision": "a467856a114002a7386a981aaadc944b"
  },
  {
    "url": "assets/img/yuanxing.de0e4ec4.jpg",
    "revision": "de0e4ec498437c02f11a73ee2beed6f8"
  },
  {
    "url": "assets/img/zhileixing.6b1b6b4a.jpg",
    "revision": "6b1b6b4a42617b5c7fa857df3d63d2fe"
  },
  {
    "url": "assets/img/堆叠上下文.62f0cc8c.jpg",
    "revision": "62f0cc8ca22565050b994aaa2840530e"
  },
  {
    "url": "assets/img/堆叠顺序.5e15ab39.jpg",
    "revision": "5e15ab392b38a94133c994113ab69324"
  },
  {
    "url": "assets/img/多行文字对齐.ce94aed9.jpg",
    "revision": "ce94aed9c2ae3ce5e5ef26e5af6d3fd0"
  },
  {
    "url": "assets/img/多行文字溢出对齐.98768287.jpg",
    "revision": "98768287decf435c028f7a6d7cbd7d16"
  },
  {
    "url": "assets/img/宽高.ffe346de.jpg",
    "revision": "ffe346de7409241641a1ec18aa688031"
  },
  {
    "url": "assets/img/布局一.b421e34b.jpg",
    "revision": "b421e34b8268130a071bc510a8eec4a5"
  },
  {
    "url": "assets/img/布局三.099b85d4.jpg",
    "revision": "099b85d433a042b25be55a2133e0f998"
  },
  {
    "url": "assets/img/布局二.79a822fb.jpg",
    "revision": "79a822fb2e6306d0f1ca394188814b03"
  },
  {
    "url": "assets/img/常见布局一.089a9df1.jpg",
    "revision": "089a9df1c7e93d949d917e565add25ca"
  },
  {
    "url": "assets/img/手机端布局.a62c6867.jpg",
    "revision": "a62c6867e4cf66ba7337adc01b4c7a90"
  },
  {
    "url": "assets/img/浮动平均布局.b055b72d.jpg",
    "revision": "b055b72d51c54aa1d0ce3c1edb3e8c70"
  },
  {
    "url": "assets/js/10.6883cd1f.js",
    "revision": "85851b008ebe8dcc29d439c95680b9ae"
  },
  {
    "url": "assets/js/11.04e6a473.js",
    "revision": "9bd3ec98c2702de05d78c2183f6e95c4"
  },
  {
    "url": "assets/js/12.27fcd9b1.js",
    "revision": "352ed5820e4229872b39e3baacba4db0"
  },
  {
    "url": "assets/js/13.208c9667.js",
    "revision": "a714b8805b17171d050215afe15b5399"
  },
  {
    "url": "assets/js/14.9c49f484.js",
    "revision": "a5ae78385fbde2cc1dbf674223bc2dbb"
  },
  {
    "url": "assets/js/15.1a08a2f7.js",
    "revision": "10738283077609bd51064e6005423e3e"
  },
  {
    "url": "assets/js/16.b1c3e047.js",
    "revision": "77c0ee92982b52c62a116f304f1cf312"
  },
  {
    "url": "assets/js/17.6897a7da.js",
    "revision": "1231d5e7679adaac9ea978ee1a8e4961"
  },
  {
    "url": "assets/js/18.837d06ef.js",
    "revision": "dd8864c87523efe40aa9906012a11b33"
  },
  {
    "url": "assets/js/19.79654e70.js",
    "revision": "1a3ab99be8c2977acac560072eade5ab"
  },
  {
    "url": "assets/js/2.08cbc8da.js",
    "revision": "cc1b2b062cc87e9acbfe8969ef8aa89c"
  },
  {
    "url": "assets/js/20.ee01f548.js",
    "revision": "8f71dad2a2412e8a17da7d36fb7c9cee"
  },
  {
    "url": "assets/js/21.f5ee0346.js",
    "revision": "a7547dd1b2e991460232b6f0e3bb3fc4"
  },
  {
    "url": "assets/js/22.4da04e49.js",
    "revision": "01658fca909810e67c26ee23398d3924"
  },
  {
    "url": "assets/js/23.3109fb4e.js",
    "revision": "98b84e5869c5ea835f9b3abfc6085627"
  },
  {
    "url": "assets/js/24.55b3d602.js",
    "revision": "11e52bffe58e7c16949cad2100769a3b"
  },
  {
    "url": "assets/js/25.1c3cbe60.js",
    "revision": "9fd58e9aa86178e0a5526b311eab360f"
  },
  {
    "url": "assets/js/26.8588a984.js",
    "revision": "d990ff20829b8ac2b3c4b345a8ab0d79"
  },
  {
    "url": "assets/js/27.1cb8204c.js",
    "revision": "00430698c6bdad456b58906c2b232e3c"
  },
  {
    "url": "assets/js/28.c9426049.js",
    "revision": "682a5b0ba5ca8c61c00b9dd9914a439c"
  },
  {
    "url": "assets/js/29.952bddf0.js",
    "revision": "84f80b73f50b7b793f51fbcc01a13da6"
  },
  {
    "url": "assets/js/3.e108967f.js",
    "revision": "0acb49082286f4b20cb6fcc2c0fcb002"
  },
  {
    "url": "assets/js/30.cdc0b4ca.js",
    "revision": "f50e4279287927f27ad627889755a144"
  },
  {
    "url": "assets/js/31.292d0b2b.js",
    "revision": "7c49278a40e2b00b17b931cb00a1cab2"
  },
  {
    "url": "assets/js/32.cbed5402.js",
    "revision": "a099ab9c71cdced8c8dd82658b7913bc"
  },
  {
    "url": "assets/js/33.52877182.js",
    "revision": "f0c4adbc629e86e372c12e1041ecadfe"
  },
  {
    "url": "assets/js/34.4d58cce0.js",
    "revision": "d2fa8e79751f69d8d886570bdc8ba721"
  },
  {
    "url": "assets/js/35.64c19521.js",
    "revision": "2628a1c76dba588e1f8804685794935f"
  },
  {
    "url": "assets/js/36.71d5e800.js",
    "revision": "deade4719f41d1e84d42ddfae70bb8da"
  },
  {
    "url": "assets/js/37.e210f2a6.js",
    "revision": "3757bf84d8537e17946dc344532feedd"
  },
  {
    "url": "assets/js/38.c7f0c745.js",
    "revision": "dd1519aea160fce50501b1c7f9577e66"
  },
  {
    "url": "assets/js/4.3eeba02f.js",
    "revision": "511169cc8120b813c059a0af0514a1c8"
  },
  {
    "url": "assets/js/5.bd1d58b7.js",
    "revision": "da21f3d07df9fe2a51ff3b4451e66eb5"
  },
  {
    "url": "assets/js/6.75ef8473.js",
    "revision": "78fa452b002d7e6ba3d4ef6ddba32404"
  },
  {
    "url": "assets/js/7.b7afe62b.js",
    "revision": "8067e0f9b4ebae6930513e9c4be7a9a2"
  },
  {
    "url": "assets/js/8.dbb0feea.js",
    "revision": "383a4f41324b6d7c592a60e92c079152"
  },
  {
    "url": "assets/js/9.84012f20.js",
    "revision": "354bd1255d2dda04362caf36b8d4f71b"
  },
  {
    "url": "assets/js/app.59db349b.js",
    "revision": "aa57eec5b2c7df76100b15ffb675c2f7"
  },
  {
    "url": "css/BFC.html",
    "revision": "ad5c4c0e707696d748bef70fba5f66c1"
  },
  {
    "url": "css/Flex.html",
    "revision": "f074f14456f6c2edbcd21426e76d887a"
  },
  {
    "url": "css/index.html",
    "revision": "e6603dec35096378999bbd6e05d91a6f"
  },
  {
    "url": "css/堆叠上下文.html",
    "revision": "97b7c961422ac82b67ae2b30573b9bdf"
  },
  {
    "url": "css/常见布局.html",
    "revision": "2f599374bd404a042888b049b1f7b6c3"
  },
  {
    "url": "css/移动端.html",
    "revision": "2501c04822cab43f8fe1cf924194dfd6"
  },
  {
    "url": "ES6/index.html",
    "revision": "010676d817d13f655ad6a6088a87ad3c"
  },
  {
    "url": "ES6/解构赋值.html",
    "revision": "bcce37012f56fe831128a9658c41f42c"
  },
  {
    "url": "essay/index.html",
    "revision": "27bb64223533a88d28487a541c08d06c"
  },
  {
    "url": "essay/touzi-2017.html",
    "revision": "f81e1b75e4d0d41af4a691e29ed9faea"
  },
  {
    "url": "friends/index.html",
    "revision": "cb9402b559b955c9f090c5aa40a562e4"
  },
  {
    "url": "hero.png",
    "revision": "631612eccd822da8696d23a4ac599333"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d4ac260937a3c2dce19cf50450252211"
  },
  {
    "url": "JS/array-obj.html",
    "revision": "7696c642d662047664bf756e7d69ed3d"
  },
  {
    "url": "JS/async.html",
    "revision": "9c99b747cd41b06741714999d8a23650"
  },
  {
    "url": "JS/date.html",
    "revision": "1fe8e24141083d8fc9fc04d523595fed"
  },
  {
    "url": "JS/index.html",
    "revision": "7a73dbd358b3809d7ef3e70b1dca08a5"
  },
  {
    "url": "JS/JS-web-API.html",
    "revision": "9a01bbf3eced8e7bcfbaedebd983b607"
  },
  {
    "url": "JS/prototype.html",
    "revision": "35ae75c9a49c3eb6f8d5270aa4d3bbf8"
  },
  {
    "url": "JS/scope.html",
    "revision": "58298cefdd0a8ec960a3e7f2d81e3ab9"
  },
  {
    "url": "JS/variable.html",
    "revision": "c4a182ec9f97a13fa5cd1cc95d8434e5"
  },
  {
    "url": "koa2/index.html",
    "revision": "bbe4b904e9b50c85e126ddb04dbef504"
  },
  {
    "url": "koa2/写在最后.html",
    "revision": "ca297e4e6121aef8412ebb472693a013"
  },
  {
    "url": "koa2/启动koa服务.html",
    "revision": "2a82b4416fea122f84de241437b09f2b"
  },
  {
    "url": "koa2/实现员工的增删改查.html",
    "revision": "c3e2327b5bb914ab3ecc21d5359cd214"
  },
  {
    "url": "koa2/搭建后端环境.html",
    "revision": "2f437533625b6af76b46f0a509bde30e"
  },
  {
    "url": "koa2/构建前端页面.html",
    "revision": "8239fcff8c2f9e9f6b039ab75eb1b6ab"
  },
  {
    "url": "koa2/登录功能.html",
    "revision": "682f0c29f2926dc2d6d5f5b297efd2b7"
  },
  {
    "url": "koa2/项目部署.html",
    "revision": "f940f998e833148b90aaf8694d16deb0"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "project/index.html",
    "revision": "a3748c00883a9947b74ef0d10d1c0809"
  },
  {
    "url": "resume/index.html",
    "revision": "22a7c973ab6119afefd46d1285a006e9"
  },
  {
    "url": "vuepress/index.html",
    "revision": "234672a68ee760ab83a2b5f695822b0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
