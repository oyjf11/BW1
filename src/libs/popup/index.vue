<template>
  <div class="popup">
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="isVisible"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="isVisible = false"
        ></div>
      </transition>
      <transition name="popup">
        <div
          v-if="isVisible"
          v-bind="attrs"
          class="w-screen z-50 fixed bottom-0 bg-white dark:bg-zinc-800"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock, useVModel } from "@vueuse/core"
import { watch } from "vue"

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})

defineEmits(["update:modelValue"])

const isVisible = useVModel(props)

const isLocked = useScrollLock(document.body)
watch(
  isVisible,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-enter-active {
  transition: all 0.3s;
}

.popup-leave-active {
  transition: all 0.8s;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(100%);
}
</style>
