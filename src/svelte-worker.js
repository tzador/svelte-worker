import { compile } from "svelte/compiler";

if (typeof window !== "undefined") {
  navigator.serviceWorker
    .register("/svelte-worker.js", { type: "module" })
    .catch((error) => {
      console.error("Service worker registration failed:", error);
    });
} else {
  self.addEventListener("install", (event) => {
    event.waitUntil(self.skipWaiting());
  });

  self.addEventListener("activate", (event) => {
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
      "https://svelte-worker.surge.sh/svelte-internal-index.js"
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
}
