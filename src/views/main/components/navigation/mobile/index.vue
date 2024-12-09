<template>
    <div>
        mobile navigaton
    </div>  
</template>
    
<script setup>
import {getCategory} from '@/api/category.js'

const getCategoryData = async () => {
    const res = await getCategory()

    console.log('res', res)
}

getCategoryData()
</script>
    
<style lang="scss" scoped>
    
</style>