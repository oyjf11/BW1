import { computed } from 'vue'; // 计算属性
import {PC_DEVICE_WIDTh} from '@/constants';
import { useWindowSize } from '@vueuse/core';

const {width} = useWindowSize();

/**
 * 依据屏幕宽度 判断当前是否为移动端设备
 */

export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTh;
})

/**
 * 判断当前是否为移动设备
 */
// export const isMobileTerminal = computed(() => {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//      navigator.userAgent
//   )
// })

export const useREM = () => {
    const MAX_FONT_SIZE = 40
    document.addEventListener('DOMContentLoaded', () => {
      const htmlEl = document.documentElement
      let fontSize = window.innerWidth / 10
      fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
      htmlEl.style.fontSize = fontSize + 'px'
    })
  }