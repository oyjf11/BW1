import { computed } from 'vue'; // 计算属性
import {PC_DEVICE_WIDTh} from '../constants'

/**
 * 依据屏幕宽度 判断当前是否为移动端设备
 */

export const isMobileTerminal = computed(() => {
    return document.documentElement.clientWidth < PC_DEVICE_WIDTh;
})