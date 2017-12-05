var dataCacheName = 'BearEatEverything';
var cacheName = 'BearEatMama';
var filesToCache = [
  '/',
  '/images/favicon.ico',
  '/index.html',
  '/css/style.css',
  '/css/social.css',
  '/image/mama/01.jpg',
  '/image/mama/02.jpg',
  '/image/mama/03.jpg',
  '/image/mama/04.jpg',
  '/image/mama/05.jpg',
  '/image/mama/06.jpg',
  '/image/mama/07.jpg',
  '/image/mama/08.jpg',
  '/image/mama/09.jpg',
  '/image/mama/10.jpg',
  '/image/mama/11.jpg',
  '/image/mama/12.jpg',
  '/image/mama/13.jpg',
  '/image/mama/14.jpg',
  '/image/app_onemeal.png',
  '/image/icons/icon-128x128.png',
  '/image/icons/icon-144x144.png',
  '/image/icons/icon-152x152.png',
  '/image/icons/icon-192x192.png',
  '/image/icons/icon-256x256.png',
  '/kotlin.js',
  '/kotlin.meta.js',
  '/kotlin-html-js.js',
  '/kotlin-html-js.meta.js',
  '/output.js',
  '/output.js.map',
  '/output.meta.js'
];

// for offline mode
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});