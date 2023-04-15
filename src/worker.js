import compile from "./compiler.js";

self.addEventListener("install", (event) => {
  // The service worker will be installed immediately
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  // The service worker will take control of all clients immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith(".svelte")) {
    event.respondWith(handleCustomResponse(event.request));
  }
});

async function handleCustomResponse(request) {
  const response = await fetch(request);
  const source = await response.text();
  const result = compile(source, {
    sveltePath: "/svelte",
  });
  const js = result.js.code.replace(
    /\/svelte\/internal/g,
    "/svelte/internal/index.mjs"
  );

  const headers = new Headers(response.headers);
  headers.set("content-type", "application/javascript");
  const modifiedResponse = new Response(js, {
    status: response.status,
    statusText: response.statusText,
    headers: headers,
  });
  return modifiedResponse;
}
