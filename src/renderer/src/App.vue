<script setup lang="ts">
const targetPage = `${location.origin}/vue`

if (location.href !== targetPage) {
  location.href = targetPage
}
</script>

<template>
  <div id="sub-app"></div>
</template>

<style lang="less">
@import './assets/css/styles.scss';
</style>
