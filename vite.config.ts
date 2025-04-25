import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylelint from "vite-plugin-stylelint";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stylelint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 必须使用绝对路径
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/common/var" as vars;
          @use "@/styles/common/mixin" as mixins;
        `,
      },
    },
  },
});
