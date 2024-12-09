import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, '/src/')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-front.lgdsunday.club/',
        changeOrigin: true
      }
    }
  }
})
