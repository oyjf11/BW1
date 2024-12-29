<template>
    <div class="bg-white w-full border-b border-b-zinc-200 px-2 py-1 dark:bg-zinc-800  dark:border-b-zinc-700">
        <div class="flex items-center">
            <img
                class="h-4 cursor-pointer mr-2"
                src="https://m.immoc.com/static/wap/static/common/img/logo-small@2x.png"
                @click="onToHome"
            />
            <header-search class="mr-1"></header-search>
            <header-theme class="mr-1"></header-theme>
            <header-my></header-my>
        </div>
    </div>  
</template>
    
<script setup>
import HeaderSearch from "./components/header-search.vue"
import HeaderTheme from "./components/header-theme.vue"
import HeaderMy from "./components/header-my.vue"
import { useRouter } from "vue-router";

const router = useRouter();
const onToHome = () => {
    router.push('/')
}
</script>
    
<style lang="scss" scoped>

</style>