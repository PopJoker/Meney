'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1a4a097e17ceee03ae7a8df9253ac51a",
".git/config": "4a660464ed8c5d1a6dafc2468fd87702",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "4d107646696aba8c0fecd7ed59a8d4d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "53ba727d4c6a14e37ce688b8ad35e304",
".git/logs/refs/heads/main": "a81b8c5922cc01e54f2c387bab510d8a",
".git/logs/refs/remotes/origin/main": "a1276be2ca640ae693d0c49c0392ffaf",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/3b0d644cd93d6a41117ae13dc7419fd56e16c6": "7f1bfe4c7086a618a4fc567172ae2a07",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1f/e0d5ca5a2701ad3c5c96632e722f232b8b8d71": "dfae986088006919eb84aad45fb9e6dd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/26/b702da1a45b964d047dab3f2f5618c8924ccda": "90dc216664752f1f0c31054aa50d8c9c",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/2c3a51775fe10d3b97c48fd99b3dbce038476b": "c56d7e02cdc764c4c2df7b49669a9e62",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/35/ee1d95fed86a9abe667f15debd97889d03bd2f": "cde9378f441d8896493061db0992f19f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/48/a6d41427743c3f13ce8aacb218afebd2ea0e6e": "fe9b1ab3fed948dd17960655563850a8",
".git/objects/4a/eeb9f49ac68ffc5b393e096c7b2e50315d64ea": "7b7d1f385250d296ba30a1444f0af5e4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/02d988b922f086d0fd2fde1014a18926994228": "8ef3c911af8eeb131910ddfba26cd06a",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/62/713ea9642c736a5b0e73c955b0660094fa06e8": "c11ffafcec3a1e3232d08e03b676b9ce",
".git/objects/64/16fa8a1a2b351b5dee082a4b7d99502e08df95": "9a5838bc8191bd4717c28c4d8e46081c",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/77/ce6fa3d21471fea3a90bea3359441bc3fd45bb": "4b2ec45aad64727f8cabbaded944e2e1",
".git/objects/78/fedfa4d3757f8e46a2c3d39bfc76d7054ab152": "cf6709ed4bebe2b667e2535a645ee248",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/9ae0e58a442d57ce4a48ccfc574030556e14b0": "73051a1739333970b7ca69484de9365b",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/cb26e92dec654fcd25a11f1a8b962b0c561f12": "bd8304c4fcc20900a21ecdfd8d9c6774",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a6/b12661bf4b8681f1c04b2bdb70a968fd5a1daf": "1493a80f534e13135cd18c4b0d413dcd",
".git/objects/a7/4dfab2327511afbc623942e0cb3ddc5507db55": "97f9cb99a0791592596cd92387d246b3",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/b2/e1abd7edb33938786e1f7199cbac6711fca18d": "1c0e1cf13bf2dd5d2bd0b0cfa3a931fe",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/dae922e4453016800d2deb239fdfce550e06cf": "be2d9406471963e37cd0ba4813346f0d",
".git/objects/ba/17d380f12e90d28db705419c41f0b3b773067e": "4dc9f666a96bcf309d441460d9002736",
".git/objects/be/feb0a918d5bfa7c8705d2c2d3372ca0a90d0b4": "df1eef46035628933b68c8d3f0e078d0",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/974abd3ba954b0584c786cf9ce52e4593e3220": "404afb1c4f68a5a824d6376eee68757c",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e5/33c3f6e3bab14c841e4d34faf2d9c7e1af968e": "0cf692013c787d2c6c92f2be04f01013",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/61d26aaccb1277357844ce9e71eff2103b4194": "fcfb8189f468592f19b48f9d974c86ad",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/87cdf1814bddf42e213da116b1bf43e79c588f": "f28bacc7aab0abd36ce9142736822ecd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/48eb1cbb46b16fec4ea8474ac81568a1cb196c": "b30823305d8e92dbe03b1c56672cc831",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/ba9167d74838c421f0e29520effba6ff20712f": "41fefbf0b043dd199a54689a1ccd6f10",
".git/objects/f7/477e8756484ad02d91a95d9194973a545e3b2c": "c73fc629b2b0845f1b92bdaddcce817b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "477d1369d8fb9862227f3882935c4ae2",
".git/refs/remotes/origin/main": "477d1369d8fb9862227f3882935c4ae2",
"assets/AssetManifest.bin": "3006861d4dd9fc8c225109b7cd103136",
"assets/AssetManifest.bin.json": "f729b53feb49a9e0f614f5912b17ad50",
"assets/AssetManifest.json": "356a51799558bcfc4a8013b36e091c3e",
"assets/assets/ALLMONEYBACKMYHOME.png": "79d2157a384cfbc414dbbf1f7671755d",
"assets/assets/loading/loading.json": "81122add3a5202c9eff2d8ff51edfa69",
"assets/assets/popjokerWorkShop.png": "f886925863f17fb739fc8a5d5c6a2dd9",
"assets/assets/popjokerWorkShopWhite.png": "094fe14fbba06116423045c5f8a0415c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "66d722a55140ddafb6d75babff7c7f49",
"assets/NOTICES": "a421a8a5aa040d7b8715cc7ccfa502d0",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "7f0719944d9d0ac238ab6c3d41113265",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "92440dd52b78e6589d796d64a28fb297",
"icons/Icon-192.png": "eaa343c22976240a5b31022adcd55f82",
"icons/Icon-512.png": "ed15017f72f2b813259df7b4d770ab99",
"icons/Icon-maskable-192.png": "eaa343c22976240a5b31022adcd55f82",
"icons/Icon-maskable-512.png": "ed15017f72f2b813259df7b4d770ab99",
"index.html": "1688fd48d2dba1a4e7afd30ba4827e9d",
"/": "1688fd48d2dba1a4e7afd30ba4827e9d",
"main.dart.js": "14743dcef43ed6b2d2f523c44b23d852",
"manifest.json": "ffca73c706117a2eeaecaa300754993f",
"version.json": "171675e7ced1e686e6efdad7499a7ceb"};
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
