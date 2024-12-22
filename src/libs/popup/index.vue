<template>
  <div class="popup">
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="modelValue"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="emits('update:modelValue', false)"
        ></div>
      </transition>
      <transition name="popup">
        <div
          v-if="modelValue"
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
import { useScrollLock } from "@vueuse/core"
import { watch } from "vue"

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})

const emits = defineEmits(["update:modelValue"])

const isLocked = useScrollLock(document.body)
watch(
  () => props.modelValue,
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
