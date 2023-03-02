'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "579c418f38e1542f096d2711ee3213f6",
"assets/assets/images/alifbeneran.png": "e8ea5016eef3bb6a0a8ad6501a5e48d6",
"assets/assets/images/aliplagi.png": "3cda464d75ce7874297c76f5f7ffa9c8",
"assets/assets/images/alip_1.png": "148db0e0726a5f83cf6da898282c8018",
"assets/assets/images/alip_2.png": "79b948433b02e37c435b5bb3a6b8534f",
"assets/assets/images/alpin_1.png": "3efa070fc28d85874027a2c276816e03",
"assets/assets/images/alpin_2.png": "f1e20d357dfd8537c4e1c09ed775c8dd",
"assets/assets/images/alvinmerah.png": "e5c69d5d01187f87c9dfc1a4329e2a16",
"assets/assets/images/background.png": "a79db8be0b78a5eac248a900b44c7fb9",
"assets/assets/images/batitbagus.png": "80430e3b54a611a71a19a2a11811f94b",
"assets/assets/images/batit_1.png": "640973225db9fc667ebab106db3009be",
"assets/assets/images/batit_2.png": "570a3db0a805f86a32c777870fc37ab5",
"assets/assets/images/bootstrap.png": "7ed81d81d25cf77f40530a8f60bfce92",
"assets/assets/images/calPiao_alpin.png": "cf0c4b878b0ace42efc7eb73e8308d5c",
"assets/assets/images/conduart_batit.png": "e1902b116fde352466e7926c3b0231ce",
"assets/assets/images/coolpet.png": "bf2074b82f0cd04cf050a417a2d39eee",
"assets/assets/images/css.png": "14b344ef58856e332bc87418ed3a9f42",
"assets/assets/images/dc.png": "0f0ff6030f81b95e57502e3b78aa792d",
"assets/assets/images/dcputih.png": "911103525ea72a79390a87d3a8c9ac4c",
"assets/assets/images/dedi_1.png": "2b8c137bc3f3e2a72052687ce1930887",
"assets/assets/images/dedi_2.png": "01fd6a83d06a70eeb4dcf70bd198bb49",
"assets/assets/images/fb.png": "075ef5bb60802c47abeae99ce8dece64",
"assets/assets/images/figma.png": "5e0d0aa1210d1819f7f3acd93f34bfa5",
"assets/assets/images/foreground.png": "2fbc85a9fdba5abb7a4eaef6a1066ef0",
"assets/assets/images/garisgaris.png": "11f93d5684f69a965f30b86ae7cea4a7",
"assets/assets/images/garisgarisputih.png": "b554fcd11a53b193238c8bd72d9f3e19",
"assets/assets/images/gradient_sky.png": "4d43098f3c696b6be058f6a839e4a9f2",
"assets/assets/images/html.png": "621ba359bd3835e32b99e08d74cd1884",
"assets/assets/images/ics.png": "bcef2bc959a2ef35621b4153d63101ab",
"assets/assets/images/insta.png": "7874a170f3d243502e41a428e2b1ec7f",
"assets/assets/images/js.png": "be9081c86a34422f82aae677748435ad",
"assets/assets/images/kalo_digabung.png": "d8d573437a972477687077ee6a2645bf",
"assets/assets/images/linkedin.png": "a36a60e521eef42ce93b9ea69a45f3d4",
"assets/assets/images/logo.png": "f8e1dafc981c1e819195fccac5a5cc10",
"assets/assets/images/meteor.png": "52cb50ffdaa7112a7f825499c95cd225",
"assets/assets/images/moon.png": "f6a76f8444377e6bc0b209c56228d9a7",
"assets/assets/images/moon_1.png": "f5636f5253f3e15e05d51e0aa93a9d35",
"assets/assets/images/nada_1.png": "176965ce2a336b95978b8df6e9bc05e9",
"assets/assets/images/nada_2.png": "c68c4c910410ca11fe2366c0c22fcb32",
"assets/assets/images/pancarai.png": "1b5ba1329ffceb29d2f2b948f5d327f6",
"assets/assets/images/pancaRai_alpin.png": "c8d3f77a24bbcda12983a3d9bab71371",
"assets/assets/images/photoshop.png": "3ed1f26c3ab0e27985447d32457979b4",
"assets/assets/images/php.png": "d34709f70cc67a4ac48368dc599ea524",
"assets/assets/images/Polygon_1.png": "5b862a2b5d3bccc9d52c95a3e0929f79",
"assets/assets/images/Polygon_2.png": "e2b89907ae80e9255ad5821d2ee5eb53",
"assets/assets/images/premire.png": "12530d7c96b9e0c64f21db7e6b5666b2",
"assets/assets/images/python.png": "891823cea600007b1d3d2e2e24d023d3",
"assets/assets/images/react.png": "c2e2eb41f8878f88a2f45478b500863e",
"assets/assets/images/stars.png": "d78e83bbb38d061ac6a149ee148ead08",
"assets/assets/images/tailwind.png": "bae22a697e4e2ca637e148d933dd57e7",
"assets/assets/images/tindog_batit.png": "970c8fd9d61af6e53d11de976ae5f242",
"assets/assets/images/twit.png": "3487d1f9465ad47b6944d6c33083cfa9",
"assets/assets/images/unity.png": "c88327d36d1a824ea46563a817636a32",
"assets/assets/images/wa.png": "b31ec2082c140e2303b7e01680e25866",
"assets/assets/images/webOsis_batit.png": "740d91ca8714a67f7fb600b82df368e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3bef4de9ae4c9f94c5d2b9e4b8d1bf5c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "5964b2c100bdfb01f4743a525998c9a0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b156ed2193ef7c223e729f30e5d4892b",
"/": "b156ed2193ef7c223e729f30e5d4892b",
"main.dart.js": "f6be4e6b28494795359fafe93f48c5cf",
"manifest.json": "2c8379c65d9ecb632927c6fc595ced9d",
"version.json": "f17f10678b62196c38d1fc8b582e90d0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
