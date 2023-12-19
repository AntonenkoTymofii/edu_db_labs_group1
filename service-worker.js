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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "087d7b75c76409002b71c78a7f0157dd"
  },
  {
    "url": "assets/css/0.styles.ce88a6c9.css",
    "revision": "5fc775a85c2626ddf0c414439ace27a5"
  },
  {
    "url": "assets/img/relation-diagram.60415180.png",
    "revision": "604151805a60802b9e5d02489fbbe1d3"
  },
  {
    "url": "assets/img/screen1.f93fad4d.png",
    "revision": "f93fad4d6e994dc2a275169d201971be"
  },
  {
    "url": "assets/img/screen2.d5cfb1ba.png",
    "revision": "d5cfb1ba4e0d7e437a6a9bb0802cb051"
  },
  {
    "url": "assets/img/screen3.0f2629c9.png",
    "revision": "0f2629c96e80dc2e4c63e06873fd89f0"
  },
  {
    "url": "assets/img/screen4.d53e01ae.png",
    "revision": "d53e01aebe06448e911716be0ded934a"
  },
  {
    "url": "assets/img/screen5.66042cdc.png",
    "revision": "66042cdc4c91c8240a3a3317dad5cd63"
  },
  {
    "url": "assets/img/screen6.fb6e1cb5.png",
    "revision": "fb6e1cb512c22a2e3a82cccae76b757f"
  },
  {
    "url": "assets/img/screen7.b2fa380e.png",
    "revision": "b2fa380ec4bf24ea6c3c093fa3e114da"
  },
  {
    "url": "assets/img/screen8.44b0c61b.png",
    "revision": "44b0c61b1557642558f24e1d6a62ae7a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4f8710e.js",
    "revision": "6b404db6909321274b8c0766fcab0286"
  },
  {
    "url": "assets/js/11.5b3a880f.js",
    "revision": "2bcb07b11f958b82fdc20cdbf1e38198"
  },
  {
    "url": "assets/js/12.a78fcacd.js",
    "revision": "251421fa5c2535cadf694c7fc1a5040a"
  },
  {
    "url": "assets/js/13.3ff62712.js",
    "revision": "b3c56b9885141e401bd65d5686ef61b9"
  },
  {
    "url": "assets/js/14.1ef9e106.js",
    "revision": "fe29c22c40b86d8b6507c8979ac9e73d"
  },
  {
    "url": "assets/js/15.8cd9f5f4.js",
    "revision": "e902671e31f3017720c90283b416cb5a"
  },
  {
    "url": "assets/js/16.d4ec6a79.js",
    "revision": "4314ed749bb9624dfb7baf2f290b1775"
  },
  {
    "url": "assets/js/17.6770953c.js",
    "revision": "d6ae21aae4b58c6dd7eba3f83f43afeb"
  },
  {
    "url": "assets/js/18.7a8d7767.js",
    "revision": "5e3cf1d6a39f3770e572450d929e7dea"
  },
  {
    "url": "assets/js/19.57caeac8.js",
    "revision": "c89b46fb89fbef2d71b0d0441331f47b"
  },
  {
    "url": "assets/js/2.f7304a85.js",
    "revision": "34554b0354a146605f714b68f758c559"
  },
  {
    "url": "assets/js/20.06c065f7.js",
    "revision": "8071275dc3a0de23cc992b688839edf0"
  },
  {
    "url": "assets/js/21.d5b27531.js",
    "revision": "58d6382b8758d3eb813ba6236009c207"
  },
  {
    "url": "assets/js/22.303eb9a4.js",
    "revision": "3cb32140de2d4b6d88d6a5ae909c86a3"
  },
  {
    "url": "assets/js/23.e8098f76.js",
    "revision": "9f094ff1cc25ed51e16c2dc6179b415a"
  },
  {
    "url": "assets/js/24.27bb925b.js",
    "revision": "2ca008dcc3251927ea286cf5e3983fdb"
  },
  {
    "url": "assets/js/26.2e99f479.js",
    "revision": "ddf4c64c8a650fdd3e859292777a7be7"
  },
  {
    "url": "assets/js/3.1bcdca98.js",
    "revision": "7c96af8f0319b0204f29ae64c0dceaa4"
  },
  {
    "url": "assets/js/4.3a479a52.js",
    "revision": "5564a8a9a649c01816fa441a4bd8c1e0"
  },
  {
    "url": "assets/js/5.591a8bc0.js",
    "revision": "f9a78b417e9890c5d6bae4603a80c1b4"
  },
  {
    "url": "assets/js/6.a8273a57.js",
    "revision": "67781f217419c34dd494ebae3811fa25"
  },
  {
    "url": "assets/js/7.0ce18a35.js",
    "revision": "e2cf75785c9856dbb76909125f599cbe"
  },
  {
    "url": "assets/js/8.1e02a0c3.js",
    "revision": "b8bbcb022dfb6ac3f6a02a9e05236a12"
  },
  {
    "url": "assets/js/9.770f4be6.js",
    "revision": "55db17381b3ef42b4e5330adacdff164"
  },
  {
    "url": "assets/js/app.534fc861.js",
    "revision": "b6bfa4898c079c9802dc50909507b871"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0aa5073ca05724efb041d08a2b715999"
  },
  {
    "url": "design/index.html",
    "revision": "aab2188e0cdf6fcc16b7ba8b2e3b298a"
  },
  {
    "url": "index.html",
    "revision": "0d7e7283f6ccf6a56ab1c44609dc07fa"
  },
  {
    "url": "intro/index.html",
    "revision": "f374a813385508a91e68adf3e387b465"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "906cf6078775a8b9074858e1873da0c9"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "957ec51a6b756ee6e6d52693a1027436"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "14a94ee9e8205c19130008521c7c4aca"
  },
  {
    "url": "software/index.html",
    "revision": "c3a58b92ecf83c303a537d2693f832ad"
  },
  {
    "url": "test/index.html",
    "revision": "f5b365e131103aef27d1077217707321"
  },
  {
    "url": "use cases/index.html",
    "revision": "46dd098b17b6d6c521378ec90ed2c185"
  }
].concat(self.__precacheManifest || []);
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
