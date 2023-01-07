<template>
  <div>
    <SidebarButton
      v-for="(option, index) in options"
      :key="index"
      color-text
      flex
      flex-col
      flex-1
      :icon="option.icon"
      :active="option.path ? route.path.startsWith(option.path) : false"
      @click="MenuBtnOnClickGenerator(option)()"
    ></SidebarButton>
  </div>
</template>

<script setup lang="ts">
import { buttonGroupOptions, buttonOption } from './constant'
import SidebarButton from './SidebarButton.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()
defineProps<{
  options: buttonGroupOptions
}>()

const MenuBtnOnClickGenerator = function (option: buttonOption): () => void {
  return () => {
    const { path, callback } = option

    if (!path && !callback) {
      return
    }

    if (typeof callback === 'function') {
      setTimeout(callback, 0)
    }

    if (path) {
      router.push(path)
    }
  }
}
</script>

<style scoped></style>
