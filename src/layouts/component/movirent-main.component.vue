<template>
  <div class="layout">
    <the-header />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheHeader from './the-header.component.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  width: 100%;
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>