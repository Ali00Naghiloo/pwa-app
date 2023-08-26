// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("my-cache")
      .then((cache) => cache.addAll(["/index.html", "/path-to-static-files"]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
