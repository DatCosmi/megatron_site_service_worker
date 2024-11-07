// public/sw.js
const CACHE_NAME = "products-cache-v1";
const IMAGE_URLS = ["/product1.png", "/product2.png", "/product3.png"];

self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Cache Opened");
      return cache.addAll(IMAGE_URLS).then(() => {
        console.log("Service Worker: All images cached");
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
    console.log("Service Worker: Fetching image", event.request.url);
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log("Service Worker: Found in cache:", event.request.url);
          return response;
        }

        console.log(
          "Service Worker: Not found in cache, fetching:",
          event.request.url
        );
        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            console.log(
              "Service Worker: Caching new image:",
              event.request.url
            );
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Service Worker: Removing old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
