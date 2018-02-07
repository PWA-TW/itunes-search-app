<!-- START: {Adding Service Worker} {4} out of {4} -->
importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@2.1.2/build/importScripts/workbox-sw.prod.v2.1.2.min.js');
<!-- END: {Adding Service Worker} {4} out of {4} -->
<!-- START: {Adding Service Worker} {1} out of {4} -->
self.addEventListener('install', function (event) {
  console.log('%c ServiceWorker install method', 'color: #FF5722');
});

self.addEventListener('activate', event => {
  console.log('%c ServiceWorker activate method', 'color: #CDDC39');
});
<!-- END: {Adding Service Worker} {1} out of {4} -->