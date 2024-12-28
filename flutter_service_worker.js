'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d3bd4dbf86ddf7de5b9debcca776d400",
".git/config": "20e7fb55b29899a05ca2ca9d46379540",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bb7f0448ffbf27d1e290c8a53f9cc89d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a5d7a106e0005584dcd12332182ee578",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "096962235b63c2ff8de9708cdbbaa41f",
".git/logs/refs/heads/main": "d990fab42cede83e816e1d8a988a7e89",
".git/logs/refs/remotes/origin/main": "4bd4f6a5c33d6101ae0982ef8e025065",
".git/objects/03/b90a2f5c575e4c84a0c47c685aadfa90a34781": "40e156906599e41b2c08f9c42d6703cc",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/12/d4a84bdf3c14ea76f028bd5d7ea519c79b099f": "d369290bae092e52306ff54a284c9810",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/29eb29ddb894b5e22a5ec1909c4ed376e12263": "c37205d5f39306d2cf6d1f1551b24f99",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/37/5cc85ad75f21f20f52892078d8bb36329e24e0": "32442ed6eb77614e9cb9bfe5c0a9ad98",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/dda3139e32e4a063176d4e3d92fcbd09d4a4ed": "1e9222ed9939b4059eda8d2132794ec0",
".git/objects/51/679a2fee063896c5574d7f16e4abf31fdf1add": "ca554c3f788b36ecc56407d7b7fdbd70",
".git/objects/53/b5fc2c583485dc47d36d4ffc0d9e50593e5019": "dae83002feb96277f7f39c88d265f11a",
".git/objects/54/2e4dc8facfdd0073f3f06b082c81d8e7185d25": "9e9606152a33503c85fece17ca14daf5",
".git/objects/5c/797040bc9b49be2a9c9810905b8e1fdcc4ed29": "92220322da40eb4c6daa7369ea2da2e5",
".git/objects/61/c34d337f66279189221816eb58d23344be6be9": "3e178d68922238ea67c0f1ab626f1619",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/2373ed0f7faf7ffe23943cd6e74f154fcf035a": "f461b362fe81d8d95234fa6275ee8da6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/8ae1f1c5febd965a4388fb0e97e115948b80a6": "f2ebaf6c77b345df69cb3da9cb1e22df",
".git/objects/8f/844ee5628cb16c892a094b67ef5da03685cc76": "d57185c1a0c1bb8c96c79b4fbb29a01e",
".git/objects/92/6508c913dea704741ceb57e36ae988d971f45c": "548bf513e8042b21de4d1050d2153733",
".git/objects/92/ad6d696536b7deec5ccb1b5d18e9c82736a378": "4498d348ca65335b155e9de4b6b86e9c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9a/c7e582847d19fe0f0c47348aa7227dfc7608b0": "f1b1a846af1b668b1f5394829bc4e300",
".git/objects/a3/6924586b186116d282d346d713a8a2f7e6ee26": "8fa487f7f3b90b478141eaa8d3e18e63",
".git/objects/ab/21e79d370224f6d3c4115d5f8748301b31b3e0": "cca9d138a941ccc3bcbee916f45a8c8b",
".git/objects/ab/776c72bf51148ddfdf050ee9ae83d523ca0025": "746fb9a641ec221790f2417cff22a1be",
".git/objects/af/0c6c36fb3743b642335671d220cfb8325005b5": "b4d287b0564bc27bff2431441dbc7ab2",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/1d910fb7f03c1512bd5cfbabb09265ad5077f5": "d6a37635cfc7f1fb1c3d33eb464f8c73",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bed5f7f88c6f32deebf8396be878c3a91709cc": "28a0383aa70f53e6fc9bec90a87e90e6",
".git/objects/b8/d7361b98e077e860e9677ad152a07493256451": "ed55596472f0414980f55135440d6d39",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/f373d74b6663bff65ab9e790cb9deb8ee4af7c": "fb0194549efa546adba3b0fe1d3e0fa0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/756a682d29d08ec734907eb2bfd8c8e1b0041b": "a2ac574d0cf5039332c5992e6eab04c7",
".git/objects/d1/7d02781b43410f3f990c671758dbcada55d1a0": "c88ae6c8cccc972f3eda0d8791e92bf3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e7/b64870301a01acca3063190536e8036c8147ae": "475598ea4588213cdb79e3e1e76ad73f",
".git/objects/e9/33c1d8be7dcafce06f76d68c12b41299adbb2e": "4243c5ed5f0d6cc7b3fa099b08956ac1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f1/677430db8245a21dc6e6bb95bf8e8716f268b3": "e44d72f649768760061743ba5261341e",
".git/objects/f1/e77ceca2d8bfefb9f53a8bf6a2ee38318491e1": "b54c404950e9393712a21136f5e96fc6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7313e698abd64f4c8cf881e1dadaae501f62ad": "29354bb24cf1e25d0a5794bad868e5e6",
".git/objects/fb/bf6b885d9603fc625fd4c1da2c762b23ff6157": "3a88fd722711520f676ff5afd571062b",
".git/ORIG_HEAD": "20b069be8c8402748df56e688c57b58b",
".git/refs/heads/main": "789e7de36df4d0fa5631046b940ea99a",
".git/refs/remotes/origin/main": "789e7de36df4d0fa5631046b940ea99a",
"assets/AssetManifest.bin": "5837a376ebf7902d81268c40086dbee7",
"assets/AssetManifest.bin.json": "cefee93fd56f08d7db2344dcacdfcc8a",
"assets/AssetManifest.json": "d7c505f5f1c172e9dc6f69b286ac1c02",
"assets/assets/avatars/2.png": "eb9afc5461abce5c1829f3c178e459f0",
"assets/assets/avatars/3.png": "d661c58fc8a51d56294e88da5a9ffec0",
"assets/assets/avatars/4.png": "6f857dd28c458e0789b7646219ce248c",
"assets/assets/avatars/5.png": "bb3befcb24e442b1fc35304041a12105",
"assets/assets/avatars/6.png": "99c732fc4c080b63ef6ee24562497e5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "59a390fcac9b6e3e03704e8e7a268b28",
"assets/NOTICES": "a1311026f77024c063124a7de47b7ec2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "a7a133f6cb48a3062e3f0e47ab464f68",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a688ddcb9318562a971babc08456aa2",
"/": "7a688ddcb9318562a971babc08456aa2",
"main.dart.js": "af6e3d7c0dbfb446f42edd55478b04c7",
"manifest.json": "124476626fad9a6564bbb44b22b66596",
"version.json": "aafa113152aa2946f9f43ac495428b6d"};
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
