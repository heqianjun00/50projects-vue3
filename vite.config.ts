import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 提示找不到path模块，安装即可：npm install @types/node --save-dev
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: ['.js', '.json', '.ts']
  },
  plugins: [vue()],
})
