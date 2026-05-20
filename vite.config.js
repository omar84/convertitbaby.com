import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  build: {
    target: "es2022",
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
      },
    },
  },
});