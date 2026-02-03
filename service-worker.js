self.addEventListener("install", e=>{
 e.waitUntil(
  caches.open("eduardo-sport").then(c=>c.addAll([
   "eduardo_sport.html",
   "manifest.json",
   "icon.png"
  ]))
 );
});

self.addEventListener("fetch", e=>{
 e.respondWith(
  caches.match(e.request).then(r=>r||fetch(e.request))
 );
});