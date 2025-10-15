const CACHE_NAME = 'menu-asilo-v2';
const urlsToCache = [
  './menu.html',
  './index.html',
  './manifest.json',
  './menu-data.txt'
];

// Installazione del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aperta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Attivazione del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminazione cache vecchia:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercettazione delle richieste
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - restituisce la risposta dalla cache
        if (response) {
          return response;
        }

        // Clona la richiesta
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Controlla se la risposta è valida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clona la risposta
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Se offline e non in cache, restituisce la pagina principale
          return caches.match('./menu.html');
        });
      })
  );
});
