# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

1. 先构建移动端 再构建pc端

2. import { computed } from 'vue'; // 计算属性




1. vueUse 
2. useWindowSize


<!-- vite-plugin-svg-icons
npm i --save-dev vite-plugin-svg-icons@2.0.1
vite 处理 svg矢量图
导入 注册plugin
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './src/assets/icons')],
      symbolId: 'icon-[name]'
    })
  ],
注册svg-icon import 'virtual:svg-icons-register' -->


const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '47px'
})
:ref="getLiRefs" 绑定一个函数 获取所有的 ref 元素
onBeforeUpdate itemsRef = []
import { useScroll } from "@vueuse/core"


unshift


<teleport to="body">

useVModel

模块自动化注册
vite glob导入
vue defineAsyncComponent