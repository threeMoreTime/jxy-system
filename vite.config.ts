// vite配置文件
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入node内置的模块path：获取绝对路径
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      // 将src路径配置为@符
      '@':path.resolve(__dirname,'src')
    }
  }
})
