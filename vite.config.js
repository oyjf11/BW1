import path from 'path'
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { join } from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "./src/assets/icons")],
      symbolId: "icon-[name]"
    })
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "/src/")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.imooc-front.lgdsunday.club/",
        changeOrigin: true
      }
    }
  }
})
