import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// import ElementPlus from 'unplugin-element-plus/vite'
// 你也可以使用 unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(),
  //   ElementPlus({
  //   useSource: true,
  // }),
  //  use unplugin-vue-components
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          // directives: true,
          // version: "2.1.5",
        }),
      ],
    }),
],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`, // 添加公共样式
      }
    },
  }
})
