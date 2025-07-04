'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "58963770919dc41d30b7a32bc5c69b7c",
"version.json": "12358d1c713c3971c890db8fb8f680de",
"index.html": "a8d906dccca56bc9ce9171ae589835d4",
"/": "a8d906dccca56bc9ce9171ae589835d4",
"main.dart.js": "228a102ec77f13b34109eb64e1fa5597",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "f1a51b3aa51c0b50d173629f1311311d",
"icons/Icon-192.png": "ccb8ad81b9d09e0e9fb5a54e423f6303",
"icons/Icon-maskable-192.png": "ccb8ad81b9d09e0e9fb5a54e423f6303",
"icons/Icon-maskable-512.png": "d11d3ca6860df8f237b9d06205f43741",
"icons/Icon-512.png": "d11d3ca6860df8f237b9d06205f43741",
"manifest.json": "752bd75a77f197b07c59399915fddba0",
"assets/AssetManifest.json": "b1c718f23a76293ec94b57968f513c91",
"assets/NOTICES": "32368f46152ee03da0ba5a8cd9d40f39",
"assets/Image/vanhong_profile.jpg": "ef1f0c55d5ce91169274e4fd1074304c",
"assets/Image/cardsmart.png": "0f0f164c0014d28d2a2865bcba8f61cc",
"assets/Image/major.png": "7b4d74ee2ef65d9d04527b7b7e273f23",
"assets/Image/legend.png": "2ea7f705732d9aabb1d76e94b24788c6",
"assets/Image/smart5.jpg": "c1184da39f2ea60a5860cec1dab86d22",
"assets/Image/smart4.jpg": "27206411fef123abde271b4c292f628f",
"assets/Image/smartLogo.png": "e75c9b9bc79bcb6c2ceb9815320c3c6a",
"assets/Image/smart_flexi.jpeg": "337a96dd27e9738601e6ce689c65c2c5",
"assets/Image/smart6.jpg": "8feb077b2c11f9be1f4c572356ec01ca",
"assets/Image/smart3.jpg": "960012afd7c340d291f3cc1852a5ccc9",
"assets/Image/smart2.jpg": "61b6907dfc58db6eb17585a9e7c1451e",
"assets/Image/smart1.jpg": "906e77f5ba8bbc4ce5bb0ab9e40f52ec",
"assets/Image/smartlonobk.png": "218fb58d63ff5e4bd2f8186f6b80f102",
"assets/Image/asinakit.png": "e1886c9875f191709ebc1369dddb0a18",
"assets/Image/nompav.png": "af6b7b4bd62be96edfd32e8eda33c04f",
"assets/Image/smartgood.jpg": "fb04ec929b3e7a0aca07aff49c53d21b",
"assets/Image/pasta.png": "57d8b6a67f387c87016d4a1f4b8feee8",
"assets/Image/gloria.png": "07da257de57aaab22ffb26abb3f5cccb",
"assets/Image/pizahut.png": "a6fd3c356d48dbaeb3c619f98ccb650a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "6baa2bce6aa017eaa022b96a271123da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a85407a918f14450c2bf0a23e279545a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3504cf25735cbab859a663741011bdd1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f4545f1e5c3e36c5ae2916f29b0f5ecc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bb4b671ea58ae98d1b9d8b68d20c884e",
"assets/Icon/lottery.png": "b0d5f8f8012fadf80aebc659eb8a0049",
"assets/Icon/animal_14855117.png": "9fc8f18b7bc8737d46d72cb2387267ae",
"assets/Icon/glass-fork_32376.png": "71a10e10fe8df411063dcc5a556f8fbb",
"assets/Icon/ciclepay.png": "ac3fe296fdc14462af928a601d2e054e",
"assets/Icon/pipay.png": "96a50f9245c5baf308b8c0f07e713761",
"assets/Icon/airplane-filled-shape_59383.png": "b579d8f94dedce6089bf02a68c4800bf",
"assets/Icon/fast-food_5778652.png": "42471b242036ef309b643e7a574692da",
"assets/Icon/log-out_5198408.png": "20646623226d1d68feef502fb735dba6",
"assets/Icon/abapay.png": "97e0adc6bcd401dc1ef3f00ebee5837f",
"assets/Icon/file_12653312.png": "10470f805d8770a91fc12f2e051bad08",
"assets/Icon/coin_2529396.png": "62c4505270d50b013a1bade8ead28207",
"assets/Icon/headphone_7866062.png": "6f21652731cb0e8372ab51d84a712228",
"assets/Icon/heartbeat_831978.png": "28070f1713c802c99df57a0d8c0558f4",
"assets/Icon/browser_10636864.png": "33ba4b6dcb6e77741ab70aa13bc047d9",
"assets/Icon/4-rounded-squares.png": "f13fb14950ae5b061069b48da02a99a7",
"assets/Icon/graduation-hat_999735.png": "5919672156d92edd45c4531cd6cc5fb0",
"assets/Icon/glasses_1756052.png": "74fcb16fdd01eb2e26dff84f2e4adc35",
"assets/Icon/Aceleda.png": "ff47fa0b2edea214cfe4df6baef40274",
"assets/Icon/alipay.png": "d08ad2746f4ffb95caff20fda341e2ca",
"assets/Icon/Leng%2520Center.png": "71fe5af79b3be195314e17736b0db27a",
"assets/Icon/JcbPay.png": "f01fba2f491823683d0bd8d52e34ed85",
"assets/Icon/cutlery_962826.png": "505149af989111af017fb7ac490f0379",
"assets/Icon/visal.png": "5dea9d6530ecceb8d9b93311b2a5d3ab",
"assets/Icon/unionPay.png": "eccfc2b66b1e371a726e23bc172396d3",
"assets/Icon/credit-card_6484172.png": "b28c7e35e23b808eadec66e5b013acbb",
"assets/Icon/smart_vip.png": "56314e37d3cb9377f969e081875331e2",
"assets/Icon/jet_3556281.png": "59881dd7f3e1775bd3bb9e85558e9f4b",
"assets/Icon/ticket_4864382.png": "42eada1cd3e233342fd93c7aec3b3240",
"assets/Icon/pay-per-click_11744767.png": "493ac9847e5c5670d98c34461ab2cf43",
"assets/fonts/MaterialIcons-Regular.otf": "eabcea0d87c6de8fab59b7d99c95dda1",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
