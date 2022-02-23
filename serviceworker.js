//set up cache name and files to add to it. VERSION 1

const CACHE_NAME = "resume-site-v2";
const CACHE_URLS = [
  "/",
  "index.html",
  "resume.html",
  "skills.html",
  "contact.html",
  "hangman.html",
  "think-of-a-number.html",
  "fonts/Rubik-Medium.woff",
  "fonts/Rubik-Medium.woff2",
  "fonts/PT-Sans.woff",
  "fonts/PT-Sans.woff2",
  "images/logo.png",
  "images/hangman.svg",
  "images/toan.svg",
  "images/land-office@1x.jpg",
  "images/land-office@2x.jpg",
  "images/land-office@1x.webp",
  "images/land-office@2x.webp",
  "images/port-office@1x.jpg",
  "images/port-office@2x.jpg",
  "images/port-office@1x.webp",
  "images/port-office@2x.webp",
  "images/sq-office@1x.jpg",
  "images/sq-office@2x.jpg",
  "images/sq-office@1x.webp",
  "images/sq-office@2x.webp",
  "styles/style.css",
  "json/hangman.json",
  "scripts/hangman.js",
  "scripts/toan.js",
  "site.webmanifest",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "apple-touch-icon.png",
  "browserconfig.xml",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon.ico",
  "mstile-150x150.png",
  "safari-pinned-tab.svg",
];



//add all URLs to cache when installed
self.addEventListener("install", function(event){
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                //add all URLs to cache
                return cache.addAll(CACHE_URLS);
        })
    );
});

//On activate update the cache with the new version and clean out old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName.startsWith('resume-site-') && CACHE_NAME !== cacheName) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  //add all URLs to cache when installed
//...
//user has navigated to page - fetch required assets
self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            //check whether asset is in cache
            if(response){
                //asset in cache, so return it
                console.log(`Return ${event.request.url} from cache`);
                return response;
            }
            //asset not in cache so fetch asset from network
            console.log(`Fetch ${event.request.url} from network`);
            return fetch(event.request);
        })
    );
});

