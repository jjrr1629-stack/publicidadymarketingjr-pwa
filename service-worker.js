self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', event => {
  // Permite cargar los recursos desde Blogger o caché
  event.respondWith(fetch(event.request));
});
