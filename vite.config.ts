import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import webfontDownload from "vite-plugin-webfont-dl";
import path from "path";
import replaceAllInserter from "string.prototype.replaceall";

replaceAllInserter.shim();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg-sprite")],
    }),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",
    ]),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
