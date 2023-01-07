<template>
  <div
    v-for="(app, index) in MicroApps"
    v-show="route.path.startsWith(app.activeRule)"
    :id="app.container"
    :key="index"
    h-full
    w-full
  ></div>
</template>

<script setup lang="ts">
import { MicroApps } from '../../router/qiankun'
import { loadMicroApp } from 'qiankun'
import { useRoute } from 'vue-router'

const route = useRoute()

const path = route.path
const currentAppIndex = MicroApps.findIndex((item) => path.includes(item.name))
if (currentAppIndex !== -1) {
  const currApp = MicroApps.splice(currentAppIndex, 1)[0]
  MicroApps.unshift(currApp)
}
// loadMicroApp 返回值是 app 的生命周期函数数组
MicroApps.map((item) =>
  loadMicroApp({
    ...item,
    container: `#${item.container}`
  })
)
</script>

<style scoped></style>
