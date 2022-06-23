import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViewLauncherVuePlugin from '@view-launcher/rollup-plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  require('dotenv').config({ path: './.env.local' })

  return {
    plugins: [
      vue(),
      ViewLauncherVuePlugin({
        entry: path.resolve(__dirname, './src/main.js'),
        theme: 'dark',
        pathMap: ['/app/', process.env.VIEW_LAUNCHER_LOCAL_PATH || '']
      })
    ]
  }
})
