self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activado');
});

self.addEventListener('fetch', (event) => {
  // Puedes personalizar el manejo de recursos aquí
});
