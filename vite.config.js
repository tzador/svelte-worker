import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/compiler.js"),
      name: "Svelte Compiler",
      fileName: "compiler",
    },
  },
});
