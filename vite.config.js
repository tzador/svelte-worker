import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "docs",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/svelte-worker.js"),
      name: "Svelte Worker",
      fileName: "svelte-worker",
    },
  },
});
