import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/svelte-worker.js"),
      name: "Svelte Worker",
      fileName: "svelte-worker",
    },
  },
});
