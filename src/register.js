navigator.serviceWorker
  .register("/worker.js", { type: "module" })
  .then((registration) => {
    console.log("Service worker registered:", registration);
  })
  .catch((error) => {
    console.error("Service worker registration failed:", error);
  });
