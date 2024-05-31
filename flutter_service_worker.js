'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "12358d1c713c3971c890db8fb8f680de",
"index.html": "e517561d3338b974ad0b0fa20609e6ff",
"/": "e517561d3338b974ad0b0fa20609e6ff",
"main.dart.js": "47b155381033e2bf0fd8d194ea4e755c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "f1a51b3aa51c0b50d173629f1311311d",
"icons/Icon-192.png": "ccb8ad81b9d09e0e9fb5a54e423f6303",
"icons/Icon-maskable-192.png": "ccb8ad81b9d09e0e9fb5a54e423f6303",
"icons/Icon-maskable-512.png": "d11d3ca6860df8f237b9d06205f43741",
"icons/Icon-512.png": "d11d3ca6860df8f237b9d06205f43741",
"manifest.json": "752bd75a77f197b07c59399915fddba0",
"assets/AssetManifest.json": "4999d43612ac9003013ac74196503b99",
"assets/NOTICES": "37767b475e0a053c28d82135ab4afe4a",
"assets/Image/vanhong_profile.jpg": "ef1f0c55d5ce91169274e4fd1074304c",
"assets/Image/major.png": "7b4d74ee2ef65d9d04527b7b7e273f23",
"assets/Image/legend.png": "2ea7f705732d9aabb1d76e94b24788c6",
"assets/Image/smart5.jpg": "c1184da39f2ea60a5860cec1dab86d22",
"assets/Image/smart4.jpg": "27206411fef123abde271b4c292f628f",
"assets/Image/smartLogo.png": "e75c9b9bc79bcb6c2ceb9815320c3c6a",
"assets/Image/smart6.jpg": "8feb077b2c11f9be1f4c572356ec01ca",
"assets/Image/smart3.jpg": "960012afd7c340d291f3cc1852a5ccc9",
"assets/Image/smart2.jpg": "61b6907dfc58db6eb17585a9e7c1451e",
"assets/Image/smart1.jpg": "906e77f5ba8bbc4ce5bb0ab9e40f52ec",
"assets/Image/asinakit.png": "e1886c9875f191709ebc1369dddb0a18",
"assets/Image/nompav.png": "af6b7b4bd62be96edfd32e8eda33c04f",
"assets/Image/pasta.png": "57d8b6a67f387c87016d4a1f4b8feee8",
"assets/Image/gloria.png": "07da257de57aaab22ffb26abb3f5cccb",
"assets/Image/pizahut.png": "a6fd3c356d48dbaeb3c619f98ccb650a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "a13379bec87a6f3b52371625e39678e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2b1685be9c5c8a2dd5aa2d52855929d9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3504cf25735cbab859a663741011bdd1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f4545f1e5c3e36c5ae2916f29b0f5ecc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "68b63b5c5ff19b875be1cab431b0eee2",
"assets/Icon/lottery.png": "b0d5f8f8012fadf80aebc659eb8a0049",
"assets/Icon/animal_14855117.png": "9fc8f18b7bc8737d46d72cb2387267ae",
"assets/Icon/glass-fork_32376.png": "71a10e10fe8df411063dcc5a556f8fbb",
"assets/Icon/airplane-filled-shape_59383.png": "b579d8f94dedce6089bf02a68c4800bf",
"assets/Icon/fast-food_5778652.png": "42471b242036ef309b643e7a574692da",
"assets/Icon/log-out_5198408.png": "20646623226d1d68feef502fb735dba6",
"assets/Icon/file_12653312.png": "10470f805d8770a91fc12f2e051bad08",
"assets/Icon/coin_2529396.png": "62c4505270d50b013a1bade8ead28207",
"assets/Icon/headphone_7866062.png": "6f21652731cb0e8372ab51d84a712228",
"assets/Icon/heartbeat_831978.png": "28070f1713c802c99df57a0d8c0558f4",
"assets/Icon/browser_10636864.png": "33ba4b6dcb6e77741ab70aa13bc047d9",
"assets/Icon/4-rounded-squares.png": "f13fb14950ae5b061069b48da02a99a7",
"assets/Icon/graduation-hat_999735.png": "5919672156d92edd45c4531cd6cc5fb0",
"assets/Icon/glasses_1756052.png": "74fcb16fdd01eb2e26dff84f2e4adc35",
"assets/Icon/Leng%2520Center.png": "71fe5af79b3be195314e17736b0db27a",
"assets/Icon/cutlery_962826.png": "505149af989111af017fb7ac490f0379",
"assets/Icon/smart_vip.png": "56314e37d3cb9377f969e081875331e2",
"assets/Icon/jet_3556281.png": "59881dd7f3e1775bd3bb9e85558e9f4b",
"assets/Icon/ticket_4864382.png": "42eada1cd3e233342fd93c7aec3b3240",
"assets/Icon/pay-per-click_11744767.png": "493ac9847e5c5670d98c34461ab2cf43",
"assets/fonts/MaterialIcons-Regular.otf": "af6bed9bd1c893eff418465b402898a6",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
