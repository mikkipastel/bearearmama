var dataCacheName = 'BearEatEverything';
var cacheName = 'BearEatMama';
var filesToCache = [
  '/',
  '/images/favicon.ico',
  '/index.html',
  '/css/style.css',
  '/css/social.css',
  '/images/mama/01.jpg',
  '/images/mama/02.jpg',
  '/images/mama/03.jpg',
  '/images/mama/04.jpg',
  '/images/mama/05.jpg',
  '/images/mama/06.jpg',
  '/images/mama/07.jpg',
  '/images/mama/08.jpg',
  '/images/mama/09.jpg',
  '/images/mama/10.jpg',
  '/images/mama/11.jpg',
  '/images/mama/12.jpg',
  '/images/mama/13.jpeg',
  '/images/mama/14.jpeg',
  '/images/app_onemeal.png',
  '/images/icons/icon-128x128.png',
  '/images/icons/icon-144x144.png',
  '/images/icons/icon-152x152.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-256x256.png',
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