<template>
  <div class="fixed top-0 left-0 w-screen h-screen">
     <!--一级路由出口-->
     <router-view/>
  </div>
</template>
  
<script setup>
  import {isMobileTerminal} from './utils/flexible'
</script>
  
<style lang="scss" scoped>
  
</style>