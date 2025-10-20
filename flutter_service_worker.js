'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

<<<<<<< HEAD
const RESOURCES = {".git/COMMIT_EDITMSG": "7010cabe6b22153a51888f764def2643",
".git/config": "2af6dfe1c5dcbfe19214f65abe0ee20f",
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
".git/index": "d64fb56542a83ea8483dfc0b1c83386f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec658244748972c2c6245c3e96865234",
".git/logs/refs/heads/main": "844ab0af2e7ac7b2b5c6558c81fe3544",
".git/logs/refs/remotes/origin/main": "0b531fc08f0f5165ef5d890d14d6fdcb",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/15/18ac01846409b7c17765d554b443d771db4a3c": "aacaffaccb9e093a90e804cff5055e03",
".git/objects/15/d5664c0d691d42e697a3c5a992e97869dbcd15": "d99501c06bde2f2e378a35c8d3bffb8d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/b28a586a6da25434e970ca4bc6f6ebbc3ea208": "efb2cb3039e49651bb91972ef610713f",
".git/objects/22/6f1b3b4fa87f76d96f8a70d36484f691358c4a": "8366adc88fd12c2ebb8890b5c1414521",
".git/objects/29/91cf86fe6aab830c350653bc552836eb11b9f1": "b29260e7c11617c6230e746f792b468b",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/45/a9a3abb6eb5f96328c3ebeba7868f3f660aac6": "64ee96b9b3b211985351e5622eeaac1f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/9712a097df5376d4e60988c5ed4340580b7ee5": "7f2c9d713996dd0498eaa454a0db691f",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/57/64142c34663d5e0ccd46e1be1b026fc1a7a357": "393448346578ffa885d80e492e22107b",
".git/objects/58/b0b6a08df400869e10aaca3e78a6b8471adc60": "d4cc5bcb0b08f6e6212c14b69a116110",
".git/objects/5b/04eb11227a95d298aa8d71aadb497ed3435e1c": "6a658e0315e854b821fb85dd15a7c1ce",
".git/objects/5d/139eb668157ea8c7ae810d9848d6eaf9040647": "7905b8cb50f9c12a12985b5a53ee0c91",
".git/objects/5e/29fd32a4cffe4bff0b881181aa74287ca22585": "3244eb8490dfed521d56a1d0e8b394c9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/4b57cc2f2aa06f2c2847d44be678a625753b4e": "a9d022eb7f346412a84c2999ed0f0cb5",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/6eba7bd93f32340d31c2a0ce7c30cac0ee640d": "96864ab25fbf552573d1502bd05a7d2d",
".git/objects/81/177b1f5ec03e1b49a9918aa2347f7e1590b594": "1a1a10ebd948d7f7573ba1d2e917fc36",
".git/objects/86/35f777b351da9dac4b8f2837e82e588fe5a4cd": "9cc5242b1717f45b8498ce2fba9bb88d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c30341d839c7a2493918d55c04a09afca3493a": "d2d0abe278c48eec4c3b8a7d7e7cd3ac",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/97eedfc85df24735a3d74922c05077559a6469": "6e5e7bfb485a2dbd128c727b57fc8a20",
".git/objects/a3/8bb191d00dc70143f8ee98293705f73c906f23": "7c436512bb9fe8524138b5ca09f07513",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d9e3a9b6a209196886bd139b09a64fd614d9b0": "1ee64fc2afa1bf0154545b29d8edcdf5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/602a751f17983cafbc0dfbf42f44726c515dbd": "4f2c7f774f6b9ec1e2511c8adf06358e",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/379735c24e9adaf48cef846ba3b01fb626a380": "c32bb3ad2de72af73a8cd0fe3b43be94",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dd/5773c3352b3647908dfa8247572de257404b7d": "7b442ead1b088be7720284554b32e012",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/05185d69e1f0365df2f5c7c56a2a9719ca97a2": "6b6ac46372f5e42e7479fba9d161365b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/021ca77f44833e94158ac4db8dfa0e47a22c10": "33767d4dfc0d189b113f804fc9fe8cc7",
".git/objects/fa/32f360f6eaa3b1de5a36229fba57086f812e71": "f6cc4cfff903af686c5f71530ee49d75",
".git/objects/fb/4aad2b9e3797673a951b4458b6e6031736b3d1": "7795e448da7f0d08e602bb7a0a66590e",
".git/objects/fc/947307f6848737584104e38d1e4d2f8789451e": "88399514503b05cb0beafc9a89d6b0b2",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "9b7a9b1754e9702bcacac4782c4cd04e",
".git/refs/remotes/origin/main": "9b7a9b1754e9702bcacac4782c4cd04e",
"assets/AssetManifest.bin": "15141a3c0c4e0349cc02ffc7160de4fd",
=======
const RESOURCES = {"assets/AssetManifest.bin": "15141a3c0c4e0349cc02ffc7160de4fd",
>>>>>>> 20b28a586a6da25434e970ca4bc6f6ebbc3ea208
"assets/AssetManifest.bin.json": "ae893cb1529b01ca10929cc91e441ce6",
"assets/AssetManifest.json": "a9c60b909ce9688e84a6db098b7760dc",
"assets/assets/Calming_Ambient.m4a": "3e970d69ab34b35f2f5e4a8cc99db59d",
"assets/assets/Freedom_Run.m4a": "4488e84d57c1b2809b92aacc2158b71a",
"assets/assets/Happy_Vlog.m4a": "b852a000e0769c94fd89d098d5764cf8",
"assets/assets/Inspire__Corporate.m4a": "f786144bd801c75369672a599c50eb69",
"assets/assets/Inspiring_Motivational.m4a": "8d611033886f40fad9ee8d14cd8371c9",
"assets/assets/logo.png": "bb25a5cf4d5a6f23cb0f95050ef4162f",
"assets/assets/Stock-Waves.m4a": "25f410784d0f7a691997cf7a2b2dd3f9",
"assets/assets/Upbeat_Corporate.m4a": "85bb9a502022eb2ec831db3c031cb4e2",
"assets/assets/Uplifting_And_Inspiring.m4a": "b4231eaf201075ed71ce7bf0bcc57d7e",
"assets/assets/Uplifting_Corporate.m4a": "dbe6594888b399e6c742e9486ae35244",
"assets/assets/Zelimir_Panic.m4a": "2573e7b0f061211ace44b4f9b2cd4f85",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bdf6f4096efecdcd163708049c29d42d",
"assets/NOTICES": "59c3f47649b219b71ba4a443c2b36991",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
<<<<<<< HEAD
"flutter_bootstrap.js": "e98e7fb1f150cb05cbfb8067b9abe203",
=======
"flutter_bootstrap.js": "13ca9eb25cea89ea8b4c57d102c9c7aa",
>>>>>>> 20b28a586a6da25434e970ca4bc6f6ebbc3ea208
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c50e1d83ad12cb508cfcac4e3401927",
"/": "6c50e1d83ad12cb508cfcac4e3401927",
<<<<<<< HEAD
"main.dart.js": "0bfa3b42bcae70b194ce5d8437af23d8",
=======
"main.dart.js": "3cdde43fe6e9178a131ca87ebbffab0b",
>>>>>>> 20b28a586a6da25434e970ca4bc6f6ebbc3ea208
"manifest.json": "24cab26303d011feba6018e8b2c7b0a3",
"version.json": "6471cbd63eb72a5a146190615ed1ada1"};
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
