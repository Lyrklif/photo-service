if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const u=s=>l(s,i),a={module:{uri:i},exports:o,require:u};e[i]=Promise.all(r.map((s=>a[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"8807b80b9d463349bd856c215fa6c551"},{url:"android-chrome-512x512.png",revision:"d9ffac18ac9a96365b2e3d2c071b2527"},{url:"apple-touch-icon.png",revision:"e39952d2a10fb55104522e265d829489"},{url:"assets/AppMessage-84d8840f.css",revision:null},{url:"assets/AppMessage-fef0ea14.js",revision:null},{url:"assets/FavoritesPage-9efb1649.js",revision:null},{url:"assets/FavoritesPage-e76b6894.css",revision:null},{url:"assets/index-57fa8b2e.js",revision:null},{url:"assets/index-a63f3a2c.css",revision:null},{url:"assets/KFOlCnqEu92Fr1MmSU5fABc4EsA-47aa3bfa.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc4-f7591131.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmSU5fBxc4EsA-455c2c1a.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmSU5fCBc4EsA-20dc200c.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmSU5fChc4EsA-b076e863.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmSU5fCRc4EsA-435e4b7f.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmSU5fCxc4EsA-51f3f418.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmWUlfABc4EsA-6a84eeee.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc4-f5aebdfe.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmWUlfBxc4EsA-1c9cc76f.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmWUlfCBc4EsA-5b6377da.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmWUlfChc4EsA-fc66f942.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmWUlfCRc4EsA-3c505383.woff2",revision:null},{url:"assets/KFOlCnqEu92Fr1MmWUlfCxc4EsA-4ec57f2a.woff2",revision:null},{url:"assets/KFOmCnqEu92Fr1Mu4mxK-f6734f81.woff2",revision:null},{url:"assets/KFOmCnqEu92Fr1Mu4WxKOzY-daf51ab5.woff2",revision:null},{url:"assets/KFOmCnqEu92Fr1Mu5mxKOzY-495d38d4.woff2",revision:null},{url:"assets/KFOmCnqEu92Fr1Mu72xKOzY-b7ef2cd1.woff2",revision:null},{url:"assets/KFOmCnqEu92Fr1Mu7GxKOzY-3c23eb02.woff2",revision:null},{url:"assets/KFOmCnqEu92Fr1Mu7mxKOzY-d368cf5b.woff2",revision:null},{url:"assets/KFOmCnqEu92Fr1Mu7WxKOzY-77b24796.woff2",revision:null},{url:"assets/PhotoBackground-3751cdb9.js",revision:null},{url:"assets/PhotoBackground-f1bdb9c4.css",revision:null},{url:"assets/PhotoDetails-6dda0c99.js",revision:null},{url:"assets/PhotoDetails-94444f5a.css",revision:null},{url:"assets/PhotoList-0c8a8691.js",revision:null},{url:"assets/PhotoList-a09ae426.css",revision:null},{url:"assets/PhotoPage-6973878e.css",revision:null},{url:"assets/PhotoPage-b2d9c357.js",revision:null},{url:"assets/ScrollTop-1b9c0e83.css",revision:null},{url:"assets/ScrollTop-f24d4736.js",revision:null},{url:"favicon-16x16.png",revision:"bc51720886f0cf7dcb3c9a9012a221dd"},{url:"favicon-32x32.png",revision:"41e128fe3ab3ffa29fa77c6327f5ad62"},{url:"favicon.ico",revision:"6ba44a382c3e531d12a13eb876916e48"},{url:"google8ae4170adcd360b9.html",revision:"68a4ce327ac429fe3d64a8cd824364c7"},{url:"images/background-desktop.webp",revision:"204dbf895ab01be30448198165723489"},{url:"images/background.webp",revision:"542140edbfe509ec8d1216f4a85ca763"},{url:"index.html",revision:"826bc59b6d1d417a4c5d55523996e73e"},{url:"mstile-144x144.png",revision:"dcbaaa08f964330a452f3146812699c0"},{url:"mstile-150x150.png",revision:"8bb43f5e59ab152cb58a5370aa988d8b"},{url:"mstile-310x150.png",revision:"fa8c68e3da540f9bead5a8bef0fb55e9"},{url:"mstile-310x310.png",revision:"74afeb4898b2201fa2c6ea1bb13387e5"},{url:"mstile-70x70.png",revision:"99e081db250dadd11f76da7a58b137ce"},{url:"registerSW.js",revision:"4ad92651cc6612de68b396694df41f11"},{url:"safari-pinned-tab.svg",revision:"aa068b8c7146f4261aa000e5390d63a9"},{url:"android-chrome-192x192.png",revision:"8807b80b9d463349bd856c215fa6c551"},{url:"android-chrome-512x512.png",revision:"d9ffac18ac9a96365b2e3d2c071b2527"},{url:"manifest.webmanifest",revision:"fc6077084b1244f7458d33f09622bf53"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
