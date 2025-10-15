const CACHE_NAME = 'menu-asilo-v5';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Installazione del Service Worker
self.addEventListener('install', (event) => {
  // Forza l'attivazione immediata del nuovo service worker
  self.skipWaiting();
  
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
  // Prendi il controllo immediatamente
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
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Intercettazione delle richieste con strategia mista
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Network-First per menu-data.txt (sempre aggiornato)
  if (url.pathname.includes('menu-data.txt')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Salva in cache la nuova versione
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Se offline, usa la cache
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // Cache-First per tutto il resto (HTML, CSS, JS, immagini)
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        }).catch(() => {
          return caches.match('./index.html');
        });
      })
  );
});

// Ascolta messaggi per forzare l'attivazione
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
