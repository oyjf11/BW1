<template>
    <div class="aaas">
        <mobileNavigationVue v-if="isMobileTerminal" :data="categoryData"/>
        <pcNavigationVue v-else/>
    </div>
</template>
    
<script setup>
import {isMobileTerminal} from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
import {getCategory} from '@/api/category.js'
import { ref } from 'vue'
import {ALL_CATEGORY} from '../../../../constants/index'

const categoryData = ref([])

const getCategoryData = async () => {
    const {categorys} = await getCategory();
    categoryData.value = categorys;
    categoryData.value.unshift(ALL_CATEGORY);
}

getCategoryData()
</script>
    
<style lang="scss" scoped>
    
</style>