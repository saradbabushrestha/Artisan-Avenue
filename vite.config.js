import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "build", // Change 'build' to your desired directory name
  },
});
