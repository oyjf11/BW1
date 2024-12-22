<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulRef"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <li
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200 dark:bg-zinc-800"
        :style="sliderStyle"
      ></li>
      <!--hamburger icon-->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
        @click="handleClickHamburger"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>

      <li
        :ref="setLiRefs"
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-zinc-100': itemIndex === index }"
        @click="handleClick(item, index)"
      >
        {{ item.name }}
      </li>
      <m-popup v-model="isVisible" type="true">
        我是内容
      </m-popup>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useScroll } from "@vueuse/core"

defineProps({
  data: {
    type: Array,
    required: true
  }
})

const sliderStyle = ref({
  transform: "translateX(0px)",
  width: "50px"
})

const itemIndex = ref(0) // 定义点击的li的index
const ulRef = ref(null) //获取父元素

const { x: ulScrollWidth } = useScroll(ulRef)
let itemRefs = []
const setLiRefs = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}

const handleClick = (item, index) => {
  console.log(ulRef);
  itemIndex.value = index
}
watch(itemIndex, (index) => {
  console.log(index);
  const { left, width } = itemRefs[index]?.getBoundingClientRect()
  // console.log(left, width);
  sliderStyle.value = {
    transform: `translateX(${ulScrollWidth.value + left - 10}px)`,
    width: `${width}px`
  }
})

const isVisible = ref(false);
const handleClickHamburger = () => {
  isVisible.value = !isVisible.value;
  console.log('isVisible.value ', isVisible.value )
}
</script>

<style lang="scss" scoped></style>
