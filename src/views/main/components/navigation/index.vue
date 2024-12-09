<template>
    <div>
        <mobileNavigationVue v-if="isMobileTerminal"/>
        <pcNavigationVue v-else/>
    </div>
</template>
    
<script setup>
import {isMobileTerminal} from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
</script>
    
<style lang="scss" scoped>
    
</style>