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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2567f3185c5a7b65c2b2231230de2fb8708ec379-6c271645bc550a3785a9.js"
  },
  {
    "url": "2567f3185c5a7b65c2b2231230de2fb8708ec379-6c271645bc550a3785a9.js.map",
    "revision": "4c8b68aeb1d6b13629b701abd30d9f89"
  },
  {
    "url": "404.html",
    "revision": "6ca6f7bb62105cb7e002bc12a0b7e14a"
  },
  {
    "url": "404/index.html",
    "revision": "6b0ad54116bae83be2172de00c000a4b"
  },
  {
    "url": "4b5897c1b8d7d2c8a94fbc7d34db9c2358362eef-b159e8b46b1f9172fd55.js"
  },
  {
    "url": "4b5897c1b8d7d2c8a94fbc7d34db9c2358362eef-b159e8b46b1f9172fd55.js.map",
    "revision": "bd45802fd9896b4417c31050b5aa285d"
  },
  {
    "url": "9dce2e8cbca33bd26d95222544c623b96f1324b8-3a60d6ee538d2fe11289.js"
  },
  {
    "url": "9dce2e8cbca33bd26d95222544c623b96f1324b8-3a60d6ee538d2fe11289.js.map",
    "revision": "200385f42e2121bed28759a8f3e5c5e4"
  },
  {
    "url": "about-us/index.html",
    "revision": "db7b0f580fd4ae344c345216c8b525d2"
  },
  {
    "url": "admin/config.yml",
    "revision": "692f3346518cf9127d174f1e819f76a6"
  },
  {
    "url": "app-205ba5fb898c1e5efb68.js"
  },
  {
    "url": "app-205ba5fb898c1e5efb68.js.map",
    "revision": "df3be61f5a706f12ce4aba99f8c7eb24"
  },
  {
    "url": "b637e9a5-f5a2e371c843f50074a4.js"
  },
  {
    "url": "b637e9a5-f5a2e371c843f50074a4.js.map",
    "revision": "7e5d5e307f0cb1003c5d61d07f4e170d"
  },
  {
    "url": "blog/index.html",
    "revision": "7b9264a57f3b43ed9cb7dac882a842d8"
  },
  {
    "url": "chunk-map.json",
    "revision": "03aab267e70595494c4b3fc0e7595f5f"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c9875e2473a7c518755f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c9875e2473a7c518755f.js.map",
    "revision": "b4992b9ae56d5ad409cb56c3ed8b986f"
  },
  {
    "url": "component---src-pages-404-tsx-cf395d5051c00bd9080f.js"
  },
  {
    "url": "component---src-pages-404-tsx-cf395d5051c00bd9080f.js.map",
    "revision": "3dbae23c8b213f0ab254f478a603d153"
  },
  {
    "url": "component---src-pages-about-us-tsx-3e30594b49110c3aa48f.js"
  },
  {
    "url": "component---src-pages-about-us-tsx-3e30594b49110c3aa48f.js.map",
    "revision": "00c7f6f8979390c3ae1a895962786e04"
  },
  {
    "url": "component---src-pages-blog-tsx-91f6ea9b8156feaf169a.js"
  },
  {
    "url": "component---src-pages-blog-tsx-91f6ea9b8156feaf169a.js.map",
    "revision": "8845df1fab5f980ca6cd6ccb9b6b4469"
  },
  {
    "url": "component---src-pages-contact-us-tsx-e5b3540d2c80df895a69.js"
  },
  {
    "url": "component---src-pages-contact-us-tsx-e5b3540d2c80df895a69.js.map",
    "revision": "0975e8e8e916d002909acd241c13c3de"
  },
  {
    "url": "component---src-pages-index-tsx-39d96ef6cc7a0dd9660c.js"
  },
  {
    "url": "component---src-pages-index-tsx-39d96ef6cc7a0dd9660c.js.map",
    "revision": "7675de104ff8f261f92976db40d353d9"
  },
  {
    "url": "component---src-pages-products-tsx-3f670752a06bbce3d6ee.js"
  },
  {
    "url": "component---src-pages-products-tsx-3f670752a06bbce3d6ee.js.map",
    "revision": "02b9d00ae3d52ea6b25218c94c930a6c"
  },
  {
    "url": "component---src-pages-solutions-tsx-d03e74b297a736ada343.js"
  },
  {
    "url": "component---src-pages-solutions-tsx-d03e74b297a736ada343.js.map",
    "revision": "8cfc5f75373e04f63187de27c6d17472"
  },
  {
    "url": "component---src-pages-tags-tsx-cc8fe92f57f3658e1d28.js"
  },
  {
    "url": "component---src-pages-tags-tsx-cc8fe92f57f3658e1d28.js.map",
    "revision": "978f3b6a1b5aa69d632aaf7bcd64bc7b"
  },
  {
    "url": "component---src-templates-markdown-page-template-tsx-609dab18b94885d4640d.js"
  },
  {
    "url": "component---src-templates-markdown-page-template-tsx-609dab18b94885d4640d.js.map",
    "revision": "7cc35d2eefa3d424b0324fcb9254cf3c"
  },
  {
    "url": "component---src-templates-tags-tsx-e9e1e87301352c5009da.js"
  },
  {
    "url": "component---src-templates-tags-tsx-e9e1e87301352c5009da.js.map",
    "revision": "5388d73739ecafc1ed5ea563adcb067c"
  },
  {
    "url": "component---src-templates-template-tsx-923251224714e7bbc7f3.js"
  },
  {
    "url": "component---src-templates-template-tsx-923251224714e7bbc7f3.js.map",
    "revision": "eb5ab344865d0cd88259864ab76bca25"
  },
  {
    "url": "contact-us/index.html",
    "revision": "d9f1fca4b7357a39382504f5607efb0d"
  },
  {
    "url": "datacontroller-on-azure/index.html",
    "revision": "90ef28c270a36c2b10d732ab01eec45e"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "0d652e6c561e8c360dfa1b24a049b981"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js.map",
    "revision": "429fadc91e9a8b0d3455ab12ac5badf5"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "687dd0bdbfcb731131126a4ed607deb6"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "753b7e26fa09077212032385909aa28f"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "d30eb78a027af939c1d397ac5b9aec93"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "fbb8b759713b152b8b2a47170d32e151"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "8d98d31ebc4f91e9eaceac64c76d1b47"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "9c59a5a9ccf8f5b774ee77c5fac04fb5"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "5d10ccbeffcbe61bfe0f8d02499f6bda"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ab556e1bd5fb4e90caed7e2cb200433c"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "f29dbc6e6a95705b3d42792ec75e2b98"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "d50e7bbeed19b8052c8558cd7ba3c61b"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "b67e19268862421f0cf6c86b5665961e"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "7b80af0bfd74c9028d7a735f9691aaad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "8ac9ab48e31623082f249c2fff32a4af"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "7e3742d5f44b09782dbd305ee5fd4d41"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "cfaaf4a48bf5c891f8fcb549fff7b599"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "62111edfc6bc51a5f218d1821a3bad77"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "598c27ccb929a75ee9e0fd8e83d79390"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "1209edb4f4214af55dd97e44031d3adb"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "dc73287a433f20589fce7eb5d558365e"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "7b80af0bfd74c9028d7a735f9691aaad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "3f4234e9c0752612b2c8f3bf94a78df9"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "8d3bcf9c07ecc610fedaa96880619f02"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "8d3bcf9c07ecc610fedaa96880619f02"
  },
  {
    "url": "img/browserconfig.xml",
    "revision": "653d077300a12f09a69caeea7a8947f8"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "eb9d2e3fef52dd0a7d89cdd847459a1b"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "5f3e9d8aff464e3b3d69fa05c7b4aad9"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "8ac9ab48e31623082f249c2fff32a4af"
  },
  {
    "url": "img/favicon.ico",
    "revision": "5948767183be5cba535808aee5256c39"
  },
  {
    "url": "img/logo_linkedincover.png",
    "revision": "272dfeac1d5c624002d36c585aa83f42"
  },
  {
    "url": "img/manifest.json",
    "revision": "2cb1641030856b343a54a7b78ade9295"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "e9fc2834c2a31d234156f3e31bc8133d"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "165d8ff8f221cc451b9879c70964fd3a"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "100e3220838bbfc7cf137c55764b52a7"
  },
  {
    "url": "img/sas-apps-2.png",
    "revision": "83042da7171ead9b9f55e8a447891579"
  },
  {
    "url": "img/sas-apps.png",
    "revision": "f46b4953d0bffa0243eaa296edbb0b84"
  },
  {
    "url": "index.html",
    "revision": "b73cda71865ed483866b5e31026ed2d1"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e6d562682868e4403a950ec03f3ee5b6"
  },
  {
    "url": "modernising-legacy-sas-scl-af-applications/index.html",
    "revision": "c497d06514cbe2bc708a1c32e797a6fc"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "09066c3e51952d9b9701e24afb05601f"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "5e0e0be45b5aee556ef049956eaa6ca7"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "d1c4e95c77a95d043190190321db7953"
  },
  {
    "url": "page-data/about-us/page-data.json",
    "revision": "67ed5c0a2217efe0a9295f6877721221"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "0edb03cdb15cd3b655e49351d8aac46a"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "a03a0b6df5b605d756d9179a290ed334"
  },
  {
    "url": "page-data/contact-us/page-data.json",
    "revision": "daaea9cf277a4e9cc0800b7892fefeb4"
  },
  {
    "url": "page-data/datacontroller-on-azure/page-data.json",
    "revision": "791128f4fd0192acf6c3eff1e6bd1c2b"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d128bb0471ca7c92cbb52b72046c1b9f"
  },
  {
    "url": "page-data/modernising-legacy-sas-scl-af-applications/page-data.json",
    "revision": "230704d7805d73a6b47c167db292d643"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/products/page-data.json",
    "revision": "c880138f351a85c6d3e25f540d04a5e4"
  },
  {
    "url": "page-data/sample-md-file/page-data.json",
    "revision": "f3a51ebc2e5403537fa09797192da431"
  },
  {
    "url": "page-data/sas-streamed-apps/page-data.json",
    "revision": "f1cd4c2032a2d072ea80c1903e6fd8b3"
  },
  {
    "url": "page-data/sasjs-workshops/page-data.json",
    "revision": "af8809c350a619124acecc72e68faf01"
  },
  {
    "url": "page-data/solutions/page-data.json",
    "revision": "ed5827a9cdeffd708c8f0c76b5abf13d"
  },
  {
    "url": "page-data/tags/af-scl/page-data.json",
    "revision": "3fddf0c0ca8bdc72d8357c460a2e6c4b"
  },
  {
    "url": "page-data/tags/apps/page-data.json",
    "revision": "360acdea4c69b9c1b145dd453097d746"
  },
  {
    "url": "page-data/tags/data-governance/page-data.json",
    "revision": "591e9fa8321bde835eb95288337d07d0"
  },
  {
    "url": "page-data/tags/git/page-data.json",
    "revision": "bad59e8f9a2a4ebc9ff582f4b66df5b4"
  },
  {
    "url": "page-data/tags/microsoft-azure/page-data.json",
    "revision": "7bfc559f6f0f0a09b946f777c745d83a"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "865e3aefaae2df47b644a0fa5cb03b5a"
  },
  {
    "url": "page-data/tags/sa-sjs/page-data.json",
    "revision": "a1bfd7918c402f3aa061fc1d7707831d"
  },
  {
    "url": "page-data/tags/sas/page-data.json",
    "revision": "e6de698ad00ec7a8e4d0107541e57550"
  },
  {
    "url": "page-data/using-git-with-sas/page-data.json",
    "revision": "2c86c1929b62ee88251df2f535fbde77"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js.map",
    "revision": "57dce5586cf167b11abdcd80430694f1"
  },
  {
    "url": "products/index.html",
    "revision": "a4d5177ff02945b7705b38eb463a16da"
  },
  {
    "url": "robots.txt",
    "revision": "d307a31d16b65e630976d6cf4b318c01"
  },
  {
    "url": "sample-md-file/index.html",
    "revision": "0a2c526aeead3fd0cae4cbc27cf627e9"
  },
  {
    "url": "sas-streamed-apps/index.html",
    "revision": "2577f1a62d50a0f9e7ab998cf13da70d"
  },
  {
    "url": "sasjs-workshops/index.html",
    "revision": "cea642e3d4e6afcb2e75a68deaa6f865"
  },
  {
    "url": "solutions/index.html",
    "revision": "7a470b9407d6602e1dae2df9ccfb7f1e"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/1d69c/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/2a4de/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/31987/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/3faba/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/46604/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/497c6/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/4dcb9/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/5e9fc/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/5ff7e/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/62d80/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/78797/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/aa440/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/d8815/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/e1953/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/ee604/mario.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/0d367/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/2a4de/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/31493/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/46604/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/497c6/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/4dcb9/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/5ff7e/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/62d80/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/e1953/sas_scl.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/074f8/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/1d69c/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/2a4de/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/31987/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/46604/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/497c6/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/4dcb9/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/5ff7e/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/62d80/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/78797/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/7de21/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/aa440/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/d8815/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/e1953/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/ee604/datacontroller.png"
  },
  {
    "url": "static/b0875b4e990aaefd7647b515c392a871/4dcb9/sasjs_240x120.png"
  },
  {
    "url": "static/b0875b4e990aaefd7647b515c392a871/8ff5a/sasjs_240x120.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/46604/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/497c6/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/62d80/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/8c8ba/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/e1953/targets.png"
  },
  {
    "url": "static/business-finance-dafe6b3c382f7215f07e1399383df7c3.svg"
  },
  {
    "url": "static/charts-9ba9f3351f80076e9254d080b1758b26.svg"
  },
  {
    "url": "static/contact-help-07f285350ddeabcf6360a6e892c96e1c.svg"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/46604/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/497c6/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/62d80/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/e1953/sasjs_square.png"
  },
  {
    "url": "static/fontawesome-webfont-674f50d287a8c48dc19ba404d20fe713.eot"
  },
  {
    "url": "static/fontawesome-webfont-912ec66d7572ff821749319396470bde.svg"
  },
  {
    "url": "static/fontawesome-webfont-af7ae505a9eed503f8b8e6982036873e.woff2"
  },
  {
    "url": "static/fontawesome-webfont-b06871f281fee6b241d60582ae9369b9.ttf"
  },
  {
    "url": "static/fontawesome-webfont-fee66e712a8a08eef5805a46892932ad.woff"
  },
  {
    "url": "static/main-background-min-b4cd84d8936de235113ff78412213cea.png"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "styles-c2fe8482057191dca484.js.map",
    "revision": "aca5b7feab278569bad07d62a5da3185"
  },
  {
    "url": "styles.4abd6a74a5fd8fa03d84.css"
  },
  {
    "url": "tags/af-scl/index.html",
    "revision": "fd7f8a30aed3e7f1516103d71198bc96"
  },
  {
    "url": "tags/apps/index.html",
    "revision": "22e249e0e8e0529fd5ca5163379f856a"
  },
  {
    "url": "tags/data-governance/index.html",
    "revision": "b4304311ee0bff16b873b1baa093f182"
  },
  {
    "url": "tags/git/index.html",
    "revision": "614daaf081396e1690c54dc2137ae6b5"
  },
  {
    "url": "tags/index.html",
    "revision": "30c8ece5293bdbc26aa62e3bcb7945ba"
  },
  {
    "url": "tags/microsoft-azure/index.html",
    "revision": "b0c1b973f182954452fea5f18e114806"
  },
  {
    "url": "tags/sa-sjs/index.html",
    "revision": "b0b02f048be94ffdd0ecad5b2ea4b3a5"
  },
  {
    "url": "tags/sas/index.html",
    "revision": "7918ad0caa9b522d9ca67eb6afca6ac0"
  },
  {
    "url": "using-git-with-sas/index.html",
    "revision": "753a3a8c81db575d1275263880a4bd0d"
  },
  {
    "url": "webpack-runtime-15b8b69069ab12668334.js"
  },
  {
    "url": "webpack-runtime-15b8b69069ab12668334.js.map",
    "revision": "9329c2c39f02089f91212fa942e6d184"
  },
  {
    "url": "webpack.stats.json",
    "revision": "8bca7dac83c19f799787bb2fa19fa58c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-205ba5fb898c1e5efb68.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
