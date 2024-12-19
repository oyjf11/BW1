<template>
    <svg aria-hidden="true">
      <use :class="fillClass" :xlink:href="symbolId" :fill="color" />
    </svg>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    // svg name
    name: {
      type: String,
      required: true
    },
    // svg color
    color: {
      type: String
    },
    // tailwind class name of svg
    fillClass: {
      type: String
    }
  })
  
  const symbolId = computed(() => `#icon-${props.name}`)
  </script>
  
  <style lang='scss' scoped></style>
  