'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f49f4d20020068c4263870307a2aa2cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "3d48a106582f51a001d2f9eeedc65e84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7259297d0ba82c4ad349c54c8f66e420",
".git/logs/refs/heads/master": "7259297d0ba82c4ad349c54c8f66e420",
".git/logs/refs/remotes/origin/master": "380e2e538aedcd5c54bc5b05d949845d",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/30f02c9fcc6d84973f14b518fe9e17ce7df665": "1c95b46ae8da89c18448044428796b24",
".git/objects/14/3b0c0c25da9f489242d3afe2ea56d9485484e0": "6b16b4d6a3095e9c53c3246c4826de7d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/7b705f88f0ecfe20d30c5c4463672411d86871": "333b61252ea3c06d296f25a3674c87c6",
".git/objects/1d/356dc1a0d1f790ceac39d520a0b22e07f2ddc9": "ee6fa1f2e5b8a379ef0cd39108175efa",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/1d77f590123573f919b269fbfa56c2015687e7": "c703bd035f30f10edce21845cdc6756f",
".git/objects/26/c74cc844e344d11ae54b50ac1dc421e4dca0fc": "cbfbc3965aa91cf811afd504243fe7cd",
".git/objects/2e/2c0e69e2778281493739a07615e5b8c07269e6": "70efc98be8d1b99df0a999729e5c2f55",
".git/objects/2f/11627fcee386d2b08aaeb626d0b13b3666a8fe": "b7e5c3c9fffdf694c664054ab3424442",
".git/objects/31/9a7af5fa2ab134009bf715567dfd1d17910c26": "77eac8eca4da5ae3f55c4a1470f5e9ab",
".git/objects/37/3c81062d3fbff5d4c36cc4c82813da1fe9a41e": "ec02734291d1ecfa0827aba81ddb17a3",
".git/objects/55/3409ee1c5f5733640cfc48714a10bc89713dc8": "d235367877ed329814d8b15c73d2432f",
".git/objects/57/2ddef02998f096f052abe0ae52f7f86c14e3f9": "6edf329601c84880b34ace5fa0d6014f",
".git/objects/5a/754401ef9d5281e830296f7a1db7eb0f863adf": "f55fabe915f39700c24a73ed8d8901e7",
".git/objects/5d/2a8aa7693d41dfef9cbfacfb80bc262c59cff4": "59f07da4abb5cca7855278eefb45d7e4",
".git/objects/68/cb1ab34c26c1373df3a4042a44559287237918": "87cbf1dd118d9a09bff517304c2043af",
".git/objects/6e/f20d82aa0e5d9bc580247373e2e0d7c23f07bf": "ea85aaa53416887cac8dc504fd20757f",
".git/objects/7c/b126b3e7b48493bbd70211307e35e5c8d41d26": "d7fa1fe873b23b2b650fdc5bea83888b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/16e518521372f5e2fa643c6883c2d9369dfc39": "55a3bf108d0a40e3e97f7b3fff32170b",
".git/objects/87/4e00ec44c4a10eaf857679423c118e10be2edf": "f897c52bd5aa187ad38a3570bf1d34ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/df61e6f8590d90d664285cad4bd9a8bd8780d8": "f456a78b52819c8ff99c98602a056592",
".git/objects/9d/f83524e7cc85a7890aa41ccb2cd553e53ee481": "b6d4ff4d14d6f279880acb0f550d70db",
".git/objects/9e/333ae7845fc64c8cb17aeab87fd2895e91d406": "e9dd64e3ac10789aff6104b4109b7cb3",
".git/objects/a3/b52f96ce097084b27fde0218134b3bedaa82ef": "33f845502dbdcd1ce1e956fef3d52386",
".git/objects/a5/8dbdc75836443a6a7ebf79a5937ee15c9a5261": "f4198c8f2a3f45e1b8e258d6d105a2c2",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/6ba6540ccbe5c1512f2598ea891b4961b6e42f": "4525c5b68f0f2a8cd195ee19d77d7a42",
".git/objects/ae/e633d21bdb4c2c24840c763dfe268859cbaeab": "163f20e4d06673447a376fecdfa17d80",
".git/objects/b5/e3eecfc65ff68d57f6e6003aaaddb00c1cf685": "179c9b545d632a06c5a9a92e97cb446e",
".git/objects/b6/b134ae701183584c256569b82adf6aff775687": "94f7f439d8e0aff0b00eb8e129f591e6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1e1e348f3a85939627119120117b2d48b6798c": "d513db948ec3831ee3544b1c0ec8ca13",
".git/objects/ba/ce80ebc9dd39804ae9f271bf6b473edd8dfbf0": "4bd68881593be0dca46a7a7038f2d66c",
".git/objects/c1/8a57b0d29c41221d15231c1ecc552b9ac14065": "d775b2e74bb88ccd2a12768f20223739",
".git/objects/c3/9628d93fa355c6f0b4e0906a143bf5b2b11f8c": "196002a0615162d8503df8fc71b714ff",
".git/objects/c7/7b7464b049c7d6666155c61df5f486f241f760": "4ab8ee67a3eb5dc207a2be6cb6cffe4e",
".git/objects/c7/b501d466fc40843032d16a3ad5eb174b4ef17b": "124fe6f6080a710e53233d28c759784f",
".git/objects/cd/58687382d5212f7a225121dac9c643ab03409d": "0b667abcda4075e65ea929f403c5d797",
".git/objects/d2/6a11b5ef7056cbf0f45f4e304088989ad39736": "fd684b8ae983723c432fa1e92adc04f6",
".git/objects/d6/3f86cdadd533eef498bab9deb9704a36997f5f": "83e186f4a028f225c1e4cb93a9cb95b6",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/e5/6d452d6b7dee98d7681b39de8f7640e5b931da": "daae848dc458ac93461609d8fab6e620",
".git/objects/ee/0f947c3a0f950da473e2360e452829c2847cf8": "5e4143da8bad483bb49cf066051d40eb",
".git/objects/f0/39a745777d425c33b5a24abf5e99d831893a7b": "b32d7b1211e840f16fd0b3cacd782a3e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "018f84a77d57f25035849f06eaf45f14",
".git/refs/remotes/origin/master": "018f84a77d57f25035849f06eaf45f14",
"assets/AssetManifest.json": "3987dd402343ee3989f2cf8c670d3535",
"assets/assets/fonts/SFUIDisplay-Light.ttf": "eb5a70ae10397bcb246c487d82ea1e34",
"assets/assets/fonts/SFUIDisplay-Medium.otf": "73ab62f0506129eb3638d4be0b695479",
"assets/assets/fonts/SFUIDisplay-Regular.otf": "d4550c5e326a628ac8ef82e9f2703484",
"assets/assets/fonts/SFUIDisplay-SemiBold.otf": "10a14e64c8f94a4270c05aa42114e0f2",
"assets/FontManifest.json": "440a204ac29bcd3cf8a323ea9d3624e4",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/appImage.png": "2d2a1da775dc82cb6974eb53548f57e3",
"assets/images/bg1.png": "a4a1a1f5f6bfad4f50197e6a6027aad2",
"assets/images/design_develop.png": "0682263705398c844d4ea372f35ce41c",
"assets/images/github.png": "923822dbeba530e8a91d3cd1570beb12",
"assets/images/gmail.png": "828e4779415a6ad47ff7fa9d3c4a5772",
"assets/images/google.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/images/image%25201.png": "99dc28c90d3034d1d888da23e7f209e1",
"assets/images/linkedin.png": "43d6f7a595c8d82c4cbcaa5dff7c434f",
"assets/images/moji.png": "ec6dc4851d081309b6cd95143b1d5582",
"assets/images/pic2.jpg": "90f2d1cce78ee0aef46c8c3d9d6cffdc",
"assets/images/profile.jpg": "6accd6fbefe28106c8cbf7d0d13303f1",
"assets/images/project1.png": "04f282d56f876ac236ffdb4daa8ad264",
"assets/images/project2.png": "34a9ccc14c32bc8c5f4798efd6cc8b90",
"assets/images/project3.png": "0daadcfb273fdab7759256266f963bfb",
"assets/images/project4.png": "6a82529d082d8779f8fd6a17aa82fc0c",
"assets/images/project5.png": "1a7101943ab0da8b0e1f277a7704b530",
"assets/images/project6.png": "2bddf0246eea7f3e47ebe18944b19c66",
"assets/images/project7.png": "0fe1563de707c7620b81c8781ba93fe3",
"assets/images/shot.png": "fe6113c749879c8c7f109393b6a85c87",
"assets/images/shot1.png": "8874b696cfeb3b79db76363961ff5017",
"assets/images/testing.png": "c5e479632eef4d61d63f292192360460",
"assets/images/twitter.png": "21833815cb3abef0aed9cdabdd090c90",
"assets/images/ui.png": "040be3008234a7eeba30af8bb3320dae",
"assets/NOTICES": "0f8a0f75f9aa458eaf36a2e88d9c33d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "8f7375da0972bf75711a54e0b93b0e9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3cb4ac9aeeb1bcfd15d53bb32f65ff6e",
"/": "3cb4ac9aeeb1bcfd15d53bb32f65ff6e",
"main.dart.js": "375f33d43eab0858cbb31d3e25241b48",
"manifest.json": "7268d731e85213fad6b35f4c3b52f2e6",
"version.json": "aaafa928a4f8616604eca12d830fe765"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
