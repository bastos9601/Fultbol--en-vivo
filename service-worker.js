self.addEventListener('install', function(e) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
  // Opcional: puedes hacer cache aquí
});
